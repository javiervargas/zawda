import styles from './about.module.scss';
import { useRef , useEffect } from 'react';
const OurMission = ({title,pretitle,text}) => {
   
    const contentWrapperRef = useRef(null);
    const leftImgRef = useRef(null);
const rightImgRef = useRef(null);
useEffect(() => {
    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Do your slide animations here
                if (entry.target === contentWrapperRef.current) {
                    leftImgRef.current.classList.add(styles.slide);
                    rightImgRef.current.classList.add(styles.slide);
                } else if (entry.target === contentWrapperRef2.current) {
                    leftImgRef2.current.classList.add(styles.slide1);
                    rightImgRef2.current.classList.add(styles.slide2);
                }
            }
        });
    };
  
    const options = {
        root: null,
        rootMargin: '-100px',
        threshold: 0.5,
    };
  
    const observer = new IntersectionObserver(handleIntersect, options);
  
    if (contentWrapperRef.current) {
        observer.observe(contentWrapperRef.current);
    }
  
   
  
    return () => {
        if (contentWrapperRef.current) {
            observer.unobserve(contentWrapperRef.current);
        }
  
      
    };
  }, []);
    return (
        <div className={styles.contentWrapper} ref={contentWrapperRef}>
        <div className={`${styles.textHolder} vertical-container`}>
          <p className='small-par'>{pretitle}</p>
          <h1>{title}</h1>
          <span className='dash'></span>
          <p>{text}</p>
        </div>
        <div className={styles.squareContainer}>
          <img style={{zIndex:2}} src="/assets/our-mission-square.svg" alt="Our Mission Image" srcset="" />
          <img className={styles.leftImg} src="/assets/stroke-square.svg" alt="Our Mission Image" srcset="" ref={leftImgRef} />
          <img className={styles.rightImg} src="/assets/fill-square.svg" alt="Our Mission Image" srcset="" ref={rightImgRef} />
        </div>
      </div>
    )
}
const TheWorldToday = ({worldTitle,worldPretitle,worldText,worldButtonText}) => {
    
const leftImgRef2 = useRef(null);
const rightImgRef2 = useRef(null);
const contentWrapperRef2 = useRef(null);
useEffect(() => {
    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Do your slide animations here
                if (entry.target === contentWrapperRef2.current) {
                    leftImgRef2.current.classList.add(styles.slide1);
                    rightImgRef2.current.classList.add(styles.slide2);
                }
            }
        });
    };
  
    const options = {
        root: null,
        rootMargin: '-100px',
        threshold: 0.5,
    };
  
    const observer = new IntersectionObserver(handleIntersect, options);
  
   
  
    if (contentWrapperRef2.current) {
        observer.observe(contentWrapperRef2.current);
    }
  
    return () => {
      
  
        if (contentWrapperRef2.current) {
            observer.unobserve(contentWrapperRef2.current);
        }
    };
  }, []);
    return (
        <div className={styles.contentWrapper}  ref={contentWrapperRef2}>
        <div className={styles.squareContainer}>
            <img style={{zIndex:2}} src="/assets/world-square.svg" alt="Our Mission Image" srcset="" />
            <img className={styles.leftImg} src="/assets/fill-square.svg" alt="Our Mission Image" srcset=""   ref={leftImgRef2}/>
            <img className={styles.rightImg} src="/assets/stroke-square.svg" alt="Our Mission Image" srcset="" ref={rightImgRef2}  />
          </div>
          <div className={`${styles.textHolder} vertical-container right`}>
            <p className='small-par'>{worldPretitle}</p>
            <h1>{worldTitle}</h1>
            <span className='dash'></span>
            <p>{worldText}</p>
            <a href="/assets/Zawda-Whitepaper.pdf" target='blank'  className='dark-button'>{worldButtonText}</a>
          </div>
        </div>
    )
}
const About = ({title,pretitle,text,worldTitle,worldPretitle,worldText,worldButtonText}) => {

    return (
        <div id="about" className={styles.aboutWrapper}>
    <OurMission title={title} pretitle={pretitle} text={text}/>
    <TheWorldToday worldTitle={worldTitle} worldPretitle={worldPretitle} worldText={worldText} worldButtonText={worldButtonText}/>
  </div>
    )
}

OurMission.defaultProps = {
    title: 'Save with Bitcoin',
    pretitle:'Our Mission',
    text :"Zawda is on a mission to provide financial  security for all. We believe that everyone deserves the opportunity to build wealth and achieve their financial goals. Our Bitcoin plans helps businesses and institutions hedge against volatile currencies and find new avenues to retain employees and improve their bottom line.",
}
TheWorldToday.defaultProps ={
    worldTitle: <>Overcoming Financial <br /> Inequality: Addressing the Broken System</>,
    worldPretitle:"The World Today",
    worldText: "The current financial system is broken. Of all the amount of money in existence today, more than 80% was “created” since 2020. With inflation, devaluations, and capital controls in place, your capital is always at risk. Equities, Bonds, Real Estate, and Gold have been traditional investment vehicles for many, but each has its own limitations and drawdowns. We believe a new digital asset class can help balance that mix - Bitcoin. The first asset that provides digital scarcity supported by Proof of Work.",
    worldButtonText:"Read Our Whitepaper"
}
export default About;