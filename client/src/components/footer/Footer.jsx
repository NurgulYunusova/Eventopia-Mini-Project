import "./footer.scss";

function Footer() {
  return (
    <>
      <footer>
        <div className="footerContainer topTextSection">
          
          <div className="topTextSection-left">
            <div className="firstTextSection">
              <h1 className="logo">Eventopia</h1>
              <div className="bottomText">
                <h4>Support service</h4>
                <a href="tel:+7895586985" className="phone">
                  +789 558 69 85
                </a>
              </div>
            </div>

            <div className="secondTextSection">
              <h4>Information</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">E-ticket</a>
                </li>
                <li>
                  <a href="#">Ticket refund or change</a>
                </li>
                <li>
                  <a href="#">Privacy Police</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="topTextSection-right">
            <div className="thirdTextSection">
              <h4>Eventopia</h4>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Venues</a>
                </li>
                <li>
                  <a href="#">Point of sales</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </div>

            <div className="fourthTextSection">
              <h4>Security</h4>
              <p>
                All payments are protected by 3D Secure from Visa, Visa Electron,
                Maestro & MasterCard
              </p>
            </div>
          </div>

        </div>

        <div className="footerContainer bottomTextSection">
          <p>© 2023 eventopia.com - All rights reserved</p>
          <ul className="socialMedias">
            <li>
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com//">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
