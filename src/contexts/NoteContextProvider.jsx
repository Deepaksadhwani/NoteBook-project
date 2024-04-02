import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [totalNotes, setTotalNotes] = useState(0);
  const [showing, setShowing] = useState(0);
  const [showBody, setShowBody] = useState(false);

  const value = {
    isOpen,
    setIsOpen,
    totalNotes,
    showing,
    setDescription,
    setTotalNotes,
    setShowing,
    setTitle,
    title,
    description,
    setShowBody,
    showBody
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

export default NoteContextProvider;
