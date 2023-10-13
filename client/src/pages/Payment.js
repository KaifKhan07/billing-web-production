import React from "react";
import { Link } from "react-router-dom";
import "../styles/payment.css";

const Payment = () => {
  return (
    <>
      <div className="payment container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12">
            <div className="card mx-auto">
              <p className="heading">PAYMENT DETAILS</p>
              <form className="card-details">
                <div className="form-group mb-0">
                  <p className="text-warning mb-0">Card Number</p>
                  <input
                    type="text"
                    name="card-num"
                    placeholder="1234 5678 9012 3457"
                    size="17"
                    id="cno"
                    minLength="19"
                    maxLength="19"
                    required
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    width="64px"
                    height="60px"
                    alt="Visa Logo"
                  />
                </div>

                <div className="form-group">
                  <p className="text-warning mb-0">Cardholder's Name</p>{" "}
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    size="17"
                    required
                  />
                </div>
                <div className="form-group pt-2">
                  <div className="row d-flex">
                    <div className="col-sm-4">
                      <p className="text-warning mb-0">Expiration</p>
                      <input
                        type="text"
                        name="exp"
                        placeholder="MM/YYYY"
                        size="7"
                        id="exp"
                        minLength="7"
                        maxLength="7"
                      />
                    </div>
                    <div className="col-sm-3">
                      <p className="text-warning mb-0">Cvv</p>
                      <input
                        type="password"
                        name="cvv"
                        placeholder="&#9679;&#9679;&#9679;"
                        size="1"
                        minLength="3"
                        maxLength="3"
                      />
                    </div>
                    <div className="col-sm-5 margin-class">
                      {/* <button type="button" className="btn btn-primary">
                        <i className="fas fa-arrow-right px-3 py-2"></i>
                      </button> */}
                        <Link type="submit" className="btn btn-primary custom-menu" to="/thankyou">Pay Now</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
