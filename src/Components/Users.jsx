import { useLoaderData } from "react-router";
import User from "./User";

function Users() {
  const data = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map((data) => (
        <User key={data.id} user={data} />
      ))}
    </div>
  );
}

export default Users;
