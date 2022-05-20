function Post({ post }) {
    return (
        <div>
            <h1>{post.id} {post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const paths  = data.map(post=>{
        return {
            params: {
                postId: `${post.id}`
            }
        }
    });

    return {
        
        // V1 - Manual adding of static paths
        // paths: [
        //     {
        //         params: { postId: '1'}
        //     },
        //     {
        //         params: { postId: '2'}
        //     },
        //     {
        //         params: { postId: '3'}
        //     }
        // ],
        
        // V2 - Dynamically render static paths
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();

    return {
        props: {
            post: data
        }
    }
}

export default Post;