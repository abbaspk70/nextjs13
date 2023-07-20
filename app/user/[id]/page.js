
export default async function UserData({user}) {
  return (
    <div>hi
      <h1>from user page : {user.id}</h1>
      <h3>{user.first_name} {user.last_name}</h3>
      <p>{user.email}</p>

    </div>
  );
}
