import { nanoid } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { StyledForm, StyledButton, StyledInput } from "./styled";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();
    if (trimmedNewTaskContent === "") {
      return;
    };

    dispatch(addTask({
      content: trimmedNewTaskContent,
      done: false,
      id: nanoid()
    }));
    setNewTaskContent("")
  };

  return (
    <StyledForm
      onSubmit={onFormSubmit}
    >
      <StyledInput
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
        required
        autoFocus
      />
      <StyledButton>
        Dodaj zadanie
      </StyledButton>
    </StyledForm>
  );
};

export default Form;