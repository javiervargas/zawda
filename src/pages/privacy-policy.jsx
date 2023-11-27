import Navbar from "../../components/navbar/navbar.component"
import Footer from "../../components/footer/footer.component"
import styles from '../styles/privacy.module.scss';
import Head from "next/head";
const PrivacyPolicy = () => {
    const languageLinks = [
        { label: "EN", href: "/privacy-policy" },
        { label: "AR", href: "/ar/privacy-policy" }
    ]
    return (
        <>
          <Head>
        <title>ZAWDA</title>
        <meta name="title" content="Redefining Wealth Creation" />
        <meta name="description" content="Harness the power of Bitcoin and preserve your wealth with Zawda." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Zawda-Favicon.png" />
      </Head>
        <Navbar languageLinks={languageLinks}/>
        <div className={styles.privacyWrapper}>
            <h1>Privacy Policy</h1>
            <p>This privacy notice outlines how Zawda - Mena Lighting Network Inc. ("Zawda," "we," or "us") processes information about you. This notice is applicable when you utilize our websites, mobile applications, browser extensions, payment processing services, application programming interfaces, and other online products and services that link to this privacy notice (collectively referred to as "our Services"), contact our customer service team, engage with us on social media, or interact with us in any other way.</p>
            <p>For residents of the United States who have a Zawda consumer account or initiate the process of creating one, you can also refer to our Zawda Financial Privacy Notice for a summary of how we handle non-public personal information we collect about you. The Financial Privacy Notice is provided as an additional way to understand our practices and does not replace or override this privacy notice.</p>
            <p>We may update this privacy notice periodically. Changes will be indicated by revising the date at the top, and we may also provide additional notice such as statements on our website or notifications. It's advisable to review this notice regularly to stay informed about our information practices and the choices available to you.</p>
            <p className="small-par">Information Collection</p>
            <p>We collect information you directly provide to us. This includes details such as when you create a business or consumer account, use our Services to transact in cryptocurrency, access features, seek customer support, or communicate with us. The data we may gather includes your contact information (like email, postal address, phone number), date of birth, username, profile image, payment details, transaction records, and any additional information you choose to share.</p>
            <p>For business accounts with Zawda, we may collect additional information about you and beneficial owners of the business. This might encompass business details, tax ID, legal formation documents, and other pertinent information.</p>
            <p>We also automatically collect information when you interact with our Services, such as transaction details and device information (e.g., hardware model, IP address, etc.). Your approximate location may be inferred based on your IP address, and we employ tracking technologies like cookies to enhance our Services and understand usage patterns.</p>
            <p className="small-par">Use of Information</p>
            <p>We utilize the collected information to operate, improve, and maintain our Services. This involves processing transactions, error identification, analysis, authentication, sending transactional or account-related information, marketing communications, security measures, and compliance with legal obligations.</p>
            <p className="small-par">Sharing of Information</p>
            <p>We may share your information in various scenarios, such as with service providers, contractors, financial institutions, and business partners. Information might also be shared when required by law, to protect rights, or in connection with mergers or acquisitions. Additionally, we might share aggregated or de-identified data.</p>
            <p className="small-par">Analytics</p>
            <p>Third-party entities may provide analytics services associated with our Services, utilizing technologies like cookies to gather usage information across websites and online services.</p>
            <p className="small-par">Transfer of Information</p>
            <p>As Zawda operates internationally, your information may be transferred to jurisdictions without equivalent data protection levels. We take measures to ensure appropriate protection in such cases.</p>
            <p className="small-par">Your Choices</p>
            <p>You can update certain account information or deactivate your account. Browser settings can control cookies, but this could affect our Services' availability. You can opt out of marketing emails and mobile push notifications.</p>
            <p className="small-par">Protection of Information</p>
            <p>We implement security measures to protect your information, limiting access and preventing unauthorized disclosure.</p>
            <p className="small-par">Your Privacy Rights</p>
            <p>Depending on your jurisdiction, you might have additional rights. We process data based on legal bases like contract performance, legitimate interest, compliance, and consent. You can exercise rights like access, correction, erasure, and objection by contacting us.</p>
            <p className="small-par">Additional Disclosures</p>
            <p>If you are outside the United States, specific privacy rights and protections might apply. We provide details related to Argentina and Colombia residents.</p>
            <p className="small-par">Contact Us</p>
            <p>For any questions, requests, or concerns related to your privacy, feel free to reach out to us at  </p>
           <p>    <a href="mailto:hello@zawda.me">hello@zawda.me</a></p>
        
        </div>
        <Footer/>
        </>
    )
}

export default PrivacyPolicy