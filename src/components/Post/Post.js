

const Post = (props) => {

    return (
        <div onClick={props.setSelected}> 
            <h3> {props.id}</h3>
            <div className="Field">
                {props.title}
            </div>
            <div className="Field">
                {props.author}
            </div>
            <div className="Edit">
                <input
                    type="button"
                    value="Delete"
                    onClick={props.deletePost} />
            </div>
        </div>
    )
}