import Navbar from "../../../components/navbar/navbar.component"
import Footer from "../../../components/footer/footer.component"
import styles from '../../styles/privacy.module.scss';
import { useEffect,useState } from "react";
import Head from 'next/head';
const PrivacyPolicy = () => {
    const [language, setLanguage] = useState('ar'); // default to English

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);
    const langLinks = [
        { label: "إنجليزي", href: "/privacy-policy" },
        { label: "عربي", href: "/ar/privacy-policy" }
    ]
    const dropdownLinks = [
        {
            label: "المنتج",
            links: [
                { label: "عن زودة", href: "/ar#about" },
                { label: "الأسعار", href: "/ar#pricing" },
                { label: "الأمان", href: "/ar#security" },
                { label: "الشراكات", href: "/ar#media" },
                { label: "الحاسبة", href: "/ar#calculator" },
                { label: "أسئلة شائعة", href: "/ar#faq" },
              ]
        },
        {
            label: "من نحن",
            links: [
                { label: "قصتنا", href: "/ar/about-us#our-story" },
                { label: "فريقنا", href: "/ar/about-us#team" },
                { label: "تواصل معنا", href: "/ar/about-us#contact" },
            ]
        }
      ]
    const signInLink =  { label: "تسجيل الدخول", href: "http://" }
    return (
        <>
           <Head>
        <title>ZAWDA</title>
        <meta name="title" content="Redefining Wealth Creation" />
        <meta name="description" content="Harness the power of Bitcoin and preserve your wealth with Zawda." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Zawda-Favicon.png" />
      </Head>
        <Navbar languageLinks={langLinks} dropdownLinks={dropdownLinks} signInLink={signInLink}/>
        <div className={styles.privacyWrapper}>
            <h1>إشعار بالخصوصية</h1>
            <p>هذا الإشعار بالخصوصية يشرح كيفية معالجة شركة زودَة - شبكة إضاءة منطقة الشرق الأوسط وشمال إفريقيا (زودَة، "نحن" أو "نحن") للمعلومات المتعلقة بك. يُطبق هذا الإشعار عندما تستخدم مواقعنا على الويب وتطبيقات الجوال وملحقات المتصفح وخدمات معالجة الدفع وواجهات برمجة التطبيقات ومنتجات وخدمات أخرى عبر الإنترنت ترتبط بهذا الإشعار بالخصوصية (تُشار إليها جماعيًا باسم "خدماتنا")، وعندما تتصل بفريق خدمة العملاء لدينا أو تتفاعل معنا على وسائل التواصل الاجتماعي أو تتفاعل معنا بأي طريقة أخرى.</p>
            <p>بالنسبة للمقيمين في الولايات المتحدة الذين لديهم حساب استهلاكي في زودَة أو يبدؤون في عملية إنشاء واحد، يمكنكم أيضًا الرجوع إلى إشعار زودَة للخصوصية المالية للحصول على ملخص حول كيفية معالجتنا للمعلومات الشخصية غير العامة التي نجمعها عنكم. إشعار الخصوصية المالية يُقدم كوسيلة إضافية لفهم ممارساتنا ولا يستبدل أو يتجاوز هذا الإشعار بالخصوصية.</p>
            <p>قد نقوم بتحديث هذا الإشعار بالخصوصية بشكل دوري. سيتم إشارة إلى التغييرات عن طريق تعديل التاريخ في الأعلى، وقد نقدم أيضًا إشعارًا إضافيًا مثل بيانات على موقعنا على الويب أو إشعارات. من الجيد مراجعة هذا الإشعار بانتظام للبقاء على اطلاع على ممارساتنا فيما يتعلق بالمعلومات والخيارات المتاحة لكم.</p>
            <p className="small-par">جمع المعلومات</p>
            <p>نجمع المعلومات التي تقدمونها مباشرة لنا. وهذا يشمل تفاصيل مثل عند إنشاء حساب تجاري أو استهلاكي، أو استخدام خدماتنا لإجراء معاملات في العملات المشفرة، أو الوصول إلى الميزات، أو البحث عن دعم العملاء، أو التواصل معنا. يمكن أن تشمل البيانات التي قد نجمعها معلومات الاتصال الخاصة بكم (مثل البريد الإلكتروني، وعنوان البريد البريدي، ورقم الهاتف)، وتاريخ الميلاد، واسم المستخدم، وصورة الملف الشخصي، وتفاصيل الدفع، وسجلات المعاملات، وأي معلومات إضافية قد تختارون مشاركتها.</p>
            <p>بالنسبة لحسابات الأعمال في زودَة، قد نقوم بجمع معلومات إضافية عنكم وعن مالكي الأعمال المستفيدين. ويمكن أن يشمل ذلك تفاصيل الأعمال، والرقم الضريبي، ووثائق التشكيل القانوني، ومعلومات أخرى ذات صلة.</p>
            <p>نجمع أيضًا معلومات تلقائيًا عندما تتفاعلون مع خدماتنا، مثل تفاصيل المعاملات ومعلومات الجهاز (مثل نموذج الجهاز، وعنوان IP، إلخ). يمكن أن يتم استنتاج موقعكم التقريبي بناءً على عنوان IP الخاص بكم، و نستخدم</p>
            <p><a href="mailto:hello@zawda.me">hello@zawda.me</a></p>
           
        
        </div>
        <Footer
                copyrights=".حقوق النشر © 2023 زودَة. كل الحقوق محفوظة"
                privacy="سياسة الخصوصية"
                privacyLink="/ar/privacy-policy"
                additionalClass={true}
            />
        </>
    )
}

export default PrivacyPolicy