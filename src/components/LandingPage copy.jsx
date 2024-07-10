import logo from "../assets/images/logo.png";
import Modal from "../components/utils/Modal"
import Login from "./auth/Login";
import { useState } from "react";

// import menu from "../assets/images/menu.png";
function LandingPage() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };
  return (
   <div className="landingpage-topbar">
      <div className="topbar-logo">
        <a><img src={logo} alt=""/></a>
      </div>
      <div className="topbar-nav">
        <a href="#" className="login" onClick={openLoginModal}>Log in</a>
        <a href="#" className="signup">Sign up</a>
      </div>
      {showLoginModal && (
        <Modal onClose={closeLoginModal}>
          <Login onClose={closeLoginModal} />
        </Modal>
      )}
    </div>
  )
}

export default LandingPage