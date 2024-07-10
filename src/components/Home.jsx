import BgImage from './BgImage'
import LandingPageStats from './LandingPageStats'
import search from "../assets/images/search.png"


function Home() {
  return (
    <div>
            <BgImage/>
            <div className="landpage">
                <div className="landpage-home">
                    <h1>Federal University Oye-Ekiti</h1>
                    <p>Innovation & Character For National Transformation</p>
                    <div className="search">
                        <img src={search} alt=""/>
                        <input type="text" placeholder="Search for courses, books, past questions etc"/>
                    </div>
                </div>
                
            </div>
            <LandingPageStats/>
    </div>
  )
}

export default Home