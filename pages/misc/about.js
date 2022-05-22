import Head from 'next/head'
import Footer from '../../components/misc/footer'

function About() {
    return (
        <>
            <Head>
                <title>About Page</title>
                <meta name="description" content="Learning NextJS about page" />
            </Head>
            <h1 className="content">About</h1>
        </>
    )
}

About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}

export default About;