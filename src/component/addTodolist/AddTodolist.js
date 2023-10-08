import React from 'react'
import { useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const AddTodolist = () => {


    const [edit, setEdit] = useState({
        content: '',
    });
    const [addTodolist, setAddTodolist] = useState([]);

    console.log('rrrr', addTodolist);

    const handleClickAdd = () => {
        setEdit({
            ...edit,
            content: edit.content,
        })
        const newTodo = {
            id: Math.floor(Math.random() * 10000 + 1),
            content: edit.content,
            completed: false
        };

        const arrayUpdate = [
            ...addTodolist,
            newTodo
        ]


        localStorage.setItem('details', JSON.stringify(arrayUpdate))
        setAddTodolist(arrayUpdate)
        setEdit('')

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEdit({
            ...edit,
            [name]: value
        })
    }

    const onChange = (e) => {
        const { checked, value } = e.target;
        console.log(checked);
        let index = addTodolist.findIndex(item => item.id === value);
        if (index !== -1) {
            addTodolist[index] = { ...addTodolist[index], completed: checked }
            setAddTodolist(addTodolist)
            console.log('mmmmm', addTodolist);
        }
    };
    return (
        <div>
            <Form
                onFinish={handleClickAdd}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Form.Item
                    style={{ width: 500 }}
                >
                    <Input
                        name='content'
                        value={edit.content}
                        placeholder="add details"
                        onChange={handleChange}

                    />
                </Form.Item>
                <Button
                    type="primary"
                    // onClick={handleClickAdd}
                    htmlType='submit'
                >
                    Add
                </Button>
            </Form>
            <ul>
                {
                    addTodolist.map((edit, index) => {
                        console.log('okok', edit);
                        return <div key={index}>
                            <Checkbox
                                onChange={onChange}
                                value={edit.id}
                            // checked={edit.completed}
                            >
                                <li>
                                    {edit.completed ? <b style={{ textDecorationLine: 'line-through' }}>{edit.content}</b> : <b >{edit.content}</b>}
                                </li>
                            </Checkbox>
                        </div>
                    })
                }
            </ul>
        </div>
    )
}

export default AddTodolist