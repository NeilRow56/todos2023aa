import React from "react";

const Card = ({ todoLists }) => {
  return todoLists.map((todoList) => (
    <div
      key={todoList.id}
      className="relative m-4 border-spacing-4 border-white bg-slate-200 p-4"
    >
      <button className="absolute top-4 right-4">X</button>
      <div className="space-y-2">
        <h1 className="text-2xl">{todoList.todo}</h1>
        <p>{todoList.date}</p>
      </div>
      <div className="mt-4">
        <button type="submit" className="primary-button ">
          Add
        </button>
      </div>
    </div>
  ));
};

export default Card;
