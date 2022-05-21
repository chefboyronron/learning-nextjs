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
    const { params, req, res, query } = context;
    // Object: category parameter from URL segments or URL query parameters
    // console.log(query);
    // initial "undefined" the value changed after revisiting page with the value of Set-Cookie
    // console.log(req.headers.cookie); 
    res.setHeader('Set-Cookie', ['name=Ron']);
    const { category } = params;
    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await response.json();

    console.log(`Pre-rendering News Articles for category ${category}`);

    return {
        props: {
            articles: data,
            category
        }
    }
}

export default ArticleListByCategory;