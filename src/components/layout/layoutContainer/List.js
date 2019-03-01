import React, { Fragment } from "react";

const list = props => {
  const taskList = props.tasks.map((el, index) => {
    let check;
    let status;
    if (el.isComplete) {
      check = true;
      status = "complete";
    } else {
      check = false;
    }

    return (
      <li key={index} className="list-group-item checkbox">
        <div className="row">
          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <label>
              <input
                id={index}
                type="checkbox"
                value=""
                className=""
                checked={check}
                onChange={props.check}
              />
            </label>
          </div>
          <div
            className={`col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${status}`}
          >
            {el.task}
          </div>
          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
            <a className="">
              <i
                key={index}
                className="delete-icon fas fa-trash-alt fa-lg"
                onClick={props.delete.bind(this, el)}
              />
            </a>
          </div>
        </div>
      </li>
    );
  });

  return (
    <Fragment>
      <ul className="list-group" id="taskList">
        {taskList}
      </ul>
    </Fragment>
  );
};

export default list;
