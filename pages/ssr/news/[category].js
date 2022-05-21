function ArticleListByCategory( {articles, category} ) {
    return (
        <div>
            <h2>Showing news for category <i>{category}</i></h2>
            {
                articles.map((article) => {
                    return (
                        <div key={article.id}>
                            <h3>{article.title} | {article.category}</h3>
                            <p>{article.description}</p>
                        </div>
                    )
                    
                })
            } 
        </div>
    )
}

export async function getServerSideProps(context) {
    const { params } = context;
    const { category } = params;
    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await response.json();

    return {
        props: {
            articles: data,
            category
        }
    }
}

export default ArticleListByCategory;