import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Buscar gifs"
        onChange={handleInputChange}
      />
    </form>
  );
};
