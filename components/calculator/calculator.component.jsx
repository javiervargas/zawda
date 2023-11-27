import styles from './calculator.module.scss';
import React, { useState, useEffect , useRef} from 'react';
import moment from 'moment';
import dynamic from 'next/dynamic';

async function fetchPriceData(years, currency) {
    try{
        const endDate = Math.floor(Date.now() / 1000);
        const startDate = Math.floor((Date.now() - years * 365*24*60*60*1000) / 1000);
        const response = await fetch(
            `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=${currency.toUpperCase()}&toTs=${endDate}&limit=${years*365}`
        );
        const data = await response.json();
        if (data && data.Data && data.Data.Data){
            return data.Data.Data.map(item => ({
                date: new Date(item.time * 1000).toISOString().split('T')[0],
                price: item.close,
            }));
        }else{
            console.log("Wewew")
        }
       
    } catch(error){
        console.log(error , "Failed to Fetch price Data from cyptocompare")
        console.log(error.message)
    }
   
}
async function fetchPriceDataFromCoinGecko(years, currency) {
    try{
        const endDate = new Date();
        const startDate = new Date(endDate);
        startDate.setFullYear(startDate.getFullYear() - years);
        
        const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=${currency.toLowerCase()}&from=${startDate.getTime() / 1000}&to=${endDate.getTime() / 1000}`
        );
        const data = await response.json();
        return data.prices.map(item => ({
            date: new Date(item[0]).toISOString().split('T')[0],
            price: item[1],
        }));
    }catch(error){
        console.log("Error fetching price data from CoinGecko:", error);
    }
    
}
async function fetchBTCPriceDataInUSD(years) {
    try{
        const endDate = Math.floor(Date.now() / 1000);
        const startDate = Math.floor((Date.now() - years * 365 * 24 * 60 * 60 * 1000) / 1000);
        const response = await fetch(
            `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&toTs=${endDate}&limit=${years * 365}`
        );
        const data = await response.json();
        return data.Data.Data.map(item => ({
            date: new Date(item.time * 1000).toISOString().split('T')[0],
            price: item.close,
        }));
    } catch(error){
        console.log("Error fetching BTC price data in USD:", error);

    }
   
}
const BTCChartComponent = dynamic(() => import('../../components/calculator/BTCChart'), {
    ssr: false,  // This will disable server-side rendering for the BTCChartComponent
    loading: () => <p>Loading...</p>
  });





function calculateDCA(investment, frequency, years, priceData) {
    let datesToBuy = [];
    let currentDate = moment().subtract(years, 'years');

    while (currentDate <= moment()) {
        datesToBuy.push(currentDate.format('YYYY-MM-DD'));
        if (frequency === 'daily') {
            currentDate.add(1, 'days');
        } else if (frequency === 'weekly') {
            currentDate.add(1, 'weeks');
        } else if (frequency === 'monthly') {
            currentDate.add(1, 'months');
        }
    }

    let pricesToBuy = priceData.filter((data) => datesToBuy.includes(data.date));
    let bitcoinBought = pricesToBuy.reduce((total, data) => total + (investment / data.price), 0);
    let totalInvested = investment * pricesToBuy.length;
    let currentValue = bitcoinBought * priceData[priceData.length - 1].price;
    let profit = currentValue - totalInvested;
    let profitPercentage = (profit / totalInvested) * 100;

    return { 
        bitcoinBought: bitcoinBought,
        totalInvested: totalInvested,
        currentValue: currentValue,
        profit: profit,
        profitPercentage: profitPercentage  // Keep this as a number for now
    };
}

function Calculator({pretitle,title,additionalClass}) {
   
    const [frequency] = useState('monthly');
    const [years] = useState('5');
    const [priceData, setPriceData] = useState(null);
    const [result, setResult] = useState(null);
    const [investment, setInvestment] = useState(1000); // Default to 1 million
    const [currency, setCurrency] = useState('EGP');
    const [error,setError] = useState(null)
    const yearlyEgpToUsdtRates = [15, 15, 25, 30, 39.75];
 







useEffect(() => {
    async function fetchData() {
        try {
            let data;
            if (currency === 'EGP') {
                data = await fetchBTCPriceDataInUSD(years); // Fetch BTC in USD
                data = data.map((entry, index) => {
                    const yearIndex = Math.floor(index / (data.length / 5));
                    const conversionRate = yearlyEgpToUsdtRates[yearIndex];
                    return {
                        date: entry.date,
                        price: entry.price * conversionRate // Convert to EGP
                    };
                });
            } else if (currency === 'PKR') {
                data = await fetchPriceDataFromCoinGecko(years, currency);
            } else {
                data = await fetchPriceData(years, currency);
            }
            setPriceData(data);
        } catch (error) {
            setError(error.message);
        }
    }
    fetchData();
}, [years, currency]);




    
   
    const handleSubmit = (event) => {
        event.preventDefault();
        if (priceData) {
            const { bitcoinBought, profit, totalInvested, currentValue, profitPercentage } = calculateDCA(Number(investment), frequency, Number(years), priceData);
            setResult({ bitcoinBought, profit, totalInvested, currentValue, profitPercentage });
        }
    };
    const sliderEl = useRef(null);
    const handleSliderChange = (event) => {
        const tempSliderValue = Number(event.target.value);
        setInvestment(tempSliderValue);
        const progress = (tempSliderValue / event.target.max) * 100;
        sliderEl.current.style.background = `linear-gradient(to right, #F7931A ${progress}%, #f2f2f2 ${progress}%)`;
    };
    return (
        <>
         <div id="calculator"  className={`${styles.calculatorWrapper} ${additionalClass ? styles.arabic : ''}`}>
            <div className='vertical-container center'>
                <p className='small-par'>{pretitle}</p>
                <h1>{title}</h1>
                <span className='dash'></span>
            </div>
       
      <div className={styles.chartHolder}>
        <form onSubmit={handleSubmit}>
              <label>
                <p className='small-par'> {additionalClass ? 'العملة': 'Currency'}</p>
                <div className={styles.currenciesHolder}>
    <input 
        type="radio" 
        value="EGP" 
        id="EGP"
        checked={currency === 'EGP'} 
        onChange={e => setCurrency(e.target.value)} 
        required 
    />
    <label htmlFor="EGP">
        <div className={styles.radioCircle}></div>
      <p> EGP</p>
    </label>

    <input 
        type="radio" 
        value="PKR" 
        id="PKR"
        checked={currency === 'PKR'} 
        onChange={e => setCurrency(e.target.value)} 
        required 
    />
    <label htmlFor="PKR">
        <div className={styles.radioCircle}></div>
       
        <p>PKR</p>
    </label>

    <input 
        type="radio" 
        value="TRY" 
        id="TRY"
        checked={currency === 'TRY'} 
        onChange={e => setCurrency(e.target.value)} 
        required 
    />
    <label htmlFor="TRY">
        <div className={styles.radioCircle}></div>
        <p>TRY</p>
    </label>
</div>


            </label>
            <div className={styles.rangeWrapper}>
    <label>
        <p className='small-par'>{additionalClass ? 'المبلغ المستثمر': 'Investment Amount'}</p>
       
    </label>
    <div className={styles.customRange}>
    <input 
                type="range" 
                id="range"
                ref={sliderEl}
                min="1000" 
                max="1000000"
                value={investment} 
                onChange={handleSliderChange}
                required 
            />
</div>
    <div className={styles.minMaxValues}>
        <span>{currency} {parseInt(1000).toLocaleString()}</span>
        <span>{currency} {parseInt(1000000).toLocaleString()}</span>
    </div>
    <div className={styles.totalInvestment}>
        <p className='small-par'>  {investment.toLocaleString()} {currency}</p>
      
    </div>
</div>
<div className={styles.frequencyHolder}>
<p className='pre-title'> <span className={styles.dot}></span> {additionalClass ? 'الوتيرة: شهري': 'Frequency: Monthly'}</p>
<p className='pre-title'><span className={styles.dot}></span>{additionalClass ? 'فترة السداد: ٥ سنوات': ' Payment Period: 5 Years'}</p>
</div>
           
          
            <button className='dark-button' type="submit">{additionalClass ? 'حساب' : 'Calculate'}</button>
            
        </form>
        <div className={styles.chart}>
      <BTCChartComponent selectedCurrency={currency}/>
      {result && result.profit && result.profitPercentage && (
                <div className={styles.resultHolder}>
                <div className={styles.result}>
                    <span>{additionalClass ? "إجمالي الاستثمار" : "Total Invested"} </span>
                    <p>{result.totalInvested.toLocaleString(undefined, {maximumFractionDigits: 0})} </p>
                </div>
                <div className={styles.result}>
                    <span>{additionalClass ? "إجمالي الربح" : "Total Profit"}</span>
                    <p>{result.profit.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
                </div>
                <div className={styles.result}>
                    <span>{additionalClass ? "المردود" : "ROI (Return on Investment)"}</span>
                    <p>{result.profitPercentage.toFixed(0) + "%"}</p>
                </div>
            </div>
            
            )}
      {/* <Calc/> */}
        </div>
        
        </div>
        </div>
        </>
    );
}
Calculator.defaultProps = {
    pretitle:"Bitcoin Savings Calculator",
    title:"Estimate Your Returns"
}
export default Calculator;
