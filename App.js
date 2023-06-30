import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [user, setUser] = useState([]);

  const loadUser = async () => {
    console.log("wait...");
    const response = await fetch("https://reqres.in/api/users?page=1");
    const json = await response.json();
    setUser(json.data);
  };
  return (
    <React.Fragment>
      <div class="navigation">
        <div class="headers">
          <h1>LET'S GROW MORE</h1>
          <button onClick={loadUser}>Get User Data</button>
        </div>
      </div>
      <div class="container">
        {user.map((item) => (
          <section key={item.id}>
            <img src={item.avatar} alt={item.first_name} /><br/>
            <div class="info">
            <b>First Name:</b> {item.first_name}<br/>
            <b>Last Name:</b> {item.last_name}<br/>
            <b>Mail:</b> {item.email}<br></br>
            </div>
          </section>
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
