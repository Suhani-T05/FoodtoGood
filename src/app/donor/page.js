
"use client";

import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Button from "../../../components/Button";
import { useFood } from "../../../context/FoodContext";

export default function AddDonation() {
  const { addDonation } = useFood();

  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    description: "",
    location: "",
    deadline: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowConfirmation(true);
  }

  function confirmDonation() {
    addDonation(formData);
    setShowConfirmation(false);
    setMessage("Your food donation has been added successfully!");

    setFormData({
      name: "",
      quantity: "",
      description: "",
      location: "",
      deadline: "",
    });

    setTimeout(() => {
      window.location.href = "/donor/my-donations";
    }, 1500);
  }

  return (
    <main className="min-h-screen bg-[#FFFAF0]">
      <Navbar />

      <section className="px-5 py-12">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="mb-3 text-center text-3xl font-bold text-[#228B22]">
            Add Food Donation
          </h1>

          <p className="mb-8 text-center text-gray-600">
            Share your surplus food with people who need it.
          </p>

          {message && (
            <p className="mb-5 rounded-lg bg-green-100 p-4 text-center text-green-700">
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block font-semibold text-[#263238]">
                Food Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Example: Vegetable Rice"
                required
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-[#228B22]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#263238]">
                Quantity
              </label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Example: 20 meals"
                required
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-[#228B22]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#263238]">
                Food Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the food..."
                required
                rows={4}
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-[#228B22]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#263238]">
                Pickup Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter pickup location"
                required
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-[#228B22]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#263238]">
                Pickup Deadline
              </label>
              <input
                type="text"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                placeholder="Example: Today, 8 PM"
                required
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-[#228B22]"
              />
            </div>

            <Button type="submit" block>
              Submit Donation
            </Button>
          </form>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
            <h2 className="mb-3 text-2xl font-bold text-[#228B22]">
              Confirm Donation
            </h2>

            <p className="mb-6 text-gray-600">
              Are you sure you want to add this food donation?
            </p>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setShowConfirmation(false)}
                className="w-1/2 rounded-lg border border-gray-300 py-3 font-semibold text-gray-700"
              >
                Cancel
              </button>

              <div className="w-1/2">
                <Button onClick={confirmDonation} block>
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
