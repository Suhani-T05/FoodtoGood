
export default function StatCard({ title, value, icon }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
      <div className="mb-3 text-3xl">
        {icon}
      </div>

      <h2 className="text-3xl font-bold text-[#228B22]">
        {value}
      </h2>

      <p className="mt-2 font-medium text-gray-600">
        {title}
      </p>
    </div>
  );
}
