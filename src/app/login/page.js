
"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Login() {
  const [role, setRole] = useState("Donor");

  function handleLogin(e) {
    e.preventDefault();

    if (role === "Donor") {
      window.location.href = "/donor";
    } else if (role === "NGO") {
      window.location.href = "/ngo";
    } else {
      window.location.href = "/volunteer";
    }
  }

  return (
    <main className="min-h-screen bg-[#FFFAF0]">
      <Navbar />

      <section className="flex justify-center px-5 py-16">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="text-center text-3xl font-bold text-[#228B22]">
            Welcome to FoodtoGood
          </h1>

          <p className="mb-8 mt-3 text-center text-[#263238]">
            Choose your role to continue
          </p>

          <form onSubmit={handleLogin}>
            <label className="mb-2 block font-semibold text-[#263238]">
              Select your role
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mb-6 w-full rounded-lg border border-gray-300 p-3"
            >
              <option value="Donor">Food Donor</option>
              <option value="NGO">NGO</option>
              <option value="Volunteer">Volunteer</option>
            </select>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#228B22] py-3 font-semibold text-white hover:bg-[#1b701b]"
            >
              Continue
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Good Food. Good People. Good Purpose.
          </p>
        </div>
      </section>
    </main>
  );
}
