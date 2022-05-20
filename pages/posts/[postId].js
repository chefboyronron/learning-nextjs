function Post({ post }) {
    return (
        <div>
            <h1>{post.id} {post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        // data is sliced into 3 in the posts index page
        paths: [
            {
                params: { postId: '1'}
            },
            {
                params: { postId: '2'}
            },
            {
                params: { postId: '3'}
            }
        ],
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