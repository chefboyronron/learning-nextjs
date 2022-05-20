import { useRouter } from 'next/router';

function Doc() {
    const router = useRouter();
    const { params = [] } = router.query;

    console.log(params);

    if( params.length === 2 ) {
        return (
            <h1>Viewing docs for feature {params[0]} and concept {params[1]}</h1>
        );
    } else if( params.length === 1 ) {
        return (
            <h1>Viewing docs for feature {params[0]}</h1>
        );
    }

    return <h1>Docs Home Page</h1>;
}

export default Doc;

/**
 * [...params].js = if navigate to /docs it will return 404 page not found
 * solution: enclose the file params with pair brackets "[[...params]].js" to route the page to default return view
 */