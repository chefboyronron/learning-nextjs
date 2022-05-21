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
    console.log(`Regenerating article ${params.articleId}`);
    const response = await fetch(`http://localhost:4000/articles/${params.articleId}`);
    const data = await response.json();

    console.log(data);

    if( !data.id ) {
        return{
            notFound: true,
            revalidate: 10
        }
    }

    return {
        props: {
            article: data
        },
        revalidate: 10
    }
}

export default Article;