
import img from '../../images/about-img.jpg';
import './About.css'
const About = () => {
  return (
    <div className='about'>
      <h3>ABOUT</h3>
      <div className="about-content">
        <img src={img} alt="about-image" width={400} height={600}/>
        <div className="about-description">
          <h3>About  Nouh's Books</h3>
          <p>Welcome to our book website, a haven for bibliophiles and book lovers alike! Here,
             you'll discover a treasure trove of literary delights spanning various genres, 
             from timeless classics to contemporary masterpieces. Dive into our carefully curated 
             collection where every page turn unveils a new adventure, a new insight, and a new world
              waiting to be explored. Whether you're seeking a gripping mystery to unravel,
               a heartwarming romance to swoon over, or an enriching non-fiction title to broaden 
               your horizons, we have something for everyone. Immerse yourself in the magic of 
               storytelling, embark on unforgettable journeys between the covers of our books, 
               and let the words on the page transport you to places beyond imagination. Welcome 
               to a place where books come to life, and reading is not just a hobby but a passion.</p>
        </div>
      </div>
    </div>
  )
}

export default About