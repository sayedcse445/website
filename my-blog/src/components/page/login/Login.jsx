import "./login.css"

export default function Login() {
  return (
    <div>
        <div className="login">
            <span className="loginTitle">Login</span>
            <from className="loginFrom">
                <lable>Email</lable>
                <input className="loginInput" type="text" placeholder="Enter your Email..."/>
                <lable>Password</lable>
                <input className="loginInput" type="password" placeholder="Enter your password"/>
                <button className="loginButton">Login</button>
            </from>
            <button className="registerButton">Register</button>
        </div>
      
    </div>
  )
}
