import React from "react";
import { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";

const AddTodolist = ({ addTodo, arrTodo, completedTodo }) => {
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

            {arrTodo?.map((item, index) => {
                // console.log("ITEM", item);
                // console.log({ arrTodo });
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

export default AddTodolist;