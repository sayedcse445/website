import "./singlePost.css"

export default function singlePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://c4.wallpaperflare.com/wallpaper/163/890/354/clash-of-clans-high-resolution-picture-wallpaper-preview.jpg" alt="" />
                <h1 className="singlePostTittle">Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i class="singlePostIcon fa fa-edit"></i>
                        <i class="singlePostIcon fa fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Safak</b></span>
                    <span className="singlePostDate">1 Hour ago </span>

                </div>
                <p className="singlePostDes">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et odit aspernatur eius beatae voluptates eligendi ad explicabo facilis illum omnis totam aliquid, quisquam corrupti? Cumque doloremque vitae fugiat hic quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum beatae nobis minus dolorum soluta? Aspernatur sapiente debitis provident molestias, impedit voluptate ipsa porro magni quos nemo iure recusandae odio est eaque repellat maxime culpa nihil doloribus sequi. Magnam illo quidem ea, consequatur ipsa blanditiis natus ex. Architecto enim impedit harum esse, inventore accusantium sapiente. Hic, doloremque autem dignissimos ullam deleniti, consequatur eveniet ea dolor dicta ratione earum. Provident, dolores.Aspernatur sapiente debitis provident molestias, impedit voluptate ipsa porro magni quos nemo iure recusandae odio est eaque repellat maxime culpa nihil doloribus sequi. Magnam illo quidem ea, consequatur ipsa blanditiis natus ex. Architecto enim impedit harum esse, inventore accusantium sapiente. Hic, doloremque autem dignissimos ullam deleniti, consequatur eveniet ea dolor dicta ratione earum. Provident, dolores. </p>
            </div>
        </div>
    )
}
