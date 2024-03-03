import React, { useState } from "react";
import Pages from "./Pages";
import "./Users.css"; 

const Users = ({ UserDetails,currentPage,setCurrentPage,currentRows}) => {
  
  

  return (
    <div className="user-list">
        <table className="user-table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Location</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((user) => {
            const createdAtDate = new Date(user.created_at);
            const time = `${createdAtDate.getUTCHours()}:${createdAtDate.getUTCMinutes()}:${createdAtDate.getUTCSeconds()}`;
            const date = `${createdAtDate.getUTCDate()}-${createdAtDate.getUTCMonth() + 1}-${createdAtDate.getUTCFullYear()}`;
            return (
              <tr key={user.sno}>
                <td>{user.sno}</td>
                <td>{user.customer_name}</td>
                <td>{user.age}</td>
                <td>{user.contact}</td>
                <td>{user.location}</td>
                <td>{time}</td>
                <td>{date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
  
  
  </div>
  );
};

export default Users;
