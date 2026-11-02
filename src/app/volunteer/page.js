
"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import FoodCard from "../../components/FoodCard";
import StatCard from "../../components/StatCard";
import Button from "../../components/Button";
import { useFood } from "../../context/FoodContext";

export default function VolunteerDashboard() {
  const { donations, acceptDonation, completeDonation } = useFood();

  const [selectedFood, setSelectedFood] = useState(null);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const availableTasks = donations.filter(
    (food) => food.status === "Requested"
  );

  const acceptedTasks = donations.filter(
    (food) => food.status === "Accepted"
  );

  const completedTasks = donations.filter(
    (food) => food.status === "Delivered"
  );

  function handleAccept(id) {
    acceptDonation(id);
    setMessage("Pickup task accepted successfully!");
    setMessageType("success");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  function handleVerifyOtp() {
    if (!enteredOtp.trim()) {
      setMessage("Please enter the OTP.");
      setMessageType("error");
      return;
    }

    const success = completeDonation(selectedFood.id, enteredOtp);

    if (success) {
      setMessage("OTP verified! Delivery completed successfully.");
      setMessageType("success");
      setSelectedFood(null);
      setEnteredOtp("");
    } else {
      setMessage("Incorrect OTP. Please try again.");
      setMessageType("error");
    }

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  return (
    <main className="min-h-screen bg-[#FFFAF0]">
      <Navbar />

      <section className="px-6 py-10 md:px-12">
        <h1 className="mb-2 text-3xl font-bold text-[#228B22]">
          Volunteer Dashboard
        </h1>

        <p className="mb-8 text-gray-600">
          Accept pickup tasks, collect food and deliver it to people in need.
        </p>

        {/* Success and Error Messages */}
        {message && (
          <div
            className={`mb-6 rounded-lg p-4 font-medium ${
              messageType === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Statistics */}
        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Available Pickup Tasks"
            value={availableTasks.length}
            icon="📦"
          />

          <StatCard
            title="Accepted Tasks"
            value={acceptedTasks.length}
            icon="🚚"
          />

          <StatCard
            title="Completed Deliveries"
            value={completedTasks.length}
            icon="✅"
          />
        </div>

        {/* Available Tasks */}
        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-bold text-[#263238]">
            Available Pickup Tasks
          </h2>

          {availableTasks.length === 0 ? (
            <p className="rounded-xl bg-white p-6 text-gray-500">
              No pickup tasks are currently available.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {availableTasks.map((food) => (
                <FoodCard
                  key={food.id}
                  name={food.name}
                  quantity={food.quantity}
                  description={food.description}
                  location={food.location}
                  deadline={food.deadline}
                  status={food.status}
                >
                  <Button
                    onClick={() => handleAccept(food.id)}
                    block
                  >
                    Accept Pickup
                  </Button>
                </FoodCard>
              ))}
            </div>
          )}
        </section>

        {/* Accepted Tasks */}
        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-bold text-[#263238]">
            My Accepted Tasks
          </h2>

          {acceptedTasks.length === 0 ? (
            <p className="rounded-xl bg-white p-6 text-gray-500">
              You haven't accepted any pickup tasks yet.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {acceptedTasks.map((food) => (
                <FoodCard
                  key={food.id}
                  name={food.name}
                  quantity={food.quantity}
                  description={food.description}
                  location={food.location}
                  deadline={food.deadline}
                  status={food.status}
                >
                  <Button
                    onClick={() => {
                      setSelectedFood(food);
                      setEnteredOtp("");
                    }}
                    block
                  >
                    Verify OTP
                  </Button>
                </FoodCard>
              ))}
            </div>
          )}
        </section>

        {/* Completed Tasks */}
        <section>
          <h2 className="mb-5 text-2xl font-bold text-[#263238]">
            Completed Deliveries
          </h2>

          {completedTasks.length === 0 ? (
            <p className="rounded-xl bg-white p-6 text-gray-500">
              No deliveries completed yet.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {completedTasks.map((food) => (
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

      {/* OTP Verification Modal */}
      {selectedFood && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
            <h2 className="mb-3 text-2xl font-bold text-[#228B22]">
              Verify Delivery OTP
            </h2>

            <p className="mb-5 text-gray-600">
              Enter the OTP provided by the food donor for{" "}
              <strong>{selectedFood.name}</strong>.
            </p>

            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="Enter 6-digit OTP"
              value={enteredOtp}
              onChange={(e) =>
                setEnteredOtp(e.target.value.replace(/\D/g, ""))
              }
              className="mb-6 w-full rounded-lg border border-gray-300 p-3 text-center text-xl tracking-widest outline-none focus:border-[#228B22]"
            />

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setSelectedFood(null);
                  setEnteredOtp("");
                }}
                className="w-1/2 rounded-lg border border-gray-300 py-3 font-semibold text-gray-700"
              >
                Cancel
              </button>

              <div className="w-1/2">
                <Button onClick={handleVerifyOtp} block>
                  Verify OTP
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
