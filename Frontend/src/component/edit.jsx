// eslint-disable-next-line no-unused-vars
import React from "react";

const Edit = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>CRUD Form</h2>

          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <form>
              <div className="row g-3">
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
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
  );
};

export default Edit;
