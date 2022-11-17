import "./Post.css"

const Post = (props) => {

    return (
        <div class="post"> 
            <h5> 
                {props.title}
            </h5>
            <div className="Field">
                {props.author}
            </div>
        </div>
    )
}

export default Post