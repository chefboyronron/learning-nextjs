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
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
        </div>
    )
}

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