export default function Footer() {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <a href="#" class="widget-newsletter-title">
                Sign Up to Newsletter
              </a>
            </div>
            <div class="col-lg-4">
              <p class="widget-newsletter-content">
                Get all the latest information on Events, Sales and Offers.
                <br />
                <span class="widget-newsletter-content">
                  Receive $10 coupon for first shopping.
                </span>
              </p>
            </div>
            <div class="col-lg-5">
              <form action="#">
                <div class="footer-submit-wrapper">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your Email address"
                    required
                  />
                  <button type="submit" class="btn">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="footer-middle   ">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <a href="index.html">
                <img
                  src="assets/images/logo-dark.png"
                  alt="Porto Logo"
                  class="mt-2"
                />
              </a>
              <div class="row">
                <div class="col-sm-6 col-xl-4">
                  <div class="contact-widget phone">
                    <div style={{'display': 'inline-block'}}>
                      <h4 class="widget-title">call us now</h4>
                      <a href="#">+123 5678 890</a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div class="contact-widget email">
                    <h4 class="widget-title" style={{'margin-bottom' : '.5rem'}}>
                      e-mail address
                    </h4>
                    <a href="mailto:mail@example.com">mail@domain.com</a>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="contact-widget follow">
                    <h4 class="widget-title">follow us</h4>
                    <div class="social-icons">
                      <a href="#" class="social-icon" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" class="social-icon" target="_blank">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#" class="social-icon" target="_blank">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-6">
              <div class="row">
                <div class="col-sm-4">
                  <div class="widget">
                    <h4 class="widget-title">Categories</h4>
                    <ul class="links">
                      <li>
                        <a href="#">Fashion</a>
                      </li>
                      <li>
                        <a href="#">Electronics</a>
                      </li>
                      <li>
                        <a href="#">Gifts</a>
                      </li>
                      <li>
                        <a href="#">Garden</a>
                      </li>
                      <li>
                        <a href="#">Music</a>
                      </li>
                      <li>
                        <a href="#">Motors</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="widget">
                    <h4 class="widget-title">About</h4>
                    <ul class="links">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">All Collections</a>
                      </li>
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="widget">
                    <h4 class="widget-title">Customer Care</h4>
                    <ul class="links">
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="#">Wishlist</a>
                      </li>
                      <li>
                        <a href="#">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copyright">
            Porto eCommerce. &copy; 2020. All Rights Reserved
          </p>
          {/* <img
            src="assets/images/payments_long.png"
            width="180px"
            style={{'max-height': '24px'}}
            alt="assets/images/payments_long.png"
          /> */}
        </div>
      </div>
    </footer>
  );
}
