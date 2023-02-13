import React, { useState } from "react";
import "./App.css";
import InputItem from "./comp_ex2/InputItem";

function ItemRow({ item, removeItem }) {
  return (
    <li>
      <p>
        <input type="checkbox" />
        <input type="text" value={item.title} disabled />
        <button
          onClick={(e) => {
            removeItem(item.no);
          }}
        >
          삭제
        </button>
      </p>
    </li>
  );
}



// Redux를 이용하면 해결된다.
function TodoList({ todoList, removeItem }) {
  return (
    <div>
      <ul>
        {todoList.map((item, idx) => {
          return <ItemRow key={item.no} item={item} removeItem={removeItem} />;
        })}
      </ul>
    </div>
  );
}

function App(props) {
  const [todoList, setTodoList] = useState([
    { no: 1, title: "점심 먹기", done: false },
    { no: 2, title: "산책 하기", done: false },
    { no: 3, title: "배운 것 복습하기", done: false },
    { no: 4, title: "내일 수업 예습하기", done: false },
  ]);
  const [noCount, setNoCount] = useState(5);

  function appendItem(newItem) {
    console.log(noCount);
    setTodoList([...todoList, { no: noCount, title: newItem, done: false }]);
    setNoCount(noCount + 1);
  }
  function removeItem(no) {
    var newList = todoList.filter((item, idx) => {
      return item.no != no;
    });
    setTodoList(newList);
  }
  return (
    <>
      <h1>Todo List</h1>
      <InputItem appendItem={appendItem} />
      <hr />
      <TodoList todoList={todoList} removeItem={removeItem} />
    </>
  );
}

export default App;