import "./register.css"

export default function Register() {
  return (
    <div>
        <div className="register">
            <span className="registerTitle">Register</span>
            <from className="registerFrom">
                <lable>Username</lable>
                <input className="registerInput" type="text" placeholder="Enter your UserName..."/>
                <lable>Email</lable>
                <input className="registerInput" type="text" placeholder="Enter your Email..."/>
                <lable>Password</lable>
                <input className="registerInput" type="password" placeholder="Enter your password"/>
                <button className="registerButton">Register</button>
                
            </from>
            <button className="RegisterLoginButton">Login</button>
        </div>
      
    </div>
  )
}
