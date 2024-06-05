import React from 'react';
import './Footerr.css';
import InfoButtons from './InfoButtons';
import EmailTooltip from './EmailTooltip';
import Socials from './Socials';

export default function Footerr() {
  return (
    <div>
      

      <footer class="footer-section">
        <div class="container">
            <section id='contact-section'>
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                               <InfoButtons first ="Address" second="Muscat, Sultante of Oman"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                            <EmailTooltip/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                            <InfoButtons first ="Contact" second="+968 95622565"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <img src="/images/favicon.png" class="img-fluid" alt="logo"/>
                            </div>
                            <div class="footer-text">
                                <p>At SANT, we understand the need of our clients, keeping our clients the heart of everything we do. We believe in quality and we respect our client needs, in the end that is what leads to customer satisfaction. Our goal is to “Satisfy the needs of Oman”</p>
                            </div>
                            {/* <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </div> */}
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <Socials/>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2024, All Right Reserved <a href="https://codepen.io/anupkumar92/">SANT</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}
