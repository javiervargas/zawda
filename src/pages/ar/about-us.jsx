import Navbar from "../../../components/navbar/navbar.component";
import AboutUsBanner from "../../../components/about-us-banner/about-us-banner.component";
import Team from "../../../components/team/team.component";
import Connect from "../../../components/connect/connect.component";
import Footer from "../../../components/footer/footer.component";
import { useEffect, useState} from "react";
import Head from 'next/head';
const AboutUs = () => {
    const langLinks = [
        { label: "إنجليزي", href: "/about-us" },
        { label: "عربي", href: "/ar/about-us" }
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
    const [language, setLanguage] = useState('ar'); // default to English
    const members = [
        {
            name: "عدي كمال",
            role: "المؤسس والمدير التنفيذي",
            journey: "بدأت رحلة عدي كمال مع البيتكوين بعد أن عانى من التضخم المفرط في لبنان.",
            imageSrc: "/assets/oday-kamal.svg",
            experienceImageSrc: "/assets/oday-experience.png"
        },
        {
            name: "خابيير بارغاس",
            role: "مدير التكنولوجيا التنفيذي",
            journey: "بدأت رحلة بارغاس مع البيتكوين عام 2013 على صفحات منتديات لينوكس",
            imageSrc: "/assets/Javier-Vargas.svg",
            experienceImageSrc: "/assets/javier-experience.png"
        }
    ]
    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);
    return (
        <>
           <Head>
        <title>ZAWDA</title>
        <meta name="title" content="زودة: حكاية تعزيز الثروة وتقديم حلول الأمان بالبيتكوين" />
        <meta name="description" content="استكشف قصة زودة ورؤيتها في استغلال قوة البيتكوين لضمان الأمان المالي. نحن هنا لمساعدة الأفراد والشركات في الشرق الأوسط وشمال أفريقيا" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Zawda-Favicon.png" />
      </Head>
           <Navbar signInLink={signInLink} dropdownLinks={dropdownLinks} languageLinks={langLinks} additionalClass='arabic'/>
            <AboutUsBanner 
                pretitle="قصتنا"
                text="زودَة كلمة عامّية مشتقّة من الزيادة، وهي في حالتنا تعني تعزيز قيمة ثروتك المالية. بدأت رحلتنا مع البيتكوين - مثل الكثيرين غيرنا - في الاقتصادات الناشئة، وذلك حين رأينا مستويات التضخم المرتفعة، وانخفاض قيمة العملات المحلية، والقيود المفروضة على تحويل الأموال في بلداننا، فقررنا أخذ زمام المبادرة والبدء في مشروعنا. اليوم رسالتنا هي توفير الأمان المالي للجميع في كافة أنحاء الشرق الأوسط وشمال أفريقيا، ونعتقد أن البيتكوين هي جزء من هذا الأمان المالي."
            />
            <Team
                title="فريقنا"
                text="عمل أعضاء فريقنا في مجالات التكنولوجيا والإدارة العامة والتأمين والشركات الناشئة في 7 دول مختلفة"
                members={members}
                experienceLabel="الخبرات السابقة"
            />
            <Connect
                pretitle="ابدأ بالادخار اليوم"
                title="تواصل معنا"
                text="البيتكوين هنا من أجلنا جميعاً. تعمل زودَة على تسهيل تبني بيتكوين للجميع."
                additionalClass={true}
                buttonText="أرسل"
            />
             <Footer
                copyrights=".حقوق النشر © 2023 زودَة. كل الحقوق محفوظة"
                privacy="سياسة الخصوصية"
                privacyLink="/ar/privacy-policy"
                additionalClass={true}
            />
        </>
    )
}


export default AboutUs;