// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
  const [datas, setDatas] = useState([]);
  const [edit, setEdit] = useState([]);
  const [name1, setName] = useState("");
  const [number1, setNumber] = useState("");
  const [email1, setEmail] = useState("");
  const [address1, setAddress] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/all");
      setDatas(response.data.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const editData = async (id) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/edit/${id}`);

      const data = response.data.data;
      setEdit(data);
      setName(data.name);
      setNumber(data.number);
      setEmail(data.email);
      setAddress(data.address);
      // setEdit(response.data.data);
      console.log(response.data.data);
      fetchData();
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const FormSubmit = async (id) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/update/${id}`, {
        name: name1,
        number: number1,
        email: email1,
        address: address1,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // Delete Data
  const dataDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/delete/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };

  return (
    <>
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
              {datas.length > 0 ? (
                datas.map((data) => (
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
                      <button
                        className="btn btn-success mx-1"
                        data-bs-toggle="modal"
                        data-bs-target="#EditModal"
                        onClick={() => editData(data.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => dataDelete(data.id)}
                      >
                        Delete
                      </button>
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

      {/* Model */}

      <div
        className="modal fade"
        id="EditModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container my-5">
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <h2>CRUD Form</h2>

                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                      <form onSubmit={FormSubmit(edit.id)}>
                        <div className="row g-3">
                          <div className="col-md-12">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name1}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                              />
                              <label htmlFor="name">Name</label>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-floating">
                              <input
                                type="number"
                                className="form-control"
                                id="number"
                                value={number1}
                                onChange={(e) => setNumber(e.target.value)}
                                placeholder="Number"
                              />
                              <label htmlFor="number">Number</label>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-floating">
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email1}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                              />
                              <label htmlFor="email">Email</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                id="address"
                                value={address1}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Address"
                              />
                              <label htmlFor="address">Address</label>
                            </div>
                          </div>

                          <div className="col-12">
                            <button className="btn btn-primary " type="submit">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
