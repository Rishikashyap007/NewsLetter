import Footer from './Footer'
import './Footer_newsletter.css'
function Footer_newsletter() {
    return(
        <>
          <p>GrowthX's Newsletter</p>
          <hr/>
          <input type="email"placeholder="Type your Email.."></input>
          <button className="newsletter_btn">Subscribe</button>
          <ul>
            <li>About</li>
            <li>Archieve</li>
            <li>Recommendations</li>
            <li>Sitemap</li>
          </ul>
          <Footer/>
        </>
    )
}
export default Footer_newsletter