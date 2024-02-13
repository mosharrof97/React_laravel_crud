// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/all");
      setDatas(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  console.log(datas.data);

  return (
    <div className="container">
      <div className="my-5">
        <h2>Contact List</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SL</th>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {datas.data.length > 0 ? (
              datas.data.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.number}</td>
                  <td>{data.email}</td>
                  <td>{data.address}</td>
                  <td>
                    <a className="btn btn-primary" href="#">
                      View
                    </a>
                    <a className="btn btn-success mx-1" href="#">
                      Edit
                    </a>
                    <a className="btn btn-danger" href="#">
                      Delete
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
