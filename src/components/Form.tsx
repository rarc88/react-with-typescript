import React from "react";
import useNewSubForm from "../hooks/useNewSubForm";
import { Sub } from "../types";

interface Props {
  addNewSub: (newSub: Sub) => void;
}

export const Form = ({ addNewSub }: Props) => {
  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewSub(inputValues);
    dispatch({ type: "clear" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="nick"
        placeholder="nick"
        value={inputValues.nick}
        required
      />
      <input
        onChange={handleChange}
        type="number"
        name="subMonths"
        placeholder="subMonths"
        value={inputValues.subMonths}
        required
      />
      <input
        onChange={handleChange}
        type="text"
        name="avatar"
        placeholder="avatar"
        value={inputValues.avatar}
        required
      />
      <textarea
        onChange={handleChange}
        name="description"
        placeholder="description"
        value={inputValues.description}
      />
      <button>Save</button>
    </form>
  );
};
