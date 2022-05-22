function EnvVar( {news} ) {
    return (
        <>
            {
                news.map((article) => {
                    return (
                        <div key={article.id}>
                        <h1>{article.title}</h1>
                        </div>
                    )
                })
            }
            {/* NEXT_PUBLIC prefix allow to access variable publicly */}
            <p>Public env variable: {process.env.NEXT_PUBLIC_VALUE}</p>
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/news');
    const data = await response.json();

    // Get environment variable value
    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;

    console.log(user);
    console.log(password);

    return {
        props: {
            news: data
        }
    }
}

export default EnvVar;