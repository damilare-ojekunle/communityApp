
import { Link } from 'react-router-dom';

function Login() {
    const handleSubmit = (e) =>{
        e.preventDefault();

    }
  return (
   <div className="form">
        <div className="account-form">
            <h2>Login to your account</h2>
            <form onClick={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"/>
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password"/>
                </div>
                <div className="form-field submit">
                    <button><Link to="/dashboard">Login</Link></button>
                </div>
                
                <p>Don&apos;t Have An Account? <Link to="/signup">Sign up</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login