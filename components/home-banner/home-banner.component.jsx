import styles from './home-banner.module.scss';
import AnimatedSvg from '../animated-svg/animated-svg.component';
const HomeBanner = ({title,text,buttonText,buttonLink , additionalClass}) => {
    return (
        <div  className={`${styles.mainWrapper} ${additionalClass ? styles[additionalClass] : ''}`}>
        <div  className={`vertical-container ${additionalClass ? 'right' : ''}`}>
          <h1>{title}</h1>
          <span className='dash'></span>
          <p>{text}</p>
          <a href={buttonLink} className='dark-button'>{buttonText}</a>
        </div>
        <div className={styles.svgAnim}>
        <img className={styles.zawdaImg} src="/assets/zawda-image.png" alt="Zawda Image" />
        <AnimatedSvg/>
        </div>
        
        <div className={styles.scrollHint}>
  <img src="/assets/orange-arrow.svg" className={`${styles.arrow} ${styles.arrowFirst}`} alt="Scroll down" />
  <img src="/assets/orange-arrow.svg" className={`${styles.arrow} ${styles.arrowSecond}`} alt="Scroll down" />
</div>
  </div>
    )
}

HomeBanner.defaultProps = {
    title:  <>Redefining Wealth <br />Creation</>,
    text : <>Harness the power of Bitcoin and preserve <br /> your wealth with Zawda.</>,
    buttonText :"Schedule a Demo",
    buttonLink :"/about-us#contact"
}
export default HomeBanner;

