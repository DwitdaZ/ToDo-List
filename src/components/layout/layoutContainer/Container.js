import React, { Fragment } from "react";

import Input from "./Input";
import List from "./List";

const container = props => {
  return (
    <Fragment>
      <div className="container content-todo">
        <div className="content-area row">
          <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2" />
          <div className="col-md-8 col-xs-8 col-lg-8 col-sm-8 mt-4">
            <h2 className="text-center">
              <strong>ToDo List</strong>
            </h2>
            <Input
              {...props}
              change={props.editTask}
              add={props.addTask}
              cancel={props.cancelAdd}
            />
            <List
              {...props}
              check={props.toggleComplete}
              delete={props.removeTask}
            />
          </div>

          <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2" />
        </div>
      </div>
    </Fragment>
  );
};

export default container;
