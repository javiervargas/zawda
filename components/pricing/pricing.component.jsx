import styles from './pricing.module.scss';
const WhiteBox = ({ boxTitle, productsList }) => {
    return (
        <div className={styles.whiteBox}>
            <p className='small-par'>{boxTitle}</p>
            <span className='dash'></span>
            {productsList.map((product, index) => (
                <div key={index} className={styles.products}>
                    <img src="/assets/thick.svg" alt="thick image" />
                    <p>{product}</p>
                </div>
            ))}
        </div>
    );
};
const Pricing = ({pretitle,title,boxesData ,additionalClass}) => {
    return (
<div id="pricing" className={`${styles.pricingWrapper} ${additionalClass ? styles.arabic : ''}`}>
  <img className={styles.square1} src="/assets/orange-square.svg" alt="Orange Square" />
      <img className={styles.square2} src="/assets/orange-square.svg" alt="Orange Square" />
    <div className='vertical-container center'>
    <p className='small-par'>{pretitle}</p>
    <h1>{title}</h1>
    <span className='dash white'> </span>
    </div>
    <div  className={`horizontal-container ${additionalClass ? 'arabic' : ''}`}>
     
    {boxesData.map((box, index) => (
                    <WhiteBox key={index} boxTitle={box.title} productsList={box.products} />
                ))}
    </div>
  </div>
    )
}

Pricing.defaultProps = {
    pretitle :"Our Products",
    title:"Companies Can Now Buy and Accumulate Bitcoin in a Secure, Compliant, and Seamless Way",
    boxesData:[
        {
            title: "For Employees",
            products: [
                "Save a portion of your salary in Bitcoin",
                "Withdraw it at anytime to your crypto wallet or in fiat",
                <> Pay <span> $0 </span> Transaction fees</>,
                <> Employer pays <span>$5</span> per employee per month in local currency</>,
             
            ]
        },
        {
            title: "For Employers",
            products: [
                "Invest part of your balance sheet in Bitcoin",
                "Receive a dedicated cold  storage Multi-Sig wallet  for added security",
                "Access funds at anytime",
                <> Maintenance fee of  <span>0.99%</span>  per year for security and audits</>,
            
            ]
        }
    ]
}

export default Pricing;


