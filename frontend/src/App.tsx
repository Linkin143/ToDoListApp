import Addtodo from "./components/Addtodo";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";


const App = () => {
  return (
    <main>
     <h1> TODO List App</h1>
     <Navbar />
     <Addtodo />
     <Todos />
    </main>
   
  )
}

export default App