import styles from './about-us-banner.module.scss';
const AboutUsBanner = ({pretitle,text}) => {
    
    return (
        <div id="our-story" className={styles.aboutWrapper}>
        <div className='vertical-container'>
            <h1>{pretitle}</h1>
            <span className='dash'></span>
            <p>{text}</p>
        </div>
        <img className={styles.banner} src="/assets/about-us-banner.png" alt="" srcset="" />
        <img className={styles.banner + " " + styles.bannerPhone} src="/assets/about-us-banner-phone.svg" alt="" srcset="" />
    </div>
    )
}

AboutUsBanner.defaultProps = {
    pretitle:"Our Story",
    // text:"Zawda is an Arabic word that colloquially means a bump or increase, which in our case means an increase in your financial wealth. Our journey with Bitcoin started like many others in emerging economies. We saw the high levels of inflation, devaluation, and capital controls that were happening in our home countries and decided to take action. Today we’re on a mission to provide everyone with financial security across the Middle East and North Africa region. We believe that Bitcoin is part of that solution."
    text: <>Zawda is an Arabic word that colloquially means a bump or increase, which in our case means an increase in your financial wealth. <br /> Our journey with Bitcoin started like many others in emerging economies. We saw the high levels of inflation, devaluation, and capital controls that were happening in our home countries and decided to take action. Today we’re on a mission to provide everyone with financial security across the Middle East and North Africa region. We believe that Bitcoin is part of that solution.</>
}

export default AboutUsBanner;