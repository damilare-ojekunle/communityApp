

function Signup() {
  return (
     <div className="form">
        <div className="account-form">
            <h2>Create an account</h2>
            <form action="">
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"/>
                </div>
                <div className="form-field">
                    <label htmlFor="text">Password</label>
                    <input type="text" id="password"/>
                </div>
                <div className="form-field submit">
                    <button><a href="dashboard.html">Create an account</a></button>
                </div>
                
                <p>Already Have An Account? <a href="login.html">Log in</a></p>
            </form>
        </div>
    </div>
  )
}

export default Signup