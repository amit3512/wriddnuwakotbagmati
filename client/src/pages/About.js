import office from '../images/office.jpg';
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <div  className="container">
            <h3  className="text-center mt-2 bg-light">हाम्रो बारेमा </h3>
            <div  className="card">
                    <img  className="card-img-top" src={office} alt="office-img"/>
                    <div  className="card-body">
                    <Fade right>
                        <p  className="card-text message">नेपालको संविधान २०७२ अनुसार देशमा तिन तहको (संघ, प्रदेश र स्थानीय तह) सरकार गठन पश्चात वागमती 
                        प्रदेश, भौतिक पुर्वाधार मन्त्रालय अन्तर्गत नुवाकोट जिल्लामा प्रदेश स्तरका सतह सिंचाइ, जलउत्पन्न प्रकोप व्यवस्थापन (नदी नियन्त्रण/ पहिरो 
                        व्यवस्थापन) का साथै जलस्रोतका वहुउपयोग संग सम्बन्धित आयोजनाहरुको अध्ययन, निर्माण, सञ्चालन तथा मर्मत संभारका कार्यहरु सञ्चालन
                         गरी कृषि योग्य जमिनमा दिगो, भरपर्दो सिंचाइ सुविधा पुर्याउने र जल उत्पन्न प्रकोपबाट मानव वस्ती, खेती योग्य जमिन र भौतिक संरचनामा हुने 
                         क्षतिको न्यूनिकरण गर्ने उदेश्य यस जलस्रोत तथा सिंचाइ विकास डिभिजन कार्यालय, नुवाकोटको रहेको छ ।

                         साविक मध्यमाञ्चल सिंचाइ विकास डिभिजन न.३ नुवाकोट बाट हुँदै आएको कार्यहरु हालको परिवर्तित संरचना अनुसार यस डिभिजन कार्यालयमा 
                         हस्तान्तरण भएको र साविक जलउत्पन्न प्रकोप व्यवस्थापन डिभिजन कार्यालय, मकवानपुरको कार्यक्षेत्र मध्ये नुवाकोट जिल्लाको कार्यहरु समेत यस 
                         डिभिजन अन्तर्गत सञ्चालन हुने गरी हस्तान्तरण भएको छ ।

                        </p>
                        </Fade>
                    </div>
            </div>
    </div>
  );
}

export default About;
