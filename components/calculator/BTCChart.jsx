import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function BTCChartComponent({selectedCurrency}) {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          tools: {
            selection: false,
            zoom: false,
            pan: false,
            reset:false,
            zoomin:false,
            zoomout:false,
            download: false
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        labels: {
          formatter: (val) => {
            return val.toFixed(0); // Format the value to show whole numbers only
          }
        }
      },
      stroke :{
        curve: 'smooth',
        width:[1,1],
        colors: ['#F7931A', 'gray']
      },
      fill: {
        type: ['gradient','solid'],
        gradient: {
          shade: 'light',
          type: "vertical",
          shadeIntensity: 0.25,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0,
          stops: [0, 100]
        }
      },
      colors: ['#F7931A','transparent'],
      title: {
        text: '',
        align: 'left',
        
      },
      legend: {
        show: false
      }
    }
  });
const [error,setError] = useState(null);
const constantEgpToUsdtRate = 39.75;
const yearlyEgpToUsdtRates = [15, 15, 25, 30, 39.75];

  useEffect(() => {
    async function fetchData() {
      try {
        const responseUSD = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1825&interval=daily');
            const dataUSD = await responseUSD.json();

            let dataSelectedCurrency;
            if (selectedCurrency === 'EGP') {
              const convertedData = dataUSD.prices.map((priceData, index) => {
                  const yearIndex = Math.floor(index / (dataUSD.prices.length / 5));
                  const conversionRate = yearlyEgpToUsdtRates[yearIndex];
                  return [priceData[0], priceData[1] * conversionRate];
              });
              dataSelectedCurrency = { prices: convertedData };
          } else {
                const responseSelectedCurrency = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${selectedCurrency.toLowerCase()}&days=1825&interval=daily`);
                dataSelectedCurrency = await responseSelectedCurrency.json();
            }

            const processChartData = (data) => {
              try {
                const dates = data && data.prices ? data.prices.map(item => item[0]) : [];
                const prices = data && data.prices ? data.prices.map(item => item[1]) : [];
                const referencePrice = prices[0];
                const percentageChanges = prices.map(price => ((price - referencePrice) / referencePrice) * 100);
                return dates.map((date, index) => ({ x: date, y: percentageChanges[index] }));
              } catch (error) {
                console.error("Error processing chart data:", error);
                return []; // Return an empty array to prevent further errors
              }
            };
          
      

        setChartData(prevState => ({
          ...prevState,
          series: [
            {
              name: `BTC/USD Percentage Change`,
              data: processChartData(dataUSD)
            },
            {
              name: `BTC/${selectedCurrency.toUpperCase()} Percentage Change`,
              data: processChartData(dataSelectedCurrency, selectedCurrency)
            }
          ]
        }));
      } catch (error) {
        console.log("There was a problem fetching the BTC data:", error);
        setError("There was a problem fetching the BTC data. Please try again later."); // Set the error state

      }
    }

    fetchData();
  }, [selectedCurrency]);
  if (error) {
    return <div className="error-message">{error}</div>;
  }
  return (
    <ReactApexChart 
      options={chartData.options} 
      series={chartData.series} 
      type="area" 
      height={350} 
    />
  );
}

export default BTCChartComponent;
