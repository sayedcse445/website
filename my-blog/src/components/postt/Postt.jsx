import "./Post.css"

export default function cal( ) {
    return(
        <div className="post"> 
        <img 
         className="imgItem" 
         src="https://i.blogs.es/e0d8db/clash-of-clans/1366_2000.jpg" 
         alt=""
         />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet.
            </span>
            <hr/>
            <span className="postDate">1 hour</span>
        </div>
        <p className="postDes">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugiat temporibus necessitatibus, quidem eligendi autem obcaecati aut illum omnis sed!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus officia quam nulla possimus quisquam! Voluptas dignissimos similique quae nostrum? Veniam pariatur sunt quibusdam consequuntur 

        </p>
         </div>
    )
}