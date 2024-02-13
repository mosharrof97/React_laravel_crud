import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");

  const FormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/create", {
        name: name,
        number: number,
        email: email,
        address: address,
      });
      if (response.data.status === 422) {
        const { errors } = response.data;
        setNameError(errors.name ? errors.name[0] : "");
        setNumberError(errors.number ? errors.number[0] : "");
        setEmailError(errors.email ? errors.email[0] : "");
        setAddressError(errors.address ? errors.address[0] : "");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>CRUD Form</h2>

          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <form onSubmit={FormSubmit}>
              <div className="row g-3">
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                  {nameError && <span className="error">{nameError}</span>}
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="number"
                      onChange={(e) => setNumber(e.target.value)}
                      placeholder="Number"
                    />
                    <label htmlFor="number">Number</label>
                  </div>
                  {numberError && <span className="error">{numberError}</span>}
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  {emailError && <span className="error">{emailError}</span>}
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address"
                    />
                    <label htmlFor="address">Address</label>
                  </div>
                  {addressError && (
                    <span className="error">{addressError}</span>
                  )}
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

export default Form;
