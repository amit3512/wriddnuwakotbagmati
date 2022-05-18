import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="Footer container-fluid">
      <div className="footer-items">
        <div className="footer-text">
          <img
            src={logo}
            style={{ width: 100 }}
            alt="logo"
            className="logo1"
          ></img>
          <h4>नेपाल सरकार </h4>
          <div className="row footer-link">
            <div className="col-md-4">
              <h5>उपयोगी लिंकहरु</h5>
              <hr />
              <p>
                <i className="fas fa-arrow-right" />
                <a href="http://ocmcm.bagamati.gov.np/">
                  मुख्यमन्त्री तथा मन्त्रिपरिषद्को कार्यालय, बागमती प्रदेश,
                  हेटौँडा, मकवानपुर
                </a>
              </p>
              <p>
                <i className="fas fa-arrow-right" />
                <a href="https://mopid.bagamati.gov.np/">
                  भौतिक पूर्वाधार विकास मन्त्रालयबागमती प्रदेश, हेटौँडौं
                  मकवानपुर
                </a>
              </p>
              <p>
                <i className="fas fa-arrow-right" />
                <a href="https://moeap.bagamati.gov.np/">
                  आर्थिक मामिला तथा योजना मन्त्रालय, बागमती प्रदेश, हेटौँडा,
                  मकवानपुर
                </a>
              </p>
              <p>
                <i className="fas fa-arrow-right" />
                <a href="https://www.moewri.gov.np/">
                  ऊर्जा, जलस्रोत तथा सिंचाइ मन्त्रालय, सिंहदरबार, काठमाडौं
                </a>
              </p>
              <p>
                <i className="fas fa-arrow-right" />
                <a href="https://www.dwri.gov.np/">
                  जलस्रोत तथा सिंचाई विभाग, ललितपुर काठमाडौं
                </a>
              </p>
              <p>
                <i className="fas fa-arrow-right" />
                <a href="http://www.dhm.gov.np/">
                  जल तथा मौसम विज्ञान विभाग, काठमाडौं
                </a>
              </p>
              <p>
                <i className="fas fa-arrow-right" />
                <a href="https://site.epfnepal.com.np/">
                  कर्मचारी सञ्चय कोष, पुलचोक, ललितपुर
                </a>
              </p>
              <p>
                <i className="fas fa-arrow-right" />
                <a href="http://www.nlk.org.np/">
                  नागरिक लगानी कोष, नयाँ बानेश्वर, काठमाडौं
                </a>
              </p>
            </div>

            <div className="col-md-4 staff-footer">
              <h5>कार्यालय समय</h5>
              <hr />
              <h6>
                सोमबार - शुक्रबार : <p>9:30am - 5:30pm</p>
              </h6>
              <h6>
                शनिबार र आइतबार : <p>सार्वजनिक बिदा </p>
              </h6>
              <i className="fab fa-facebook" />
              <i className="fab fa-twitter" />
              <i className="fab fa-instagram" />
            </div>

            <div className="col-md-4 staff-footer">
              <h5>सम्पर्क</h5>
              <hr />
              <h6>
                <b>Phone</b>
              </h6>
              <h6>
                <i className="fas fa-phone"></i>010-560909
              </h6>

              <h6>
                <b>Email</b>
              </h6>
              <h6>
                <i class="fas fa-envelope-open"></i>wreidd.nuwakot@gmail.com
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
