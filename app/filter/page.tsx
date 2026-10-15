import ElectiveFilter from "@/components/ElectiveFilter";

export default function FilterPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Фильтр курсов</h1>
      <ElectiveFilter />
    </div>
  );
}