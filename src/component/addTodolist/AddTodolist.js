import React from 'react'
import { useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const AddTodolist = () => {


    const [edit, setEdit] = useState({
        Id: '',
        content: '',
        completed: false,
    });
    const [addTodolist, setAddTodolist] = useState([]);



    const handleClickAdd = () => {
        setEdit({
            ...edit,
            Id: 1,
            content: edit.content,
            completed: false,
        }
        )
        setAddTodolist(
            [...addTodolist,
                edit
            ]
            // const newDetail = [...prev, edit];
            // // save local
            // const jsondetail = JSON.stringify(newDetail)
            // localStorage.setItem('details', jsondetail);

            // return newDetail
        )
        console.log(edit);
        localStorage.setItem('details', JSON.stringify(addTodolist))
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
        // console.log(`checked = ${e.target.checked}`);
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
                        return <div>
                            <Checkbox
                                onChange={onChange}
                                value={edit.id}
                                checked={edit.completed}
                            ><li key={index}>{edit.content}</li></Checkbox>
                        </div>
                    })
                }
            </ul>
        </div>
    )
}

export default AddTodolist