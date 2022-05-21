import Link from 'next/link'

function ArticleList( {articles} ) {
    return (
        <div>
            {
                articles.map((article) => {
                    return(
                        <div key={article.id}>
                            <h3>
                                <Link href={`articles/${article.id}`}>
                                    <a>{article.id} {article.title}</a>
                                </Link>
                            </h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export async function getStaticProps() {
    console.log('Generating / Regenerating ArticleList');
    const response = await fetch('http://localhost:4000/articles');
    const data = await response.json();
    console.log(data);
    return {
        props: {
            articles: data
        },
        revalidate: 30,
    }

}

export default ArticleList;