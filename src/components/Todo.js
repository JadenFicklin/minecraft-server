import React from "react";

function Todo() {
  return (
    <div className="todo-outer">
      <div className="todo-inner">
        <div className="column-one">
          <h2>Starter list</h2>
          <input type="checkbox" />
          <label> 64 x wood</label>
          <br></br>
          <input type="checkbox" />
          <label> 128 x iron</label>
          <br></br>
          <input type="checkbox" />
          <label> 33 x diamond</label>
          <br></br>
          <input type="checkbox" />
          <label> Pumpkin pie farm</label>
          <br></br>
        </div>
        <div className="column-two">
          <h2>Intermediate list</h2>
          <input type="checkbox" />
          <label> House</label>
          <br></br>
          <input type="checkbox" />
          <label> Nether</label>
          <br></br>
        </div>
        <div className="column-three">
          <h2>Advanced list</h2>
          <input type="checkbox" />
          <label> Fireworks farm</label>
          <br></br>
          <input type="checkbox" />
          <label> XP farm</label>
          <br></br>
          <input type="checkbox" />
          <label> Beacon</label>
          <br></br>
          <input type="checkbox" />
          <label> Villager farm</label>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Todo;
