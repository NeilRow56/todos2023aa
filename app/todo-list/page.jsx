import Card from "@/components/Card";
import prisma from "@/lib/prisma";

async function getTodoLists() {
  const data = await prisma.todo.findMany({
    select: {
      id: true,
      todo: true,
      date: true,
    },
  });
  return data;
}

export default async function page() {
  const todoLists = await getTodoLists();

  return (
    <div className="space-y-4 p-4 text-slate-800">
      <h1 className="p-4 text-2xl font-bold">Todo List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card todoLists={todoLists} />
      </div>
    </div>
  );
}
