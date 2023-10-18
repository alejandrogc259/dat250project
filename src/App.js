import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";


function App() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const {data}= await fetch('/users');
      console.log(data)
    setUsers(data);
  }



  return (
      <div>
          <h1>Users</h1>
          <p></p>
          <p>{}</p>
      {/*{<ul>
        {users.map((user) => (
            <li key={user.firstName}>{user.firstName}, {user.lastName}, {user.userName}, {user.password}</li>
        ))}
      </ul>}*/}
      </div>
  );
}

export default App;
