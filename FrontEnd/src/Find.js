import React, { useState } from "react";
import Users from './Users';

const Find = ({ FindUser, ClearFind, SortByTime, SortByDate, FindUserByLocation, currentPage, setCurrentPage }) => {
  const [FindData, setFindData] = useState("");
  const [FindType, setFindType] = useState("name");
  const [sortType, setSortType] = useState(""); 

  const onFind = () => {
    if (FindType === "name") {
      FindUser(FindData);
    } else {
      FindUserByLocation(FindData);
    }
    setCurrentPage(1);
  };

  const onClearFind = () => {
    setFindData("");
    setFindType("name");
    setSortType("");
    ClearFind();
  };

  const onSort = (e) => {
    setSortType(e.target.value);
    if (e.target.value === "time") {
      SortByTime();
    } else if (e.target.value === "date") {
      SortByDate();
    } else {
      onClearFind();
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "120px",
  };
  const select = {
    minHeight: "33px",
  };
  const boxStyle = {
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    background: "#fff",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", 
  };
  const buttonStyle = {
    background: "#878787",
    color: "#fff",
    padding: "10px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  const inputtext = {
    minHeight: "30px",
    marginLeft: "5px",
  };
  return (
    <div style={containerStyle}>
      <div style={boxStyle} className="Find">
        <label htmlFor="FindType">Filter:</label>
        <select id="FindType" name="FindType" className="select" style={select} onChange={(e) => setFindType(e.target.value)}>
          <option value="name">Name</option>
          <option value="location">Location</option>
        </select>
        <label htmlFor="FindInput"></label>
        <input
          type="text"
          id="FindInput"
          name="FindInput"
          placeholder="Filter Data"
          className="Find-txt"
          style={inputtext}
          value={FindData}
          onChange={(e) => setFindData(e.target.value)}
        />

        <button style={buttonStyle} onClick={onFind}>
          Search
        </button>

        <button style={buttonStyle} onClick={onClearFind}>
          Clear Search
        </button>

        <select id="sortType" name="sortType" className="select" onChange={onSort} style={select}>
          <option value="">Sort By</option>
          <option value="time">Time</option>
          <option value="date">Date</option>
        </select>
      </div>
    </div>
  );
};

export default Find;
