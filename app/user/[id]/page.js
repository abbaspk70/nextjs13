import Image from "next/image";
export default async function UserData({ user }) {
  return (
    <div className="text-center">
      <h1 className="text-xl">User Information Page</h1>
      <div className="bg-red-100 grid grid-cols-2 gap-4">
      <div className="left bg-red-400">
        <Image src={user.avatar} width='100' height='100' alt="User Image" />
      </div>
      <div className="right bg-red-800">
        <h1>from user page : {user.id}</h1>
        <h3>{user.first_name} {user.last_name}</h3>
        <p>{user.email}</p>
      </div>
    </div>
    </div>

  );
}
