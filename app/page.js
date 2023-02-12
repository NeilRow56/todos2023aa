import FormToDo from "@/components/FormToDo";

export default function Home() {
  return (
    <section className="container mx-auto text-center">
      <h1 className="mt-24 text-4xl font-bold text-teal-700">Form ToDo</h1>
      <div className="grid grid-cols-1 place-items-center">
        <FormToDo />
      </div>
    </section>
  );
}
