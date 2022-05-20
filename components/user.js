function User({ user }) {
    return (
        <>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </>
    );
}

export default User;