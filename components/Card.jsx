"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Card = ({ todoLists }) => {
  const router = useRouter();
  async function deleteTodo(id) {
    const res = await fetch(`/api/todos/${id}`, { method: "DELETE" });
    const data = await res.json();

    console.log(data);
    router.refresh();
  }

  return todoLists.map((todoList) => (
    <div
      key={todoList.id}
      className="relative m-4 border-spacing-4 border-white bg-slate-200 p-4"
    >
      <button
        onClick={() => deleteTodo(todoList.id)}
        className="absolute top-4 right-4"
      >
        X
      </button>
      <div className="space-y-2">
        <h1 className="text-2xl">{todoList.todo}</h1>
        <p>{todoList.date}</p>
      </div>
      <div className="mt-4 text-right">
        <Link
          href={`/todo-list/${todoList.id}`}
          type="submit"
          className="primary-button "
        >
          Detail
        </Link>
      </div>
    </div>
  ));
};

export default Card;
