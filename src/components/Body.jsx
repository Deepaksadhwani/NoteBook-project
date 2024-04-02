import React, { useContext, useState, useEffect } from "react";
import NoteContext from "../contexts/NoteContext";

const Body = () => {
  const { title, description, setDescription, setTitle } =
    useContext(NoteContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const newData = { title, description };
    setUserData((prev) => [...prev, newData]);
    setDescription("");
    setTitle("");
  }, [title, description]);

  return (
    <div className="rounded-lg bg-gray-100 p-8 shadow-md">
      {userData.map((data, index) => (
        <div key={index}>
          <h1 className="mb-4 text-3xl font-bold">{data.title}</h1>
          <p className="text-lg">{data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Body;
