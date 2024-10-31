import { Link } from "react-router-dom"


function User({user}) {
  const {name,email,id} = user
  return (
    <div
    className="p-10 text-center rounded-xl border border-green-600"
  >
    <h2>{name}</h2>
    <p>{email}</p>
    <Link className=" underline text-blue-500" to={`/user/${id}`} >Detels</Link>
  </div>
  )
}

export default User
