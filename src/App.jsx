
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import PageNotFound from './components/PageNotFound';
// import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard';
import Home from './components/Home'




function App() {
  

  return (
    <>
    <Router>
      
      <div className="wrap">
        
        <div className="landingpage">
              <LandingPage/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="*" element={<PageNotFound />} />
        </Routes>
            </div>
            
    </div>
        {/* <Footer/> */}
    </Router>
  

          
    </>
  )
}

export default App
