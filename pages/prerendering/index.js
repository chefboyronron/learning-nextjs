import Link from 'next/link';

function Prerendering() {
    return (
        <div>
            <h1>Next JS pre-rendering</h1>
            <Link href='/prerendering/users'>
                <a>Users</a>
            </Link>
        </div>
    )
}

export default Prerendering;