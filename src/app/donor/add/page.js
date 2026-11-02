
"use client";

import { useState } from "react";
import { useFood } from "../../../context/FoodContext";

export default function AddDonation() {
  const { addDonation } = useFood();

  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [deadline, setDeadline] = useState("");

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setShowConfirmation(true);
  }

  function confirmDonation() {
    addDonation({
      name: foodName,
      quantity: quantity,
      description: description,
      location: location,
      deadline: deadline,
      donor: "Food Donor",
    });

    setShowConfirmation(false);
    setMessage("Your food donation has been submitted successfully!");

    setFoodName("");
    setQuantity("");
    setDescription("");
    setLocation("");
    setDeadline("");
  }

  return (
    <main className="min-h-screen bg-[#FFFAF0] p-6">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-3xl font-bold text-[#228B22]">
          Donate Surplus Food
        </h1>

        <p className="mb-8 text-gray-600">
          Share your extra food and help someone in need.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block font-semibold">Food Name</label>
            <input
              type="text"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              placeholder="Example: Rice and Dal"
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Quantity</label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Example: 20 meals"
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Food Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the food and its condition"
              required
              className="w-full rounded-lg border p-3"
              rows="3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Pickup Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter pickup address"
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Pickup Deadline
            </label>
            <input
              type="datetime-local"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#228B22] p-3 font-semibold text-white hover:bg-green-700"
          >
            Submit Donation
          </button>
        </form>

        {message && (
          <div className="mt-5 rounded-lg bg-green-100 p-4 text-center text-green-800">
            {message}
            <button
              onClick={() => setMessage("")}
              className="ml-3 font-bold"
            >
              ×
            </button>
          </div>
        )}
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
            <h2 className="mb-4 text-2xl font-bold text-[#228B22]">
              Confirm Donation
            </h2>

            <p className="mb-6 text-gray-700">
              Are you sure you want to submit this food donation?
            </p>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setShowConfirmation(false)}
                className="flex-1 rounded-lg border border-gray-300 p-3"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={confirmDonation}
                className="flex-1 rounded-lg bg-[#228B22] p-3 text-white"
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
