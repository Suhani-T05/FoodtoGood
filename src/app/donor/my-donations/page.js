
"use client";

import { useFood } from "../../../context/FoodContext";

export default function MyDonations() {
  const { donations } = useFood();

  return (
    <main className="min-h-screen bg-[#FFFAF0] p-8">

      <h1 className="mb-2 text-3xl font-bold text-[#228B22]">
        My Donations
      </h1>

      <p className="mb-8 text-gray-600">
        Track your food donations and share the pickup OTP
        with the volunteer when they collect the food.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {donations.length === 0 ? (
          <p className="text-gray-600">
            No donations available yet.
          </p>
        ) : (
          donations.map((food) => (
            <div
              key={food.id}
              className="rounded-xl bg-white p-6 shadow"
            >
              <h2 className="mb-3 text-xl font-bold text-[#263238]">
                {food.name}
              </h2>

              <p className="mb-2 text-gray-600">
                Quantity: {food.quantity}
              </p>

              <p className="mb-2 text-gray-600">
                Location: {food.location}
              </p>

              <p className="mb-4 text-gray-600">
                Status: {food.status}
              </p>

              <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-center">
                <p className="mb-2 text-sm font-medium text-gray-600">
                  Your Pickup OTP
                </p>

                <p className="text-3xl font-bold tracking-widest text-[#228B22]">
                  {food.otp || "OTP unavailable"}
                </p>

                <p className="mt-2 text-xs text-gray-500">
                  Share this code with the volunteer at collection.
                </p>
              </div>
            </div>
          ))
        )}

      </div>

    </main>
  );
}
