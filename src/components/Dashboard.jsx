// import LandingPage from "./LandingPage";
// import logo from "../assets/images/logo.png";

function Dashboard() {
  return (
    <div className="container">
       {/* <LandingPage/> */}
            <div className="dashboard">
                
                    <div className="main">
                        <img src="./Assets/Abstract1.png" alt=""/>
                    </div>
                    <div className="main-right">
                        <img src="./Assets/Abstract2.png" alt=""/>
                    </div>
                 <div className="sidebar">
                    <div className="username">
                        <img src="./Assets/usericonbig.png" alt=""/>
                        <div>
                            <h2>Eri Guy</h2>
                            <p>Leadcity University</p>
                        </div>
                    </div>
                    <div className="stats">
                        <div>
                            <h4>45</h4>
                            <p>Followers</p>
                        </div>
                        <div>
                            <h4>7</h4>
                            <p>Upload</p>
                        </div>
                        <div>
                            <h4>8</h4>
                            <p>Upvotes</p>
                        </div>
                    </div>
                    <div className="sidebar-nav">
                        <div className="navbar">
                            <a href="Home.html" className="nav">
                                <img src="./Assets/homeicon.png" alt=""/>
                                <h4>Home</h4>
                            </a>
                            <div className="drop"><img src="./Assets/dropdown.png" alt=""/></div>
                        </div>
                        <div className="navbar">
                            <a href="library.html" className="nav">
                                <img src="./Assets/libraryicon.png" alt=""/>
                                <h4>My Library</h4>
                            </a>
                            <div className="drop"><img src="./Assets/dropdown.png" alt=""/></div>
                        </div>
                        <div className="navbar">
                            <a href="Home.html" className="nav">
                                <img src="./Assets/courseicon.png" alt=""/>
                                <h4>Courses</h4>
                            </a>
                            <div className="drop"><img src="./Assets/dropdown.png" alt=""/></div>
                        </div>
                        <div className="navbar">
                            <a href="Home.html" className="nav">
                                <img src="./Assets/bookicon.png" alt=""/>
                                <h4>Books</h4>
                            </a>
                            <div className="drop"><img src="./Assets/dropdown.png" alt=""/></div>
                        </div>
                        <div className="navbar">
                            <a href="Home.html" className="nav">
                                <img src="./Assets/pastquestionicon.png" alt=""/>
                                <h4>Past Questions</h4>
                            </a>
                            <div className="drop"><img src="./Assets/dropdown.png" alt=""/></div>
                        </div>
                    </div>
                </div>
                
                    
                </div>
            </div>
   
  )
}

export default Dashboard


