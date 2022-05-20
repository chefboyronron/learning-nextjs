import User from "../../components/user";

function UserList({ users }) {
    return(
        <div>
            <h1>List of Users</h1>
                <table border="1">
                    <thead>
                        <tr style={{textAlign: "left"}}>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user) =>{
                            return(
                                <tr key={user.id}>
                                    <User user={user} />
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
        </div>
    )
}

/**
 * NOTE: getStaticProps()
 * 1. Run only on the server side
 * 2. Including API keys won't show in the browsers
 * 3. Use only for pre-rendering not for client-side data fetching
 * 4. Should return an object and should contain "props" key which is also an object
 * 
 * - Please see implementation below
 */
 

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: {
            users: data
        }
    }
}

export default UserList;
