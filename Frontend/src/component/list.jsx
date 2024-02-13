// eslint-disable-next-line no-unused-vars
import React from "react";

const List = () => {
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>012455871002</td>
              <td>emaolsf@mdo.com</td>
              <td>Dhaka</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
