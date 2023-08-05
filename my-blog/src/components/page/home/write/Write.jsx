import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src="https://c4.wallpaperflare.com/wallpaper/860/450/556/clash-of-clans-wallpaper-preview.jpg" alt="" />
      <from className="writeFrom">
        <div className="writeFromGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" className="WriteInput" style={{ display: "none" }} />
          <input type="text" placeholder="Title" className="WriteInput" />
        </div>
        <div className="writeFromGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText">
          </textarea>
        </div>
        <button className="writeSubmit">
          Publish
        </button>
      </from>
    </div>
  )
}
