import styles from './faq.module.scss';
import { useState,useRef } from 'react';
const Faq = ({title,faqs, additionalClass}) => {
    const [expandedFaq, setExpandedFaq] = useState(null);
   

    
      const faqRefs = faqs.map(() => useRef(null));
    const handleFaqClick = (index) => {
      if (expandedFaq === index) {
        setExpandedFaq(null);
      } else {
        setExpandedFaq(index);
      }
    };
  
    return (
      <div id="faq"  className={`${styles.faqWrapper} ${additionalClass ? styles.arabic : ''}`}>
        <h1>{title}</h1>
  
        {faqs.map((faq, index) => (
  <div key={index} className={`${styles.faqHolder}`}>
    <div className={styles.faqQuestionBox} onClick={() => handleFaqClick(index)}>
      <p className='small-par'>{faq.question}</p>
   
      {expandedFaq === index ?  <img 
        src="/assets/circle-close.svg" 
        alt="Arrow" 
       
      /> :   <img 
      src="/assets/circle-arrow.svg" 
      alt="Arrow" 
     
    />}
    </div>
    
    <p 
      className={styles.answer}
      ref={faqRefs[index]}
      style={{
        maxHeight: expandedFaq === index ? `${faqRefs[index].current ? faqRefs[index].current.scrollHeight : 0}px` : '0px'
      }}>
      {faq.answer}
    </p>
  </div>
))}
      </div>
    );
  };

    Faq.defaultProps ={
      title:"Frequently asked questions",
      faqs : [
        {
          question: "Does Zawda only support bitcoin?",
          answer: "Zawda enables provides businesses with an option to use their local currency and buy Bitcoin as part of a diverse portfolio investment and long term savings plan. Zawda does not support any other cryptocurrencies besides Bitcoin."
        },
        {
            question: "How much does Zawda cost?",
            answer :"Zawda offers monthly and annual plans to businesses. The monthly Bitcoin Benefits Plan currently costs $5 per employee per month in local currency. The Bitcoin Asset Management plan costs 0.99% per year for maintenance and audits. Zawda does not charge you for any withdrawal or transaction fees"
        },
        {
            question: "What information is required to sign up?",
            answer:"Zawda is only available to businesses. To create and use a Zawda account you will sign an agreement and submit basic KYC requirements. Zawda is not a financial institution or a payment processor. We offer software services to help businesses and their employees accumulate bitcoin. "
        },
        
        {
            question: "Is Zawda a custodian of my money?",
            answer:"You can choose between self-custody and Zawda custody. Your savings are automatically converted to bitcoin and put in cold storage or in a hot wallet of your choice. You can redeem them at anytime."
        },
        
        {
            question: "How much money can I invest with Zawda?",
            answer:"There’s isn’t a magical number, it all depends on your risk appetite and ability to invest on the long run. Our calculations show that a portfolio exposure of 1-5% to Bitcoin for individuals and businesses is small enough to not think about and forget for an extended period of time so you allow the value of Bitcoin to appreciate and avoid a lot of the short term volatility."
        },
        
        {
            question: "Will I lose my money with Zawda?",
            answer:"Your funds are safeguarded and audited with Zawda, however like any security, it’s subject to market fluctuations, there will be times where the value of Bitcoin in your local currency could dip, others where it would increase. We recommend a time horizon of 4+ years to really benefit from the compounding effect of Bitcoin."
        },
        {
            question: "Does Zawda help convert my bitcoin savings to fiat?",
            answer:"Zawda can sell your Bitcoin using regulated exchanges and return the money to your local account whenever you wish to do so. You can also withdraw the Bitcoin to your own wallet of choice"
        }
      ]
    }
  
  export default Faq;