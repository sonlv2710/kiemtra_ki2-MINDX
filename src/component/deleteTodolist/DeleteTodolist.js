import { Button, Checkbox } from 'antd';
import { useEffect, useState } from 'react'
import React from 'react'
import { DeleteOutlined } from '@ant-design/icons';


const DeleteTodolist = () => {

    const localJson = JSON.parse(localStorage.getItem("details"))

    useEffect(() => {
        setArrayTodo(localJson)
    }, [localJson])

    const [arrayTodo, setArrayTodo] = useState(localJson);
    const onChange = () => {

    }

    return (
        <div>
            <ul>
                {
                    arrayTodo?.map((item, index) => {
                        console.log('okok', item);
                        return <div>
                            <Checkbox
                                onChange={onChange}
                                checked={item.completed}
                                value={item.id}
                            >
                                <li key={index}>{item.content}</li>
                            </Checkbox>
                            <DeleteOutlined />

                        </div>

                    })
                }
            </ul>
            <Button>Clear All</Button>
        </div>
    )
}

export default DeleteTodolist