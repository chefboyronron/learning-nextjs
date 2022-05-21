function Article( {article} ) {
    return (
        <div>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { articleId: '1' }
            }
        ],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`http://localhost:4000/articles/${params.articleId}`);
    const data = await response.json();

    if( !data.id ) {
        return{
            notFound: true
        }
    }

    return {
        props: {
            article: data
        }
    }
}

export default Article;