import { useLoaderData } from "react-router";

function UserDetels() {
  const user = useLoaderData();
  console.log(user);
  const { name, email, phone, website, address } = user;
  return (
    <div className="flex flex-col justify-center items-center h-[300px]">
      <div className="">
        <h4>Name: {name}</h4>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
        <p>Address: {address.city}</p>
      </div>
    </div>
  );
}

export default UserDetels;
