import { Routes, Route } from "react-router-dom";

// Unauthenticated Routes
import LandingPage from "./pages/unauthenticated/LandingPage";
import Login from "./pages/unauthenticated/Login";
import SignUp from "./pages/unauthenticated/SignUp";
import Dashboard from "./pages/user_dashboard/Dashboard";
import PastQuestion from "./pages/user_dashboard/PastQuestion";
import Courses from "./pages/user_dashboard/Courses";
import Profile from "./pages/user_dashboard/Profile";
import ProtectedRoute from "./components/utils/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/user/home"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/questions"
        element={
          <ProtectedRoute>
            <PastQuestion />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/courses"
        element={
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}

export default App;
