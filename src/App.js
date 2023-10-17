import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://gnwggtxuvtfwyfnxomqe.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdud2dndHh1dnRmd3lmbnhvbXFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NTUzODQsImV4cCI6MjAxMzEzMTM4NH0.ff0PBQ0wFLMrKKEIhR8Lskk3AczCXo2SwE0QuZ81Xxs")

function App() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const {data}= await supabase.from("_User").select();
    setUsers(data);
  }



  return (
      <div>
          <h1>Users</h1>
          <p></p>
          <p>USER</p>
      {<ul>
        {users.map((user) => (
            <li key={user.firstName}>{user.firstName}, {user.lastName}, {user.userName}, {user.password}</li>
        ))}
      </ul>}
      </div>
  );
}

export default App;
