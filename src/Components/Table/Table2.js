//Deal pop up sccreen

import React from "react";
import { render } from "react-dom";
import Button from '../../Components/Button/Button';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import DeleteBin6LineIcon from "remixicon-react/DeleteBin6LineIcon"
import './Table2.css'
import SaveLine from "remixicon-react/SaveLineIcon"

export default class Table2 extends React.Component {
  state = {
    rows: [{}]
  };
  handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
    
  };
  handleAddRow = () => {
    const item = {
      Amount: "",
      Value: "",
      Frequency:"",
      Quantity: "",
      Date:""

    };

    this.setState({
      rows: [...this.state.rows, item]
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows]
    rows.splice(idx, 1)
    this.setState({ rows })
  }
  
  render() {
    return (
      <div>
        <div className="container">
          <div className="row-format">
            <div className="col-format">
              <table
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th style={{fontSize:"20px"}}> Amount </th>
                    <th style={{fontSize:"20px"}}> Value </th>
                    <th style={{fontSize:"20px"}}> Frequency </th>
                    <th style={{fontSize:"20px"}}> Quantity </th>
                    <th style={{fontSize:"20px"}}> Date </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr>
                      <td>{idx}</td>
                      <td>
                      <Tooltip title={"Amount"} arrow>
                        <input
                          type="text"
                          name="Amount"
                          placeholder="USD ($)"
                          value={this.state.rows[idx].Amount}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                        </Tooltip>
                      </td>
                      <td>
                      <Tooltip title={"Value"} arrow>
                        <input
                          type="text"
                          name="Value"
                          placeholder="Enter Value"
                          value={this.state.rows[idx].Value}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                        </Tooltip>
                      </td>
                      <td>
                      <Tooltip title={"Frequency"} arrow>
                        <input
                          type="text"
                          name="Frequency"
                          placeholder="One time"
                          value={this.state.rows[idx].Frequency}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                        </Tooltip>
                      </td>
                      <td>
                      <Tooltip title={"Quantity"} arrow>
                        <input
                          type="text"
                          name="Quantity"
                          placeholder="1"
                          value={this.state.rows[idx].Quantity}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                        </Tooltip>
                      </td>
                      <td>
                      <Tooltip title={"Date"} arrow>
                        <input
                          type="date"
                          name="Date"
                          placeholder="Select a date"
                          value={this.state.rows[idx].Date}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                        </Tooltip>
                      </td>
                      <td>
                        <button
                                                 onClick={this.handleRemoveSpecificRow(idx)}
                        >
                          
                          <DeleteBin6LineIcon size={20}/>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button 
                      onClick={this.handleAddRow} >
               + new payment
    
              </button>
              <div >
            <button className= 'deal-cancel-button'
            > Cancel </button>
            <Button
              type = "submit"
              text = " Save"
              shape = "square"
              size = "xsmall"
              color = "primary"/>
              
            
          </div>
    
            </div>
          </div>
        </div>
      </div>
    );
  }
}