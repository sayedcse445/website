import { Link } from "react-router-dom"
import "./TopBar.css";

export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-facebook-f"></i>
                <i className='topIcon fab fa-pinterest-square'></i>
                <i className="topIcon fab fa-instagram"></i>

            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">About</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">Contact</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">Write</Link>
                    </li>
                    <li className="topListItem">
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg"
                            src="https://th.bing.com/th/id/OIP.Y3WiEorYoDxGz4YNCyFFKgHaFj?pid=ImgDet&rs=1" alt="" />

                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">Login</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">Register</Link>
                            </li>
                        </ul>
                    )
                }

                <i class="fa fa-search"></i>
            </div>
        </div>
    )
}