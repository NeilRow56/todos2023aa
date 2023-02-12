import React from "react";
import FormInput from "./FormInput";

const FormToDo = () => {
  return (
    <form className="w-[80vw] space-y-4 bg-gray-200 p-4 md:w-[40vw]">
      <div className="flex flex-col gap-4">
        <label className="text-left text-2xl font-bold text-slate-800">
          Todo
        </label>
        <FormInput type="text" name="todo" placeholder="add your task" />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-left text-2xl font-bold text-slate-800">
          Todo
        </label>
        <FormInput name="date" type="date" />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-left text-2xl font-bold text-slate-800">
          Todo
        </label>
        <FormInput name="time" type="time" />
      </div>
      <div>
        <button type="submit" className="primary-button ">
          Add
        </button>
      </div>
    </form>
  );
};

export default FormToDo;
