 import "./TopBar.css";

export default function TopBar() {
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
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Logout</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg"
                src ="https://th.bing.com/th/id/OIP.Y3WiEorYoDxGz4YNCyFFKgHaFj?pid=ImgDet&rs=1" alt="" />

                <i class="fa fa-search"></i>
                </div> 
        </div>
    )
}