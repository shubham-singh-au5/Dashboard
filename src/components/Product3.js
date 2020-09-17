import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
// import "./index.css";
import React from "react";
import { render } from "react-dom";
import SlideToggle from "react-slide-toggle";

const Number = styled.span`
  font-variant-numeric: tabular-nums;
  min-width: 1em;
  display: inline-block;
  text-align: left;
`;

const Toggle = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: 0px 2px 2px gray;
  background: transparent;
`;

const Product3 = () => (
  <div className="row mt-5">
    <div className="col-md-2 ml-3">

    </div>
    <div className="col-md-9">
      <SlideToggle
        duration={800}
        render={({ toggle, setCollapsibleElement, progress }) => (
          <div
            css={css`
          border: 1px solid;
        `}
          >
            <Toggle onClick={toggle}>
              <h4>Product 3</h4>
        </Toggle>
            <div css={css``} ref={setCollapsibleElement}>
              <div
                css={css`
              padding: 1rem;
              min-height: 20rem;
            `}
                style={{
                  transform: `translateY(${Math.round(20 * (-1 + progress))}px)`
                }}
              >
                <div className='row mt-2'>
                  <div className='col-md-6'>
                    <p className="mt-3"> <strong>50 mm LMS (Low Mechanical Strength) GI Conduit</strong> <br /> <strong>Package</strong>: Electric Pole </p>

                    <p style={{ color: 'grey' }}>DELIVERY DETAILS</p>
                    <label for="exampleInputEmail1">Company Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = "Nirma INC" required />

                    {/* <p className=" mt-4" style={{ color: 'grey' }}>LOCATION1</p> */}
                    <label for="exampleInputEmail1">Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = "Kamal Nath Road, Kurla East, Mumbai - 400024" required />

                    {/* <p className=" mt-4" style={{ color: 'grey' }}>STORE INCHARGE</p>
                                        <label className=" mt-2" for="exampleInputEmail1"> Name  </label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                                        <label className=" mt-2" for="exampleInputEmail1">Contact No.</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /> */}
                  </div>

                  <div className='col-md-6'>
                    <p style={{ visibility: 'hidden' }} className="mt-3"> <strong>25 mm LMS (Low Mechanical Strength) GI Conduit</strong> <br /> <strong>Package</strong>: Electric Pole </p>

                    {/* <p style={{ visibility: 'hidden' }}>DELIVERY DETAILS</p>
                                        <label style={{ visibility: 'hidden' }} for="exampleInputEmail1">Company Name</label>
                                        <input style={{ visibility: 'hidden' }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /> */}

                    {/* <p className=" mt-4" style={{ color: 'grey' }}>LOCATION2</p>
                                        <label for="exampleInputEmail1">Address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /> */}

                    <p className=" mt-4" style={{ color: 'grey' }}>STORE INCHARGE</p>
                    <label className="" for="exampleInputEmail1"> Name  </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = "Nikhil Chindwani" required />

                    <label className=" " for="exampleInputEmail1">Contact No.</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = "8745236415" required/>
                  </div>
                </div>

                {/* <p className="mt-5"><strong>Location1 : Mumbai</strong></p> */}

                <table className="table mt-5">
                  <thead>
                    <tr>
                      <th scope="col">Quantity</th>
                      <th scope="col">Basic Rate</th>
                      <th scope="col">Tax Rate</th>
                      <th scope="col">Unit rate</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">250 Units</th>
                      <td>Rs 30,500</td>
                      <td>Rs 7,200</td>
                      <td>Rs 40,700</td>
                      <td>Rs 70,43,760</td>
                    </tr>
                  </tbody>
                </table>

                <div className="row">
                  <div className="col-md-6">

                  </div>
                  <div className="col-md-6">
                    <p className="ml-5 mt-5"><strong>Freight Rate (Mumbai): </strong> Rs 3000</p>
                  </div>
                </div>

                {/* <p className="mt-5"><strong>Location2 : Palghar</strong></p>

                                <table className="table mt-1">
                                    <thead>
                                        <tr>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Basic Rate</th>
                                            <th scope="col">Tax Rate</th>
                                            <th scope="col">Unit rate</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">250 Units</th>
                                            <td>Rs 30,500</td>
                                            <td>Rs 7,200</td>
                                            <td>Rs 40,700</td>
                                            <td>Rs 70,43,760</td>
                                        </tr>
                                    </tbody>
                                </table> */}

                <div className="row">
                  <div className="col-md-6">

                  </div>
                  <div className="col-md-6">
                    {/* <p className="ml-5"><strong>Freight Rate (Palghar): </strong> Rs 3000</p> */}
                    <p className="ml-5"><strong>Insurance </strong> Rs 10000</p>
                    <p className="ml-5"><strong>Inspection </strong> Rs 5000</p>
                    <p className="ml-5"><strong>Installation & Commission </strong> Rs 7500</p>
                    <h4 className="ml-5 mt-4"><strong>Total: Rs. 70,67,304 </strong></h4>
                  </div>
                </div>

                <div className="row">
                  {/* <div className = "col-md-2">

                                    </div> */}
                  <div className="col-md-9">
                    <h4 className="mt-5"><strong>Terms & Conditions</strong></h4>
                    <p className="mt-3">1. This order is subjected to approval of drawing/GA-GTP/ with valid type test report and vendor approval</p>
                    <p>2. <strong>Proof:</strong> Invoice copy delivery challan, packing list, L.R copy wwith material</p>
                    <p>3. <strong>HO Contact Person:</strong> Prasad - 8427391938</p>
                    <p>4. <strong>Terms of payments: </strong> 100% against PO or Manufacturing clearance</p>
                    <p>5. <strong>Price:</strong> Firm till completion of order</p>
                    <p>6. <strong>Taxes:</strong> GST 18% extra as above</p>
                    <p>7. <strong>Deviation:</strong> GST 18% extra as above</p>
                    <p>8. <strong>Deviation:</strong> GST 18% extra as above</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      />
    </div>
  </div>
);
export default Product3;