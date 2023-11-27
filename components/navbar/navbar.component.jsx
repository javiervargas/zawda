import styles from './navbar.module.scss';
import { useRouter } from 'next/router';
import { useState,Fragment } from 'react';
const Navbar = ({dropdownLinks,logoSrc,signInLink,languageLinks,additionalClass }) => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
  
        <nav className={`${styles.nav} ${additionalClass ? styles[additionalClass] : ''}`}>
            <div className={styles.lfBlock}>
            <a href={additionalClass ? "/ar" : "/"} className={styles.logo}><img src={logoSrc} alt="Zawda Logo" /></a>
                <div className={styles.langHolder}>
                {languageLinks.map((link, index) => (
    <Fragment key={link.href}>
        <a href={link.href} className={router.pathname === link.href ? styles.active : ''}>{link.label}</a>
        {index !== languageLinks.length - 1 && <span className={styles.separator}></span>}
    </Fragment>
))}
                </div>
            </div>
            <div className={styles.rgBlock}>
            {dropdownLinks.map((dropdown) => (
                    <div className={styles.dropdown}>
                        <span>{dropdown.label} <img src="/assets/black-arrow.svg" alt="arrow" className={styles.dropdownArrow} /></span>
                        <div className={styles.dropdownContent}>
                            {dropdown.links.map((link) => (
                                <a href={link.href}>{link.label}</a>
                            ))}
                        </div>
                    </div>
                ))}
              

               
              <a href="https://app.zawda.me/" target='_default' className='stroke-button'>{signInLink.label}</a>
            </div>
            <div className={styles.phoneBlock} onClick={toggleMenu}>
    <div className={`${styles.line} ${menuOpen ? styles.line1Open : ''}`}></div>
    <div className={`${styles.line} ${menuOpen ? styles.line2Open : ''}`}></div>
    <div className={`${styles.line} ${menuOpen ? styles.line3Open : ''}`}></div>
</div>
      
        </nav>
        <nav  className={`${styles.phoneNav} ${menuOpen ? styles.open : ''} ${additionalClass ? styles[additionalClass] : ''}`}>
    {dropdownLinks.map((dropdown) => (
        <div key={dropdown.label} className={styles.phoneDropDown}>
            <span onClick={() => setOpenDropdown(openDropdown === dropdown.label ? null : dropdown.label)}>
                {dropdown.label}
                <img 
                    src="/assets/right-angle.svg" 
                    alt="Right Angle Arrow" 
                    className={`${styles.arrow} ${openDropdown === dropdown.label ? styles.rotated : ''}`}
                />
            </span>
            <div className={`${styles.phoneDropDownLinks} ${openDropdown === dropdown.label ? styles.open : ''}`}>
                {dropdown.links.map((link) => (
                    <a onClick={() => setMenuOpen(false)} key={link.href} href={link.href}>{link.label}</a>
                ))}
            </div>
        </div>
    ))}
    <a href={signInLink.href} className='dark-button'>{signInLink.label}</a>
</nav>

        </>
    )
}

Navbar.defaultProps = {
    logoSrc: "/assets/logo-zawda.svg",
    languageLinks: [
        { label: "EN", href: "/" },
        { label: "AR", href: "/ar" }
    ],
   
    dropdownLinks:  [
        {
            label: "Products",
            links: [
                { label: "About", href: "/#about" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Security", href: "/#security" },
                { label: "Media", href: "/#media" },
                { label: "Calculator", href: "/#calculator" },
                { label: "FAQ", href: "/#faq" },
              ]
        },
        {
            label: "About Us",
            links: [
                { label: "Our Story", href: "/about-us#our-story" },
                { label: "Our Team", href: "/about-us#team" },
                { label: "Contact", href: "/about-us#contact" },
            ]
        }
      ],
    signInLink: { label: "Sign in", href: "https://app.zawda.me" }
};

export default Navbar;
