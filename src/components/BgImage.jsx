import bgImage1 from '../assets/images/abstract1.png'
import bgImage2 from "../assets/images/abstract2.png"

function BgImage() {
  return (
    <div>
        <div className="main">
                <img src={bgImage1} alt=""/>
            </div>
            <div className="main-right">
                <img src={bgImage2} alt=""/>
            </div>
    </div>
  )
}

export default BgImage