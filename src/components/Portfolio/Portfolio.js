import './portfolio.css';
import blog from '../../assets/blog.png';
import foodStuff from '../../assets/foodStuff.png';
import portfolio from '../../assets/portfolio.png';
import priceGrid from '../../assets/priceGrid.png';
import testimonials from '../../assets/testimonials.png';
import lovins from '../../assets/lovins.png'

const Portfolio = () => {
  return (
    <section id="portfolio-section">
      <div id="portfolio-section-text">
        <h2 id="portfolio-title">Portfolio</h2>
        <span id="portfolio-description">I take pride in showcasing my work and achievements. Explore my growing portfolio to see the projects I've been involved in, and get a glimpse of my skills and expertise.</span>
      </div>
        <div id="portfolio-imgs">
          <a href="https://recipe-blog-d1b4f.uw.r.appspot.com/" target="_blank">
            <img src={foodStuff} alt="Food Stuff Recipe Blog" className="portfolio-img" />
          </a>
          <a href="https://rfingerhut93.github.io/single-price-grid-component/" target="_blank">
              <img src={priceGrid} alt="Price Grid component" className="portfolio-img" />
          </a>
          <a href="https://rfingerhut93.github.io/testimonials-grid-section-main/" target="_blank">
              <img src={testimonials} alt="Testimonials component" className="portfolio-img" />
          </a>
          <a href="https://my-react-blog-b79c5.wl.r.appspot.com/" target="_blank">
              <img src={blog} alt="Blog website" className="portfolio-img" />
          </a>
          <a href="https://lovinspsychotherapy.com/" target="_blank">
              <img src={lovins} alt="Lovins Psychotherapy website" className="portfolio-img" />
          </a>
          <a href="https://rachelfingerhut.com/" target="_blank">
              <img src={portfolio} alt="Portfolio website" className="portfolio-img" />
          </a>       
        </div>
        <button id="portfolio-btn">See More</button>
    </section>
  )
}

export default Portfolio
