import { useState, useEffect } from "react";
import Users from "./Users";
import Find from "./Find";
import axios from 'axios';
import Pages from "./Pages";
const BASE_URL = 'http://localhost:8000';
const App = () => {
  const [UserDetails, setUserDetails] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortOrderTime,setSortOrderTime]=useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;
  

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = UserDetails.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(UserDetails.length / rowsPerPage);
  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setUserDetails(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const FindUser = (FindData) => {
    console.log(`Find Data: ${FindData}`);
    axios.post(`${BASE_URL}/nameSearch`, { name: FindData })
      .then(response => {
        setUserDetails(response.data);
        
      });
  };
  const FindUserByLocation = (FindData) => {
    console.log(`Find Data: ${FindData}`);
    axios.post(`${BASE_URL}/LocationSearch`, { name: FindData })
      .then(response => {
        setUserDetails(response.data);
      });
  };

  const ClearFind = () => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setUserDetails(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const SortByTime= () => {
    const sortedUsers = [...UserDetails].sort((a, b) => {
        const timeA = a.created_at.match(/(\d+:\d+:\d+)/)[1]; 
        const timeB = b.created_at.match(/(\d+:\d+:\d+)/)[1];

          return timeA.localeCompare(timeB);
        });
      
      
          setSortOrderTime("asc");
          setUserDetails(sortedUsers);
};
  const SortByDate = () => {
    const sortedUsers = [...UserDetails].sort((a, b) => {
      const valueA = new Date(a.created_at).toISOString();
      const valueB = new Date(b.created_at).toISOString();

      return valueA.localeCompare(valueB);
    });
    setSortOrder("asc");
    setUserDetails(sortedUsers);
  };
  const Heading={
        marginLeft:"600px",
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
  };
  return (
    <div className="home">
      <div className="top"><h1 style={Heading}>Customer Details</h1>
      <Find FindUser={FindUser} ClearFind={ClearFind} SortByTime={SortByTime} SortByDate={SortByDate} FindUserByLocation={FindUserByLocation} currentPage={currentPage} setCurrentPage={setCurrentPage}/></div>
      <div className="bottom"><Users UserDetails={UserDetails} currentPage={currentPage} setCurrentPage={setCurrentPage}  currentRows={currentRows}/>
      <Pages onPageChange={onPageChange} currentPage={currentPage} totalPages={totalPages} /></div>
    </div>
  );
};

export default App;