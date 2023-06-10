import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoActionTypes } from "../../store/todo/todoReducer";
import { Button, TextField } from "@mui/material";

const TodoList = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const dispatch = useDispatch();

  const changeEditValue = (e) => {
    setEditValue(e.target.value);
  };

  const deleteHandler = () => {
    dispatch({ type: todoActionTypes.DELETE_TODO, payload: todo.id });
  };



  return (
    <div>
      {isEditing ? (
        <EditBlock>
          <TextField
            id="standard-basic"
            variant="standard"
            type="text"
            value={editValue}
            onChange={changeEditValue}
          />
         
        </EditBlock>
      ) : (
        <BlockTodo>
          <div>
           
            <Title done={todo.completed}>{todo.title}</Title>
          </div>

          <div>
            <Button
              size="small"
              variant="contained"
              color="success"
              onClick={deleteHandler}
              style={{ height: "25px" }}
            >
              Delete
            </Button>
          </div>
        </BlockTodo>
      )}
    </div>
  );
};

export default TodoList;

const Title = styled.span`
  text-decoration: ${(props) => (props.done ? "line-through" : "")};
`;

const BlockTodo = styled.div`
  width: 350px;
  height: 40px;
  background-color: #b05959;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 5px 10px;
  color: #857373;
  font-weight: 500;
`;

const EditBlock = styled.div`
  width: 350px;
  height: 40px;
  align-items: center;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #00dc0f;
  display: flex;
  justify-content: space-between;
`;
