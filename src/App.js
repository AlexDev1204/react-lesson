import React, { Fragment, useState, useEffect } from "react";

import "./App.css";
import { Header } from "./components/header";
import { Wrapper } from "./components/wrapper";
import Table from "./components/table";

const App = () => {
  const memoryTask = localStorage.getItem("tasks");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState(memoryTask ? JSON.parse(memoryTask) : []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(list));
  }, [list]);

  const onAddTask = () => {
    const task = { name, description, id: Math.round(Math.random() * 1000) };
    setDescription("");
    setName("");
    const _list = [...list];
    _list.push(task);
    setList(_list);
  };

  const onDeleteTask = (id) => {
    const _list = [...list];
    const index = _list.findIndex((task) => task.id === id);
    _list.splice(index, 1);
    setList(_list);
  };

  const onEditDescription = (e, id) => {
    const _list = [...list];
    const index = _list.findIndex((task) => task.id === id);
    _list[index].description = e.target.value;
    setList(_list);
  };

  const renderTasks = () =>
    list.map(({ name, description, id }, i) => (
      <div key={id}>
        <h5>{i + 1 + "." + name}</h5>
        <input
          className="input"
          value={description}
          onChange={(e) => onEditDescription(e, id)}
        />
        <button onClick={() => onDeleteTask(id)}>delete</button>
        <hr />
      </div>
    ));

  return (
    <Fragment>
      {/* <Header />
      <Wrapper>
        <h1>To do list</h1>
        <div className="flex">
          <div className="container">
            <input
              className="name"
              placeholder="Task name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="description"
              placeholder="description"
            />
            <button onClick={onAddTask} disabled={!name || !description}>
              Add
            </button>
          </div>
          <div className="tasklist">{renderTasks()}</div>
        </div>
      </Wrapper> */}
      <Table name="NNN" />
    </Fragment>
  );
};

export default App;
