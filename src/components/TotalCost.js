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

const TotalCost = () => (
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
                            <h4>Total Cost</h4>
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
                                <table class="table mt-3">
                                    <thead>
                                        <tr>
                                            <th scope="col"> Product Name</th>
                                            <th scope="col">No. of Locations</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"> 25 mm LMS GI Conduit </th>
                                            <td>2</td>
                                            <td>450 Units</td>
                                            <td>Rs 70,67,304</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"> 32 mm LMS GI Conduit </th>
                                            <td>1</td>
                                            <td>250 Units</td>
                                            <td> Rs 70,67,304 </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"> 50 mm LMS GI Conduit </th>
                                            <td>1</td>
                                            <td>400 Units</td>
                                            <td> Rs 70,67,304 </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class = "row">
                                    <div className = "col-md-6"> 
                                        <p> <strong>Total in words:</strong> <br/>Two Crore, Seventy Lakh, Sixty Seven Thousand, Three Hundred and Four Indian Rupees</p>
                                    </div>
                                    <div className = "col-md-6"> 
                                        <p className = "ml-5"><strong>Grand Total: 2,70,67,304</strong></p>
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

export default TotalCost;