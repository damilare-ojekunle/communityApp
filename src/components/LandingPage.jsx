import  { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from "../assets/images/logo.png";
import bell from "../assets/images/bellicon.png";
import chatus from "../assets/images/chatus.png";
import user from "../assets/images/usericonbig.png";
import dropdown from "../assets/images/dropdown.png";

function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="landingpage-topbar">
      <div className="topbar-logo">
        <a><img src={logo} alt=""/></a>
      </div>

      {/* Conditional rendering based on login status */}
      {isLoggedIn ? (
  
        <div className="topbar-nav">
          <button className="gone">Admin</button>
          <img className="topbar-nav-items gone" src={bell} alt=""/>
          <img className="topbar-nav-items gone" src={chatus} alt=""/>
          <img className="usericonsmall" src={user} alt=""/>
          <a href="#"><img className="" src={dropdown} alt=""/></a>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        // Display this when user is not logged in
        <div className="topbar-nav">
          
          <Link onClick={handleLogin} to="/login" className="login">Log in</Link>
          <Link to="/signup" className="signin">Sign up</Link>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
