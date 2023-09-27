import './portfolio.css';
import reactBlog from '../../assets/reactBlog.png';
import food from '../../assets/food.png';
import oldWebsite from '../../assets/oldWebsite.png';
import pricegrid from '../../assets/pricegrid.png';
import testimonialGrid from '../../assets/testimonialGrid.png';
import lovinsWeb from '../../assets/lovinsWeb.png'

const Portfolio = () => {
  return (
    <section id="portfolio-section">
      <div id="portfolio-section-text">
        <h2 id="portfolio-title">Personal Projects</h2>
        <span id="portfolio-description">I take pride in showcasing my work and achievements. Explore my growing portfolio to see the projects I've been involved in, and get a glimpse of my skills and expertise.</span>
      </div>
        <div id="portfolio-imgs">
          <div className="portfolio-item">
            <div className="portfolio-info">
              <a href="https://github.com/rfingerhut93/recipe-blog-full-stack" target="_blank" rel='noreferrer'>Code</a>
            </div>
            <a href="https://recipe-blog-d1b4f.uw.r.appspot.com/" target="_blank" rel='noreferrer'>
              <img src={food} alt="Food Stuff Recipe Blog Screenshot" className="portfolio-img" />
            </a>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-info">
                <a href="https://github.com/rfingerhut93/single-price-grid-component" target="_blank" rel='noreferrer'>Code</a>
            </div>
            <a href="https://rfingerhut93.github.io/single-price-grid-component/" target="_blank" rel='noreferrer'>
                <img src={pricegrid} alt="Price Grid component screenshot" className="portfolio-img" />
            </a>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-info">
                <a href="https://github.com/rfingerhut93/testimonials-grid-section-main" target="_blank" rel='noreferrer'>Code</a>
            </div>
            <a href="https://rfingerhut93.github.io/testimonials-grid-section-main/" target="_blank" rel='noreferrer'>
                <img src={testimonialGrid} alt="Testimonials component screenshot" className="portfolio-img" />
            </a>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-info">
                <a href="https://github.com/rfingerhut93/full-stack-blog" target="_blank" rel='noreferrer'>Code</a>
            </div>
            <a href="https://my-react-blog-b79c5.wl.r.appspot.com/" target="_blank" rel='noreferrer'>
                <img src={reactBlog} alt="Screenshot of a React-made blog website" className="portfolio-img" />
            </a>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-info">
                <a href="/" id="lovins-code" rel='noreferrer'>Code</a>
            </div>
            <a href="https://lovinspsychotherapy.com/" target="_blank" rel='noreferrer'>
                <img src={lovinsWeb} alt="Lovins Psychotherapy website screenshot" className="portfolio-img" id="lovins-img" />
            </a>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-info">
                <a href="https://github.com/rfingerhut93/rachelfingerhut.com" target="_blank" rel='noreferrer'>Code</a>
            </div>
            <a href="https://rfingerhut93.github.io/rachelfingerhut.com/" target="_blank" rel='noreferrer'>
                <img src={oldWebsite} alt="A static portfolio website" className="portfolio-img" />
            </a> 
          </div>
        </div>
    </section>
  )
}

export default Portfolio;
