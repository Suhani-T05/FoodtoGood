
"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    setRole(localStorage.getItem("foodtogoodRole"));
  }, []);

  function handleLogout() {
    localStorage.removeItem("foodtogoodRole");
    window.location.href = "/";
  }

  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 bg-white px-8 py-5 shadow-sm">
      <a href="/" className="text-2xl font-bold text-[#228B22]">
        FoodtoGood
      </a>

      <div className="flex flex-wrap items-center gap-6 font-medium text-[#263238]">
        {role && (
          <>
            {role === "Donor" && (
              <>
                <a href="/donor" className="hover:text-[#228B22]">Dashboard</a>
                <a href="/donor/add" className="hover:text-[#228B22]">Add Donation</a>
                <a href="/donor/my-donations" className="hover:text-[#228B22]">My Donations</a>
              </>
            )}

            {role === "NGO" && (
              <a href="/ngo" className="hover:text-[#228B22]">Dashboard</a>
            )}

            {role === "Volunteer" && (
              <a href="/volunteer" className="hover:text-[#228B22]">Dashboard</a>
            )}

            <a href="/impact" className="hover:text-[#228B22]">Impact</a>

            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
