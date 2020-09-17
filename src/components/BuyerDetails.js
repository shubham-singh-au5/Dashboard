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

const BuyerDetails = () => (
  <div className = "row mt-5">
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
          <h4>Buyer Details</h4>
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
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = "Nirma" required/>

                    <label for="exampleInputEmail1">Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = "Kamal Nath Road, Kurla East, Mumbai - 400024" required/>

                    <label for="exampleInputEmail1">GSTIN   </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = "22145783CV1" required/>

                    <p className = "mt-3">BILLING DETAILS</p>
                    <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck1" />
                    <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
                    </div>
                </div>

                <div className = 'col-md-6'>
                    <label style = {{visibility: 'hidden'}} for="exampleInputEmail1">GSTIN   </label>
                    <input style = {{visibility: 'hidden'}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

                    <label for="exampleInputEmail1"> Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = "Kaydee Russell" required/>

                    <label for="exampleInputEmail1">Contact No.</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = "8532146578" required/>

                    
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

export default BuyerDetails;