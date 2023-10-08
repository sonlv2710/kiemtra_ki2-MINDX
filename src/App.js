import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import AddTodolist from "./component/addTodolist/AddTodolist";
import DeleteTodolist from "./component/deleteTodolist/DeleteTodolist";
import EditTodolist from "./component/edittodolist/EditTodolist";
import "./App.css";

// const onChange = (key) => {
//   console.log(key);
// };

const App = () => {
  const [arrTodo, setArrayTodo] = useState([
    // {
    //   id: "",
    //   content: "",
    //   isCompleted: false,
    // },
  ]);

  const completedTodo = (check, value) => {
    const index = arrTodo.findIndex((item) => item.id === value);
    if (index !== -1) {
      arrTodo[index] = { ...arrTodo[index], isCompleted: check };
    }
    setArrayTodo([...arrTodo]);
    localStorage.setItem("details", JSON.stringify(arrTodo));
  };
  const addTodo = (item) => {
    let arrNew = [...arrTodo];
    arrNew.push(item);
    setArrayTodo(arrNew);
    localStorage.setItem("details", JSON.stringify(arrNew));
  };

  const deleteTodo = (id) => {
    let arrNew = [...arrTodo];
    let index = arrNew.findIndex((item) => item.id === id);
    if (index !== -1) {
      arrNew.splice(index, 1);
    }

    setArrayTodo(arrNew);
    localStorage.setItem("details", JSON.stringify(arrNew));
  };

  const deleteAll = () => {
    let arrNew = [...arrTodo];
    let arrFilter = arrNew.filter((item) => item.isCompleted !== true);
    setArrayTodo(arrFilter);
    localStorage.setItem("details", JSON.stringify(arrFilter));
  };
  useEffect(() => {
    if (localStorage.getItem("details")) {
      setArrayTodo(JSON.parse(localStorage.getItem("details")));
    }
  }, []);
  const items = [
    {
      key: "1",
      label: "ALL",
      children: (
        <AddTodolist
          arrTodo={arrTodo}
          completedTodo={completedTodo}
          addTodo={addTodo}
        />
      ),
    },
    {
      key: "2",
      label: "Active",
      children: (
        <EditTodolist
          arrTodo={arrTodo}
          completedTodo={completedTodo}
          addTodo={addTodo}
        />
      ),
    },
    {
      key: "3",
      label: "Completed",
      children: (
        <DeleteTodolist
          deleteTodo={deleteTodo}
          completedTodo={completedTodo}
          arrTodo={arrTodo}
          deleteAll={deleteAll}
        />
      ),
    },
  ];
  return (
    <div className="appTodolist">
      <h1 style={{ textAlign: 'center' }}>Todolist</h1>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};
export default App;