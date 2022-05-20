import Link from 'next/link';

function PostList( {posts} ) {
    return (
        <div>
            {
                posts.map((post) => {
                    return(
                        <div key={post.id}>
                            <h2>
                                <Link href={`/posts/${post.id}`}>
                                    <a>{post.id} {post.title}</a>
                                </Link>
                            </h2>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return {
        props: {
            posts: data.splice(0, 3)
        }
    }
}

export default PostList;