import { css } from "@emotion/core";
import styled from "@emotion/styled";
// import "./index.css";
import React from "react";
// import { render } from "react-dom";
import SlideToggle from "react-slide-toggle";

// const Number = styled.span`
//   font-variant-numeric: tabular-nums;
//   min-width: 1em;
//   display: inline-block;
//   text-align: left;
// `;

const Toggle = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: 0px 2px 2px gray;
  background: transparent;
`;

const SellerDetails = () => {

  const [state, setState] = React.useState({
    company: "RT Enterprises",
    address: "Kamal Nath Road, Kurla East, Mumbai - 400024",
    gst: "23145789A123",
    name: "Rohit Sharma",
    contact: '8547123695'
  })

  const { company,
    address,
    gst,
    name,
    contact } = state

    let handleChange = (e) => {
      // console.log(e.target.value)
      console.log({
        ...state,
         [e.target.name]: e.target.value,
     })
      setState({
         ...state,
          [e.target.name]: e.target.value,
      })
    }


  return (
    <div className="row">
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
                  <div className='row mt-2'>
                    <div className='col-md-6'>
                      <label for="exampleInputEmail1">Company Name</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={company} name="company" onChange = {handleChange} required />

                      <label for="exampleInputEmail1">Address</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={address} name="address" onChange = {handleChange} required />

                      <label for="exampleInputEmail1">GSTIN   </label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value= {gst} name="gst" onChange = {handleChange} required />
                    </div>

                    <div className='col-md-6'>
                      <label style={{ visibility: 'hidden' }} for="exampleInputEmail1">GSTIN   </label>
                      <input style={{ visibility: 'hidden' }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                      <label for="exampleInputEmail1">Name</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value= {name} name="name" onChange = {handleChange} required />

                      <label for="exampleInputEmail1">Contact No.</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value= {contact} name="contact" onChange = {handleChange} required />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  )
};

export default SellerDetails;