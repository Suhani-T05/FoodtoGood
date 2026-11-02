
import StatusBadge from "./StatusBadge";

export default function FoodCard({
  name,
  quantity,
  description,
  location,
  deadline,
  status = "Available",
  children,
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h3 className="mb-3 text-xl font-bold text-[#228B22]">
        {name}
      </h3>

      <p className="mb-2 text-gray-600">Quantity: {quantity}</p>
      <p className="mb-2 text-gray-600">Description: {description}</p>
      <p className="mb-2 text-gray-600">Location: {location}</p>
      <p className="mb-4 text-gray-600">Pickup Deadline: {deadline}</p>

      <StatusBadge status={status} />

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
