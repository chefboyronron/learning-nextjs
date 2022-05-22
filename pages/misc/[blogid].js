import Head from 'next/head';

function Blog( { title, description } ) {
   return (
       <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <h1 className='content'>{title}</h1>
       </>
   ) 
}

export async function getServerSideProps(context){

    const { params } = context;
    const { blogid } = params;

    const response = await fetch(`http://localhost:4000/news/${blogid}`);
    const data = await response.json();

    if( !data.id ) {
        return{
            notFound: true
        }
    }

    return {
        props: {
            title: data.title,
            description: data.description
        }
    }
}

export default Blog;