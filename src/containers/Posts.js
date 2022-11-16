


const Posts = (props) => {

    const posts = props.posts.map(post => {
        return <Post
            id={post.id}
            title={post.title}
            author={post.author}
            key={post.id}
            deletePost={() => { props.deleteProduct(post.id) }}
            setSelected= { ()=> { props.setSelected(post.id) }}
        />
    });
    return posts;


}

export default Products;