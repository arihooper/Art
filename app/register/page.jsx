import "@Style/Register.scss";

const Register = () => {
    return (
        <div className="register">
            <img src="/assests/reg.png" alt="Registering" />
            <div className="register_content">
                <form action="">
                    <input placeholder="Username" name="username" required />
                    <input placeholder="Email" name="email" required />
                    <input placeholder="Password" name="password" required />
                    <input placeholder="Confirm Password" name="confirmPassword" required />
                    <input 
                        id="image" 
                        type="file" 
                        name="profile" 
                        accept="image/*" 
                        style={{ display: "none" }} 
                        required 
                    />
                    <label htmlFor="image">
                        <img src="/assests/addpic.png" alt="Add Your Profile" />
                        <p>Upload Photo</p>
                    </label>
                    <button type="submit">Register</button>
                </form>
                <a href="/login">Got an Account? Log In Here</a>
            </div>
        </div>
    );
}

export default Register;
