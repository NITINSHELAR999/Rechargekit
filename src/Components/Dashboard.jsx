// DashboardPage.js
import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";

function Dashboard() {
  const [userData, setUserData] = useState(null);
  console.log(userData);
  useEffect(() => {
    // You can make another API call here to fetch user data
    axios.get("https://reqres.in/api/users?page=2").then((response) => {
      setUserData(response.data.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Dashboard</h1>
      {userData && (
        <div>
          <nav className="navbar_allData">
            <h2>Id</h2>
            <h2>FirstName</h2>
            <h2>LastName</h2>
            <h2>EmailAddress</h2>
            <h2>Photograph</h2>
          </nav>
          {userData.map((datavalues, index) => (
            <div key={index}>
              <div className="all_api_data">
                <div>{datavalues.id}</div>
                <div>{datavalues.first_name}</div>
                <div>{datavalues.last_name}</div>
                <div>{datavalues.email}</div>
                <div>
                  <img src={datavalues.avatar} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
