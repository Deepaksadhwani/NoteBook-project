import { createPortal } from "react-dom";
import NoteContext from "../contexts/NoteContext";
import { useContext } from "react";

const mountedElement = document.getElementById("portal");

const Modal = () => {
  const {
    setIsOpen,
    showing,
    totalNotes,
    setShowing,
    setTotalNotes,
    title,
    description,
    setDescription,
    setTitle,
    setShowBody,
  } = useContext(NoteContext);

  const hideModalHandler = () => {
    setIsOpen(false);
  };

  const addHandler = () => {
    setShowing(showing + 1);
    setTotalNotes(totalNotes + 1);
    setIsOpen(false);
    setShowBody(true);
    hideModalHandler();
  };

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-96 rounded-lg bg-white p-8">
        <h1 className="mb-4 text-xl font-bold">Add New Note</h1>
        <div className="mb-4">
          <label
            htmlFor="noteTitle"
            className="mb-1 block text-sm font-semibold"
          >
            Note Title
          </label>
          <input
            type="text"
            className="w-full rounded border border-gray-400 px-3 py-2"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-semibold"
          >
            Description
          </label>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="w-full rounded border border-gray-400 px-3 py-2"
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            onClick={addHandler}
            className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
          >
            Add to Book
          </button>
          <button
            onClick={hideModalHandler}
            className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    mountedElement,
  );
};

export default Modal;
