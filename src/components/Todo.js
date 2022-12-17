import React from "react";

function Todo() {
  return (
    <div className="todo-outer">
      <div className="todo-inner">
        <div className="column-one">
          <h2>Starter list</h2>
          <input type="checkbox" />
          <label> I have a bike</label>
          <br></br>
          <input type="checkbox" />
          <label> I have a bike</label>
        </div>
        <div className="column-two">
          <h2>Intermediate list</h2>
          <input type="checkbox" />
          <label> I have a bike</label>
          <br></br>
          <input type="checkbox" />
          <label> I have a bike</label>
        </div>
        <div className="column-three">
          <h2>Advanced list</h2>
          <input type="checkbox" />
          <label> I have a bike</label>
          <br></br>
          <input type="checkbox" />
          <label> I have a bike</label>
        </div>
      </div>
    </div>
  );
}

export default Todo;
