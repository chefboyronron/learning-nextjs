import Footer from '../../components/misc/footer'

function About() {
    return <h1 className="content">About</h1>
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