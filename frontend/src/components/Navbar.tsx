import { Link, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams] = useSearchParams();
  let todosDatahere = searchParams.get("todo");

  return (
    <nav>
      <Link to="/" className={todosDatahere===null? "active" : ""}>All</Link>
      <Link to="/?todo=active" className={todosDatahere==="active"? "active": ""}>Active</Link>
      <Link to="/?todo=completed" className={todosDatahere==="complted"? "active":""}>Completed</Link>
     
    </nav>
  )
}

export default Navbar