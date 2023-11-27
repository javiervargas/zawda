import styles from './security.module.scss';
const RiskBox = ({ icon, label, description }) => {
    return (
        <div className={styles.riskBox}>
            <div className={styles.squaresHolder}>
                <div className={styles.whiteSquare}></div>
                <div className={styles.orangeSquare}></div>
                <div className={styles.squareInfo}>
                    <img src={icon} alt={label} />
                    <p className='small-par'>{label}</p>
                </div>
            </div>
            <p>{description}</p>
        </div>
    );
};

const Security = ({title, riskBoxes}) => {
    return (
        <div id ="security" className={styles.risksWrapper}>
    <div className='vertical-container center'>
      <h1>{title}</h1>
      <span className='dash'></span>
      <div className={styles.risksHolder}>
      {riskBoxes.map((box, index) => (
                        <RiskBox key={index} icon={box.icon} label={box.label} description={box.description} />
                    ))}
      </div>
    </div>
  </div>
    )
}


Security.defaultProps = {
    title: <>Zawda Helps Minimize <br /> Your Risks</>,
    riskBoxes: [
        {
            icon: "/assets/security-icon.svg",
            label: "Security",
            description: <>Your Bitcoin is safeguarded and <br /> guaranteed in a cold wallet <br /> guarded by the best technology <br /> in this space. Multisig and 2FA <br /> are included in a dedicated vault</>
        },
        {
            icon: "/assets/wallet-icon.svg",
            label: "Store of \n value",
            description: <>Bitcoin is a decentralized <br /> currency that can be converted <br /> into any other fiat currency. <br /> Your capital is protected and <br /> accessible at any time</>
        },
        {
            icon: "/assets/audit-icon.svg",
            label: "Audited \n & Tested",
            description: <>Your Bitcoin is regularly audited <br /> by independent and reputable <br /> third parties and documented in <br /> ISAE 3402 reports</>
        }
    ]
}


export default Security;