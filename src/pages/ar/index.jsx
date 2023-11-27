import Navbar from "../../../components/navbar/navbar.component";
import HomeBanner from "../../../components/home-banner/home-banner.component";
import About from "../../../components/about/about.component";
import Pricing from "../../../components/pricing/pricing.component";
import Security from "../../../components/security/security.component";
import Partners from "../../../components/partners/partners.component";
import Calculator from "../../../components/calculator/calculator.component";
import Faq from "../../../components/faq/faq.component";
import Footer from "../../../components/footer/footer.component";
import { useState, useEffect } from "react";
import Head from 'next/head';
const Home = () => {
    const [language, setLanguage] = useState('ar'); // default to English

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);
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
      const title = <>إعادة تعريف <br /> الثروة</>;
      const text = <>تطويع قوة البيتكوين <br /> لحماية ثروتك مع زودَة.</>;
      const buttonText = "عين موعدا";
      const buttonLink = "/ar/about-us#contact";
      const boxesData = [
        {
            title: "للموظفين",
            products: [
                "الاحتفاظ بجزء من الراتب على شكل بيتكوين",
                "الاحتفاظ بجزء من الراتب على شكل بيتكوين",
                <><span>عدم دفع أي رسوم</span> على السحب أو التحويل</>, 
                <> يدفع صاحب العمل <span>5</span> دولارات شهرية لكل موظف-ة بالعملة المحلية</>,
             
            ]
        },
        {
            title: "لأصحاب العمل",
            products: [
                "استثمار جزء من ميزانية الشركة على شكل بيتكوين",
                "الحصول على محفظة متعددة التوقيعات غير متصلة بالإنترنت للمزيد من الأمان",
                "النفاذ إلى الأموال في أي وقت",
                <> دفع رسوم بقيمة <span>0.99</span> بالمئة فقط للأمان والتدقيق المالي</>,
            
            ]
        }
    ]
    const securityTitle = <>زودَة شريكك الأفضل لتقليل <br /> المخاطر</>
    const securityData =  [
        {
            icon: "/assets/security-icon.svg",
            label: "الأمان",
            description: <>نحتفظ برصيدك من البيتكوين في<br /> محفظة غير متصلة بالإنترنت ومحمية<br /> بأفضل التقنيات المتوفّرة من توقيعات<br /> متعددة ومصادقة بخطوتين</>
        },
        {
            icon: "/assets/wallet-icon.svg",
            label: <>تخزين <br />القيمة</>,
            description: <>البيتكوين عملة لامركزية قابلة للتحويل<br /> إلى أي عملة نقدية أخرى، أموالك<br /> محمية وقابلة للوصول في أي وقت</>
        },
        {
            icon: "/assets/audit-icon.svg",
            label: <>التدقيق <br />والاختبار</>,
            description: <>نقوم بتدقيق رصيدك من البيتكوين<br /> بشكل منتظم عبر جهات ثالثة مستقلة <br />ومرموقة وباستعمال المعيار الدولي<br /> إيساي 3402</>
        }
    ]
    const faqsData = [
        {
          question: "هل تدعم زودَة البيتكوين فقط؟",
          answer: "تقدم زودَة للشركات خيار استعمال العملة المحلية وشراء البيتكوين ضمن حقيبة استثمارية متنوعة وخطة ادخار طويلة الأمد. لا تدعم زودَة أي عملة مشفّرة أخرى غير البيتكوين."
        },
        {
            question: " كم تكلفة الاستثمار في زودَة؟",
            answer :" تقدّم زودَة خططاً شهرية وسنوية للشركات. تكلفة «اشتراك استحقاقات البيتكوين» هي 5 دولارات شهرياً بالعملة المحلية لكل موظف أو موظفة. أما اشتراك «إدارة رصيد البيتكوين» فتكلفته 0.99 بالمئة سنوياً للصيانة والتدقيق. لا تفرض زودَة أي رسوم على السحب أو التحويل."
        },
        {
            question: " ما هي المعلومات المطلوبة للتسجيل؟",
            answer:" زودَة متاحة للشركات فقط. لإنشاء حساب زودَة، يجب توقيع عقد وتلبية متطلبات تقصي العملاء. زودَة ليست مؤسسة مالية أو خدمة لمعالجة المدفوعات. نحن نقدم خدمات برمجية لمساعدة الشركات وموظفيها على ادّخار البيتكوين."
        },
        
        {
            question: " هل ستكون زودَة وصيّة على أموالي؟",
            answer:"نعم، ستكون زودَة الجهة الوصيّة على أموالك. عند إنشاء حساب لدى زودَة، سيتم تحويل البيتكوين من حسابك البنكي إلى إحدى منصات التبادل القانونية التي نتعامل معها، ومن ثم سنضع رصيدك من البيتكوين في محفظة غير متصلة بالإنترنت يمكن الوصول إليها عبر توقيعين من أصل ثلاثة."
        },
        
        {
            question: " كم من المال يمكنني استثماره مع زودَة؟",
            answer:" لا يوجد رقم سحري، والأمر يتوقف على استعداداتك وقدرتك على الاستثمار طويل الأمد. تظهر حساباتنا أن وضع ما بين 1 إلى 5 بالمئة في محفظة بيتكوين، سواءً بالنسبة للأفراد أو الشركات، هو استثمار صغير بما يكفي لوضعه جانباً وعدم التفكير به مؤقتاً، وفي الوقت نفسه يسمح للقيمة بالارتفاع مع تجنب التقلبات السعرية القصيرة المدى."
        },
        
        {
            question: " هل سأخسر أموالي مع زودَة؟",
            answer:" تقوم زودَة بحماية أموالك وتدقيقها بشكل مستمر. ولكن كأي رصيد استثماري، أموالك خاضعة لتقلّبات السوق. ستمرّ أوقات تنخفض فيها قيمة البيتكوين بسعر عملتك المحلية مقارنة بالعملات الأخرى. لذا فإننا ننصح بالتفكير بأفق زمني يزيد عن 4 سنوات من أجل الاستفادة من القيمة المتراكمة للبيتكوين."
        },
        {
            question: " هل تساعد زودَة في تحويل مدخراتي من البيتكوين إلى عملات عادية؟",
            answer:" بإمكان زودَة أن تبيع رصيدك من البيتكوين باستخدام منصات التبادل القانونية ومن ثم إعادة أموالك إلى حسابك المحلي عند الرغبة. يمكنك أيضاً سحب رصيدك من البيتكوين إلى محفظتك الرقمية المفضلة."
        }
      ]
      const langLinks = [
        { label: "إنجليزي", href: "/" },
        { label: "عربي", href: "/ar" }
    ]
      return (
        <>
           <Head>
        <title>ZAWDA</title>
        <meta name="title" content="زودة: حماية ثروتك وتعزيز الأمان المالي بالبيتكوين" />
        <meta name="description" content="اكتشف رسالة زودة لإعادة تعريف الثروة باستخدام البيتكوين. حلول آمنة ومتوافقة للشركات والأفراد للادخار ومواجهة تقلبات العملات وتحقيق الأهداف المالية" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Zawda-Favicon.png" />
      </Head>
        <Navbar signInLink={signInLink} dropdownLinks={dropdownLinks} languageLinks={langLinks} additionalClass='arabic'/>
        <HomeBanner title={title} text={text} buttonText={buttonText} buttonLink={buttonLink} additionalClass='arabic' />
        <About
            pretitle="رسالتنا"
            title="الادّخار عبر البيتكوين"
            text="تعمل زودَة على تقديم خدمة الأمان المالي للجميع. نؤمن بأن من حق الجميع أن ينال فرصة جمع الثروة وتحقيق أهدافه المالية. نقدّم خطط ادّخار عبر بيتكوين لحماية الشركات والمؤسسات من تقلّبات أسعار العملة، ولإيجاد طرق جديدة للاحتفاظ بالموظّفين وتحسين الأداء المالي."
            worldPretitle="العالم اليوم"
            worldTitle="عدم المساواةالمالية: التعامل مع نظام معطوب"
            worldText="النظام المالي الحالي معطوب. أكثر من 80 بالمئة من جميع الأموال الموجودة اليوم «مصنوعة» منذ 2020. ومع التضخم وتهاوي قيمة العملة والقيود الموضوعة على حركة الأموال، رؤوس أموالكم معرضة دوماً للخطر. كانت الأسهم والسندات والعقارات والذهب كلها آليات استثمار أساسية، ولكنا جميعاً تعاني من قيود وحدود. نعتقد في زودَة بوجود رصيد رقمي جديد يمكنه تحقيق التوازن - البيتكوين. إنها الرصيد الأول الذي يحقّق شرط الندرة من خلال مبدأ إثبات العمل"
            worldButtonText="قراءة ورقتنا البيضاء"
        />
        <Pricing 
        pretitle="منتجاتنا"
        title="يمكن للشركات الآن شراء وجمع البيتكوين بطريقة آمنة وقانونية وسلسة"
        boxesData={boxesData}
        additionalClass={true}
        />
        <Security 
        title={securityTitle}
        riskBoxes={securityData}
        
        />
        <Partners
            title1="قالوا عن زودة"
            title2="الداعمون"
        />
        <Calculator
            pretitle="حاسبة ادخار البيتكوين"
            title="تقدير العوائد"
            additionalClass={true}
        />
        <Faq 
            title="أسئلة شائعة"
            faqs={faqsData}
            additionalClass={true}
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

export default Home;