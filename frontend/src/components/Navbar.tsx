import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="">All</Link>
      <Link to="/?todo=active" className="">Active</Link>
      <Link to="/?todo=completed" className="">Completed</Link>
     
    </nav>
  )
}

export default Navbar