import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './footer_background.jpg';
import './footer.css';


class Footer extends Component {
  
  render() {
    const footerStyle={
      backgroundImage: `url(${backgroundImage})`

    }
    return (
      <footer style={footerStyle}>
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-md-6 footer-about wow fadeInUp">
                  <p>
                    We are a young company always looking for new and creative ideas to help you with our products in your everyday work.
		        			</p>
                  <p><a href="#">Our Team</a></p>
	                    </div>
                <div class="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown">
                  <h3>Contact</h3>
                  <p><i class="fas fa-map-marker-alt"></i> Palestine Nablus </p>
                  <p><i class="fas fa-phone"></i> Phone: (0039) 333 12 68 347</p>
                <p><i class="fas fa-envelope"></i> Email: <a href="leenakhaled393@gmail.com">leenakhaled393@gmail.com</a></p>
                  <p><i class="fab fa-skype"></i> Skype: Leena Khaled</p>
                </div>
                <div class="col-md-4 col-lg-4 footer-links wow fadeInUp">
                  <div class="row">
                    <div class="col">
                      <h3></h3>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="container">
              <div class="row">
                <div class="col-md-6 footer-copyright">
                 <a href="https://azmind.com">Leena Haj Yousef</a>
                </div>
                <div class="col-md-6 footer-social">
                  <a href="#"><i class="fab fa-facebook"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-google-plus-g"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-pinterest"></i></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}


export default Footer;
