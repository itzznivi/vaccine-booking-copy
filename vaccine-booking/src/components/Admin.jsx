import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Admin.css";

const Admin = () => {
  const [data, setData] = useState({
    name: "",
    location: "",
    slots: "",
  });

  

  const [data1, setData1] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await axios.get("/getDetails");
        setData1(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, []);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const showNextArrow = data1.length > endIdx;
  const showPrevArrow = currentPage > 1;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const addData = async () => {
    const { name, location, slots } = data;
    const res = await axios.post("/addData", {
      name,
      location,
      slots,
    });
    window.location.reload();
    console.log(res);
  };

  const deleteRecord = async (id) => {
    try {
      const res = await axios.post("/deleteRecord", {
        id: id,
      });
      console.log(res.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addData();
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          onKeyDown={handleKeyPress}
        />
        <input
          type="text"
          placeholder="Location"
          onChange={(e) => setData({ ...data, location: e.target.value })}
          onKeyDown={handleKeyPress}
        />
        <input
          type="text"
          placeholder="Slots"
          onChange={(e) => setData({ ...data, slots: e.target.value })}
        />
        <button onClick={addData}>ADD</button>
      </div>

      <div className="table-div">
        <table className=" table">
          <thead>
            <tr className="">
              <th className=" ">SI.NO</th>
              <th className=" ">ID</th>
              <th className=" ">Name</th>
              <th className=" ">Location</th>
              <th className=" ">Slot</th>
              <th className=" ">Action</th>
            </tr>
          </thead>
          <tbody>
            {data1.slice(startIdx, endIdx).map((record, index) => (
              <tr key={record.id} className={index % 2 === 0 ? "" : " "}>
                <td className=" ">{index + 1 + startIdx}</td>
                <td className=" ">{record.id}</td>
                <td className=" ">{record.name}</td>
                <td className=" ">{record.location}</td>
                <td className=" ">{record.slots}</td>
                <td className=" ">
                  <button className=" " onClick={() => deleteRecord(record.id)}>
                    Delete Center
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="">
          {showPrevArrow && (
            <button className="  " onClick={handlePrevPage}>
              Previous Page
            </button>
          )}

          {showNextArrow && (
            <button className=" " onClick={handleNextPage}>
              Next Page
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
