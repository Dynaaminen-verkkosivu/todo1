import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

const URL = 'http://localhost/todo/'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setTasks(response.data);
      }).catch(error => {
        alert(error);
      })
    
  }, [])
  return (
    <div className="container">
      <h3>Todo List</h3>
      <ol>
        {tasks?.map(task => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
