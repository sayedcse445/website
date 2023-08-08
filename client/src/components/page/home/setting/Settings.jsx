import "./settings.css"
import Sidebar from "../../../../components/sidebar/sidebar"

export default function Settings() {
  return (
    <div className="setting">
      <div className="settingWraper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <from className="settingFrom">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/608/494/459/video-game-clash-of-clans-wallpaper-preview.jpg"
              alt="" />
            <label htmlFor="fileInput">
              <i className="settingPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>UserName</label>
          <input type="text" placeholder="safak" />
          <label>Email</label>
          <input type="email" placeholder="safak" /><label>Password</label>
          <input type="password" placeholder="safak" />
          <button className="settingSubmit">Update</button>

        </from>
      </div>
      <Sidebar />
    </div>
  )
}
