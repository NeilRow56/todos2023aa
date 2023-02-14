"use client";
import { useRouter } from "next/navigation";

import React from "react";
import FormInput from "./FormInput";

const FormToDo = () => {
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: formData.get("todo"),
        date: formData.get("date"),
        time: formData.get("time"),
      }),
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
    e.target.reset();
    router.push("/todo-list");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[80vw] space-y-4 bg-gray-200 p-4 md:w-[40vw]"
    >
      <div className="flex flex-col gap-4">
        <label className="mb-4 text-left text-2xl font-bold text-slate-800">
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
