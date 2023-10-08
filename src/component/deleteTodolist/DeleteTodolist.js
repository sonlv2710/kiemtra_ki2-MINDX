import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react'
import React from 'react'
import { DeleteOutlined } from '@ant-design/icons';


const DeleteTodolist = () => {

    const [addTodolist, setAddTodolist] = useState(() => {
        const storageDetail = JSON.parse(localStorage.getItem('details'))
        return storageDetail
    });



    const onChange = (e) => {
        // console.log(`checked = ${e.target.checked}`);
    };
    const handleDelete = (id) => {
        let index = addTodolist.findIndex(item => item.id === id)
        if (index !== -1) {
            setAddTodolist(addTodolist.splice(index, 1))
        }
    }

    const handleClickAll = ({ id }) => {
        setAddTodolist(addTodolist.filter((todo) => todo.id !== id));
    }
    return (
        <div>
            <ul>
                {
                    addTodolist.map((edit, index) => {
                        // console.log('xem edit', edit);
                        return <div>
                            <Checkbox style={{ marginRight: 400 }} onChange={onChange}><li key={index}>{edit}</li></Checkbox> <DeleteOutlined onClick={() => { handleDelete(edit.id) }} />
                        </div>

                    })
                }
            </ul>
            <Button
                type='primary'
                danger
                style={{ marginLeft: 450 }}
                onClick={handleClickAll}
            >Delete All
            </Button>
        </div>
    )
}

export default DeleteTodolist