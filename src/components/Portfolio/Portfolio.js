import './portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio-section">
      <div id="portfolio-section-text">
        <h2 id="portfolio-title">Portfolio</h2>
        <span id="portfolio-description">I take pride in showcasing my work and achievements. Explore my growing portfolio to see the projects I've been involved in, and get a glimpse of my skills and expertise.</span>
      </div>
        <div id="portfolio-imgs">
            <img src="https://placehold.co/300x300" alt="" className="portfolio-img" onClick={() => {}} />
            <img src="https://placehold.co/300x300" alt="" className="portfolio-img" onClick={() => {}} />
            <img src="https://placehold.co/300x300" alt="" className="portfolio-img" onClick={() => {}} />
            <img src="https://placehold.co/300x300" alt="" className="portfolio-img" onClick={() => {}} />
            <img src="https://placehold.co/300x300" alt="" className="portfolio-img" onClick={() => {}} />
            <img src="https://placehold.co/300x300" alt="" className="portfolio-img" onClick={() => {}} />            
        </div>
        <button id="portfolio-btn">See More</button>
    </section>
  )
}

export default Portfolio
