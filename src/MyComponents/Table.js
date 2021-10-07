import React from "react";
import { Link } from "react-router-dom";

export const Table = (props) => {
  const mgin = {
    margin: "5px",
  };

  console.log("Inside Table component", props.Detai);
  return (
    <div className="container my-3">
      <table className="table table-striped table-bordered table-responsive">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Description</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {props.Detai.map((item) => (
            <tr key={item.Id}>
              <th scope="row" id="ID">
                {item.Id}
              </th>
              <td>{item.Name}</td>
              <td>{item.Contact}</td>
              <td id="descColor">{item.Description}</td>
              <td>
                <Link to="/Lor">
                  <button
                    style={mgin}
                    type="button"
                    className="btn btn-secondary"
                  >
                    Details
                  </button>
                </Link>
                <button
                  style={mgin}
                  type="button"
                  onClick={() => {
                    props.onDel(item.Id);
                  }}
                  className="btn btn-secondary btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/*
  document.getElementById("descColor").addEventListener("mouseover",mouseOver);
  document.getElementById("descColor").addEventListener("mouseout",mouseOut);

  function mouseOver() {
    document.getElementById("descColor").style.color = "blue";
  }

  function mouseOut() {
    document.getElementById("descColor").style.color = "black";
  }
  */
