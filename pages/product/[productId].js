import { useRouter } from 'next/router';

function ProductDetails() {
    const router = useRouter();
    const priductId = router.query.productId;
    return <h1>Details about product { priductId }</h1>
}

export default ProductDetails;