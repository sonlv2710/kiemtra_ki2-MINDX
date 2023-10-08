import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";

const EditTodolist = ({ arrTodo, completedTodo, addTodo }) => {
    const [content, setContent] = useState("");

    const handleClickAdd = (e) => {
        // console.log(content);
        e.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 10000 + 1),
            content: content,
            isCompleted: false,
        };

        addTodo(newTodo);
        setContent("");
        // console.log({ arrTodo });
    };

    const onChange = (e) => {
        const { checked, value } = e.target;

        completedTodo(checked, value);
    };
    return (
        <div>
            <Form
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Form.Item style={{ width: 500 }}>
                    <Input
                        name="content"
                        value={content}
                        placeholder="add details"
                        onChange={(e) => {
                            setContent(e.target.value);
                        }}
                    />
                </Form.Item>
                <Button
                    type="primary"
                    onClick={handleClickAdd}
                //   htmlType="submit"
                >
                    Add
                </Button>
            </Form>

            {arrTodo
                ?.filter((item) => !item.isCompleted)
                .map((item, index) => {
                    return (
                        <div key={index}>
                            <Checkbox
                                onChange={onChange}
                                value={item.id}
                                checked={item.isCompleted}
                            >
                                {item.isCompleted ? (
                                    <b style={{ textDecorationLine: "line-through" }}>
                                        {item.content}
                                    </b>
                                ) : (
                                    <b>{item.content}</b>
                                )}
                            </Checkbox>
                        </div>
                    );
                })}
        </div>
    );
};

export default EditTodolist;