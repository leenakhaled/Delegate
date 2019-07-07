import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './image/footer_background.jpg';
import './footer.css';
import '../../assets/font-awesome/css/font-awesome.min.css';


class Footer extends Component {

    render() {
        const footerStyle = {
            backgroundImage: `url(${backgroundImage})`
        }
        return (
            <footer>
            <div class="footer-top" style={footerStyle}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-6 footer-about wow fadeInUp">
                                <p>
                                    We are a young company always looking for new and creative ideas to help you with our products in your everyday work.
		        			</p>
                                <p><a href="#">Our Team</a></p>
	                    </div>
                            <div class="col-md-6 col-lg-6  footer-contact wow fadeInDown">
                                <h3>Contact</h3>
                                <p><i class="fa fa-map-marker"></i> Via Rossini 10, 10136 Turin Italy</p>
                                <p><i class="fa fa-phone"></i> Phone: (0039) 333 12 68 347</p>
                                <p><i class="fa fa-envelope"></i> Email: <a href="mailto:hello@domain.com">hello@domain.com</a></p>
                                <p><i class="fa fa-skype"></i> Skype: you_online</p>
                            </div>
                       
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 footer-copyright">
                              Leena haj yousef
                            </div>
                            <div class="col-md-6 footer-social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-google-plus-g"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa fa-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
);
                                                                                                                    
      }                                                                                                          
         }                                                                                                   
                                                                                                            
    export default Footer;