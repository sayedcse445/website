import "./single.css"
import  Sidebar from "../../../sidebar/sidebar"
import SinglePost from "../../../../components/singlePost/singlePost"

export default function Single () {
    return(
        <div className="singlePost">
            <SinglePost />
            <Sidebar />
        </div>
    )
}