import React, { Component, Fragment } from "react";
import "./App.css";

import Navbar from "./layoutContainer/Navbar";
import Container from "./layoutContainer/Container";

var taskList = [
  { task: "Prep' for hackathon", isComplete: false, id: 0 },
  { task: "Buy doubleShot coffee", isComplete: false, id: 0 },
  { task: "Renew Plurasite account", isComplete: false, id: 0 }
];

export default class App extends Component {
  state = {
    tasks: [],
    task: "",
    validTask: false
  };

  componentWillMount() {
    this.loadTasks();
  }

  loadTasks = () => {
    let localTasks = JSON.parse(sessionStorage.getItem("TASKS"));
    let temp = [...taskList];

    // loads tasks from local state, or populates default data
    if (!localTasks) {
      this.setState({
        ...this.state,
        tasks: temp
      });
    } else {
      this.setState({
        ...this.state,
        tasks: localTasks
      });
    }
  };

  handleChange = evt => {
    const key = evt.target.name;
    let val = evt.target.value;

    if (val !== "") this.setState({ [key]: val, validTask: true });
    else this.setState({ validTask: false });
  };

  addTaskHandler = evt => {
    evt.preventDefault();
    const { tasks, task } = this.state;
    let update = [...tasks];
    let newTask = { task: task, isComplete: false, id: 0 };
    update.push(newTask);
    this.setState({
      tasks: update,
      task: ""
    });
    document.getElementById("addTask").value = "";
  };

  cancelTaskHandler = evt => {
    evt.preventDefault();
    this.setState({
      task: ""
    });
    document.getElementById("addTask").value = "";
  };

  completeTaskHandler = evt => {
    let taskId = evt.target.id;
    let tasks = [...this.state.tasks];
    tasks[taskId].isComplete = !this.state.tasks[taskId].isComplete;
    this.setState({
      ...this.state,
      tasks: tasks
    });
  };

  removeTaskHandler = evt => {
    this.setState(
      prev => ({
        tasks: prev.tasks.filter(el => el !== evt)
      }),
      () => {
        console.log(`${evt} removed`, this.state.tasks);
      }
    );
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <Container
          {...this.state}
          editTask={this.handleChange}
          addTask={this.addTaskHandler}
          cancelAdd={this.cancelTaskHandler}
          toggleComplete={this.completeTaskHandler}
          removeTask={this.removeTaskHandler}
        />
      </Fragment>
    );
  }
}
