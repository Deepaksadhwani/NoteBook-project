import React, { useContext } from "react";
import PortalFormInput from "./PortalFormInput";
import NoteContext from "../contexts/NoteContext";
import Body from "./Body";

const Header = () => {
  const { isOpen, setIsOpen, showing, totalNotes, showBody } =
    useContext(NoteContext);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const showFormBoxHandler = () => {
    setIsOpen(true);
  };

  return (
    <div>
      {isOpen && <PortalFormInput />}
      <h1 className="mt-6 text-center text-3xl font-semibold">NoteBook</h1>
      <form
        onSubmit={submitHandler}
        className="mt-1 flex flex-col items-center"
      >
        <label className="text-gray-700">Search Notes:</label>
        <input
          type="text"
          className="mt-1 max-w-md rounded-lg border border-black px-3 py-2"
        />
        <div className="mt-2">
          <label className="text-gray-700">
            Total Notes: <span className="font-semibold">{totalNotes}</span>
          </label>
        </div>
        <div>
          <label className="text-gray-700">
            Showing: <span className="font-semibold">{showing}</span>
          </label>
        </div>
        <button
          className="mt-2 rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-blue-600"
          type="submit"
          onClick={showFormBoxHandler}
        >
          Add New Notes
        </button>
      </form>
      {showBody && <Body />}
    </div>
  );
};

export default Header;
