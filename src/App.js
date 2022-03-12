import './index.css'
import Todo from './component/Todo'



function App() {
  return (
   <div>
       <h1>My Todos</h1>
    <Todo Title='Learn React'/>
    <Todo Title='Master React'/>
    <Todo Title='Explore the full React Course'/>
   </div>
  );
}

export default App;
