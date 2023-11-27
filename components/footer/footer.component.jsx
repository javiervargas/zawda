import styles from './footer.module.scss';

const Footer = ({copyrights,privacy,privacyLink,additionalClass}) => {
    return (
        <footer className={`${styles.footer} ${additionalClass ? styles.arabic : ''}`}>
            <p className='pre-title'>{copyrights}</p>
            <a href={privacyLink}>   <p className='pre-title'>{privacy}</p></a>
         
        </footer>
    )
}
Footer.defaultProps = {
    copyrights:"Copyright © 2023 Zawda. All rights reserved.",
    privacy:"PRIVACY POLICY",
    privacyLink:"/privacy-policy"
}
export default Footer;