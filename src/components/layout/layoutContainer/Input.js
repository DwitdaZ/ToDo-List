import React, { Fragment } from "react";

const input = props => {
  const validEntry = !props.validTask ? "btn-secondary" : "btn-primary";
  return (
    <Fragment>
      <div className="row my-5">
        <div className="form-group col-2 p-0">
          <button
            className={`btn ${validEntry} btn-block px-1`}
            onClick={props.add}
            disabled={!props.validTask}
          >
            Add
          </button>
        </div>
        <div className="form-group col-8">
          <input
            type="text"
            name="task"
            placeholder="New Task"
            className="form-control"
            id="addTask"
            onChange={props.change}
          />
        </div>
        <div className="form-group col-2 p-0">
          <button
            className="btn btn-danger btn-block px-1"
            onClick={props.cancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default input;
