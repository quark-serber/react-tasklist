import './App.css';
import AddTaskModal from "./Modal/AddTaskModal"
import React, { useState } from "react";

import { default as data } from "./MOCK_DATA.json";
import TaskList from "./TaskList/TaskList";

function App() {
  const [modalActive, setModalActive] = useState(false);


  return (
    <div className="App">
        <main>
            <button className='open-btn' onClick={() => setModalActive(true)}>Добавить запись</button>
        </main>
        <TaskList data={data}/>
      <AddTaskModal active={modalActive} setActive={setModalActive}/>
    </div>
  );
}

export default App;
