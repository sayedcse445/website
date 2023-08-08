import "./header.css"

export default function Header() {
  return (
    <div className="Header">
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitlesSm">React & Node</span>
          <span className="headerTitlesLg">Blog</span>
        </div>
        <img
          className="headerImg"
          src="https://c4.wallpaperflare.com/wallpaper/777/571/633/clash-of-clans-wallpaper-preview.jpg"
          alt=""
        />
      </div>
    </div>
  ); 
}
