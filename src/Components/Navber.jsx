import { NavLink } from "react-router-dom"


function Navber() {
  return (
<div className="navbar bg-base-100 px-5">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="flex gap-2 font-bold ">
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/users" >Users</NavLink>
      <NavLink to="/form" >Form</NavLink>
      <NavLink to="/about" >About</NavLink>
    </ul>
  </div>
</div>
  )
}

export default Navber
