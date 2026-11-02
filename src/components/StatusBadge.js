
export default function StatusBadge({ status }) {
  const statusColors = {
    Available: "bg-green-100 text-green-700",
    Requested: "bg-orange-100 text-orange-700",
    Accepted: "bg-blue-100 text-blue-700",
    Delivered: "bg-emerald-100 text-emerald-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
        statusColors[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}
