
"use client";

import Navbar from "../../components/Navbar";
import { useFood } from "../../context/FoodContext";

export default function Impact() {
  const { donations } = useFood();

  const totalDonations = donations.length;

  const availableDonations = donations.filter(
    (food) => food.status === "Available"
  ).length;

  const deliveredDonations = donations.filter(
    (food) => food.status === "Delivered"
  ).length;

  const totalMeals = donations
    .filter((food) => food.status === "Delivered")
    .reduce((total, food) => {
      const quantity = parseInt(food.quantity, 10);
      return total + (Number.isNaN(quantity) ? 0 : quantity);
    }, 0);

  const statistics = [
    {
      title: "Total Donations",
      value: totalDonations,
      icon: "🍱",
    },
    {
      title: "Available Donations",
      value: availableDonations,
      icon: "🥗",
    },
    {
      title: "Successfully Delivered",
      value: deliveredDonations,
      icon: "🚚",
    },
    {
      title: "Meals Shared",
      value: totalMeals,
      icon: "❤️",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFFAF0] px-6 py-12">

        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#228B22]">
            Our Community Impact
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Every food donation makes a difference. Together,
            we can reduce food waste and help communities.
          </p>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {statistics.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-8 text-center shadow-md"
            >
              <div className="mb-4 text-4xl">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold text-[#228B22]">
                {item.value}
              </h2>

              <p className="mt-3 font-medium text-gray-600">
                {item.title}
              </p>
            </div>
          ))}

        </section>

        <section className="mx-auto mt-16 max-w-4xl rounded-2xl bg-[#228B22] p-10 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            Small Actions. Big Impact.
          </h2>

          <p className="text-lg">
            Your surplus food can become someone's meal.
            Join FoodtoGood and make a positive difference
            in your community.
          </p>
        </section>

      </main>
    </>
  );
}
