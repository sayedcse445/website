import "./sidebar.css"

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className="sidebarImg" src="https://c4.wallpaperflare.com/wallpaper/363/495/820/clash-of-clans-supercell-games-2017-games-wallpaper-preview.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, eaque!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Catagories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-facebook-f"></i>
                    <i className='sidebarIcon fab fa-pinterest-square'></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}