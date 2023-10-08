import { Button, Checkbox } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";

const DeleteTodolist = ({ arrTodo, completedTodo, deleteTodo, deleteAll }) => {
    const onChange = (e) => {
        const { checked, value } = e.target;
        completedTodo(checked, value);
    };

    return (
        <div>
            <ul>
                {arrTodo
                    ?.filter((todo) => todo.isCompleted)
                    .map((item, index) => {
                        // console.log("okok", item);
                        return (
                            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                <div>
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
                                <div>
                                    <DeleteOutlined
                                        onClick={() => {
                                            deleteTodo(item.id);
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
            </ul>
            <Button
                style={{ position: 'absolute', left: 550 }}
                type="primary"
                danger
                onClick={() => {
                    deleteAll();
                }}
            >
                Clear All
            </Button>
        </div>
    );
};

export default DeleteTodolist;