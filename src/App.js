import React from 'react';
import { Tabs } from 'antd';
import AddTodolist from './component/addTodolist/AddTodolist';
import DeleteTodolist from './component/deleteTodolist/DeleteTodolist';
import EditTodolist from './component/edittodolist/EditTodolist';
import "./App.css"

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'ALL',
    children: <AddTodolist />,
  },
  {
    key: '2',
    label: 'Active',
    children: <EditTodolist />,
  },
  {
    key: '3',
    label: 'Completed',
    children: <DeleteTodolist />,
  },
];
const App = () => {
  return (
    <div className='appTodolist'>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}
export default App;