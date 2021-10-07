import React from "react";
import "../App.css";
export const Forms = (props) => {

  
    return (
        <div className="container">
            <h4 id='headStyle'>Add an Entry</h4>
            <form id='myForm'  className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                    <label className="visually-hidden" htmlFor="Name">
                        Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        id="Name"
                        placeholder="Enter Name"
                        required
                    />
                </div>

                <div className="col-12">
                    <label className="visually-hidden" htmlFor="Contact">
                        Name
                    </label>

                    <input
                        type="tel"
                        className="form-control"
                        id="Contact"
                        placeholder="Phone Number"
                        required
                    />
                </div>

                <div className="col-12">
                    <label className="visually-hidden" htmlFor="Description">
                        Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        id="Description"
                        placeholder="Description"
                        required
                    />
                </div>

                <div className="col-12">
                    <button
                        onClick={props.onSub}
                        type="submit"
                        className="btn btn-primary btn-success"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};
