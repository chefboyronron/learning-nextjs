function News( {data} ) {
    return <h1 className="content">{data}</h1>
}

export async function getStaticProps(context) {
    // recieve preview data from preview API 'api/preview?redirect=/preview/news'
    console.log(context.previewData);
    return {
        props: {
            data: context.preview ? 'List of draft articles' : 'List of published articles'
        }
    }
}

export default News;