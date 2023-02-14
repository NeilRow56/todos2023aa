import React from "react";

const Card = () => {
  return (
    <div className="relative bg-slate-200 p-4">
      <button className="absolute top-4 right-4">X</button>
      <div className="space-y-2">
        <h1 className="text-2xl">ToDo</h1>
        <p>20-11-2022</p>
      </div>
      <div className="mt-4">
        <button type="submit" className="primary-button ">
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
