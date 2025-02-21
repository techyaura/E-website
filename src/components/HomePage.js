export default function HomePage() {
  return (
    <main class="main home">
      <div class="home-top-container">
        <div class="home-slider owl-carousel owl-theme owl-carousel-lazy">
          <div
            class="home-slide"
            style={{'backgroundImage': "url('assets/images/slider/slide1.jpg')"}}
          >
            <img
              class="owl-lazy"
              src="assets/images/lazy.png"
              alt="slider_image"
            />
            <div class="home-slide-content container">
              <div>
                <h2 class="home-slide-subtitle">start the revolution</h2>
                <h1 class="home-slide-title">drone pro 4</h1>
                <h2 class="home-slide-foot">
                  from <span>$499</span>
                </h2>
                <button class="btn btn-dark btn-buy">BUY NOW</button>
              </div>
            </div>
          </div>
          <div
            class="home-slide"
            style={{'backgroundImage': "url('assets/images/slider/slide2.jpg')"}}
          >
            <img
              class="owl-lazy"
              src="assets/images/lazy.png"
              alt="slider_image"
            />
            <div class="home-slide-content container">
              <div>
                <h2 class="home-slide-subtitle">amazing deals</h2>
                <h1 class="home-slide-title">smartphone</h1>
                <h2 class="home-slide-foot">
                  from <span>$199</span>
                </h2>
                <button class="btn btn-dark btn-buy">BUY NOW</button>
              </div>
            </div>
          </div>

          <div
            class="home-slide"
            style={{backgroundImage: "url('assets/images/slider/slide3.jpg')"}}
          >
            <img
              class="owl-lazy"
              src="assets/images/lazy.png"
              alt="slider_image"
            />
            <div class="home-slide-content container">
              <div>
                <h2 class="home-slide-subtitle">best price of the year</h2>
                <h1 class="home-slide-title">top accessories</h1>
                <h2 class="home-slide-foot">
                  from <span>$19</span>
                </h2>
                <button class="btn btn-dark btn-buy">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div class="home-slider-sidebar">
          <ul>
            <li class="active">Drones</li>
            <li>Phones</li>
            <li>Accessories</li>
          </ul>
        </div>
      </div>
      </main>
  );
}
