import styles from './partners.module.scss';

const Partners = ({title1,title2}) => {
    return (
        <div id="media" className={styles.partnersWrapper}>
        <div className={styles.partnerBox}>
          <p className='small-par'>{title1}</p>
          <img src="/assets/techCrunch.svg" alt="TechCrunch Logo"  />
        </div>
        <div className={styles.separator}></div>
        <div className={styles.partnerBox}>
          <p className='small-par'>{title2}</p>
          <img src="/assets/axiom-wolf.svg" alt="Axiom Wolf Logo"  />
        </div>
      </div>
    )
}

Partners.defaultProps = {
    title1:"As featured in",
    title2:"Our Esteemed Backers"
}

export default Partners;