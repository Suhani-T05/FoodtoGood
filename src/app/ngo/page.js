
"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import FoodCard from "../../components/FoodCard";
import StatCard from "../../components/StatCard";
import Button from "../../components/Button";
import { useFood } from "../../context/FoodContext";

export default function NGODashboard() {
  const { donations, requestDonation } = useFood();

  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedFood, setSelectedFood] = useState(null);
  const [message, setMessage] = useState("");

  const availableCount = donations.filter(
    (food) => food.status === "Available"
  ).length;

  const requestedCount = donations.filter(
    (food) => food.status === "Requested"
  ).length;

  const deliveredCount = donations.filter(
    (food) => food.status === "Delivered"
  ).length;

  const locations = [
    "All",
    ...new Set(donations.map((food) => food.location)),
  ];

  const filteredDonations = donations.filter((food) => {
    const matchesSearch =
      food.name.toLowerCase().includes(search.toLowerCase()) ||
      food.description.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      locationFilter === "All" || food.location === locationFilter;

    const matchesStatus =
      statusFilter === "All" || food.status === statusFilter;

    return matchesSearch && matchesLocation && matchesStatus;
  });

  function handleRequest() {
    if (!selectedFood) return;

    requestDonation(selectedFood.id);
    setSelectedFood(null);
    setMessage("Food request submitted successfully!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  const myRequests = donations.filter(
    (food) => food.status === "Requested"
  );

  return (
    <main className="min-h-screen bg-[#FFFAF0]">
      <Navbar />

      <section className="px-6 py-10 md:px-12">
        <h1 className="mb-2 text-3xl font-bold text-[#228B22]">
          NGO Dashboard
        </h1>

        <p className="mb-8 text-gray-600">
          Find available food donations and request food for your community.
        </p>

        {message && (
          <div className="mb-6 rounded-lg bg-green-100 p-4 font-medium text-green-700">
            {message}
          </div>
        )}

        {/* Statistics */}
        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Available Donations"
            value={availableCount}
            icon="🍱"
          />

          <StatCard
            title="Requested Donations"
            value={requestedCount}
            icon="📋"
          />

          <StatCard
            title="Delivered Donations"
            value={deliveredCount}
            icon="✅"
          />
        </div>

        {/* Search and Filters */}
        <h2 className="mb-5 text-2xl font-bold text-[#263238]">
          Available Food Donations
        </h2>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-[#228B22]"
          />

          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white p-3"
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location === "All" ? "All Locations" : location}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white p-3"
          >
            <option value="All">All Statuses</option>
            <option value="Available">Available</option>
            <option value="Requested">Requested</option>
            <option value="Accepted">Accepted</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>

        {/* Donation Cards */}
        {filteredDonations.length === 0 ? (
          <p className="rounded-xl bg-white p-8 text-center text-gray-500">
            No food donations found.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredDonations.map((food) => (
              <FoodCard
                key={food.id}
                name={food.name}
                quantity={food.quantity}
                description={food.description}
                location={food.location}
                deadline={food.deadline}
                status={food.status}
              >
                {food.status === "Available" && (
                  <Button
                    onClick={() => setSelectedFood(food)}
                    block
                  >
                    Request Food
                  </Button>
                )}
              </FoodCard>
            ))}
          </div>
        )}

        {/* My Requests */}
        <section className="mt-14">
          <h2 className="mb-5 text-2xl font-bold text-[#263238]">
            My Requests
          </h2>

          {myRequests.length === 0 ? (
            <p className="rounded-xl bg-white p-6 text-gray-500">
              You haven't requested any food yet.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {myRequests.map((food) => (
                <FoodCard
                  key={food.id}
                  name={food.name}
                  quantity={food.quantity}
                  description={food.description}
                  location={food.location}
                  deadline={food.deadline}
                  status={food.status}
                />
              ))}
            </div>
          )}
        </section>
      </section>

      {/* Request Confirmation Modal */}
      {selectedFood && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
            <h2 className="mb-3 text-2xl font-bold text-[#228B22]">
              Confirm Food Request
            </h2>

            <p className="mb-6 text-gray-600">
              Do you want to request{" "}
              <strong>{selectedFood.name}</strong>?
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setSelectedFood(null)}
                className="w-1/2 rounded-lg border border-gray-300 py-3 font-semibold text-gray-700"
              >
                Cancel
              </button>

              <div className="w-1/2">
                <Button onClick={handleRequest} block>
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
