import Header from "../../header/Header"
import Posts from "../../posts/posts"
import Sidebar from "../../sidebar/sidebar"
import "./Home.css"

export default function Home(){
    return(
        <>
        <Header/>
        <div className="Home">
            <Posts />
            <Sidebar/> 
        </div>
        </>
    )
} 