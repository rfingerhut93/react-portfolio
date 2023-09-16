import websiteIcon from "../assets/websiteIcon.png"

const StaticWebPage = () => {
    return (
        <>
            <div className="web-page">
                <div className="skill-card-container">
                    <div className="skill-card">
                        <img src={websiteIcon} alt="website icon" className="skill-card-img"/>
                        <div className="skill-card-text">
                            <h2>Websites and Landing Pages</h2>
                            <p>For your online presence, I design and build visually appealing websites and landing pages. I use CSS, HTML, and JavaScript to ensure your site not only looks great but functions seamlessly, providing an excellent user experience.</p>

                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default StaticWebPage;