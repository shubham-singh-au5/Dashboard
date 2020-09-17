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

const SellerDetails = () => (
  <div className = "row">
      <div className = "col-md-2 ml-3">
        
      </div>
      <div className = "col-md-9">
      <SlideToggle
    duration={800}
    render={({ toggle, setCollapsibleElement, progress }) => (
      <div
        css={css`
          border: 1px solid;
        `}
      >
        <Toggle onClick={toggle}>
          <h4>Seller Details</h4>
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
            <div className = 'row mt-2'> 
                <div className = 'col-md-6'>
                    <label for="exampleInputEmail1">Company Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = "RT Enterprises" required/>

                    <label for="exampleInputEmail1">Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = "Kamal Nath Road, Kurla East, Mumbai - 400024" required/>

                    <label for="exampleInputEmail1">GSTIN   </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = "2224578634A12" required/>
                </div>

                <div className = 'col-md-6'>
                    <label style = {{visibility: 'hidden'}} for="exampleInputEmail1">GSTIN   </label>
                    <input style = {{visibility: 'hidden'}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

                    <label for="exampleInputEmail1">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = "Rohit Sharma" required/>

                    <label for="exampleInputEmail1">Contact No.</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = "8754789632" required/>
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

export default SellerDetails;