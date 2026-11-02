
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFAF0]">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl font-bold text-[#228B22]">
          Good Food. Good People. Good Purpose.
        </h1>

        <p className="mt-6 text-lg text-[#263238] max-w-2xl">
          FoodtoGood connects food donors, NGOs and volunteers
          to reduce food waste and help communities.
        </p>

        <button className="mt-8 bg-[#228B22] text-white px-8 py-3 rounded-lg hover:bg-[#1b701b]">
          Explore Donations
        </button>
      </section>
      
<section className="py-20 px-8 bg-white">
  <h2 className="text-3xl font-bold text-center text-[#228B22] mb-4">
    How FoodtoGood Works
  </h2>

  <p className="text-center text-[#263238] mb-12">
    Together, we can reduce food waste and feed communities.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    <div className="bg-[#FFFAF0] p-8 rounded-xl shadow text-center">
      <h3 className="text-xl font-bold text-[#228B22] mb-4">
        Food Donors
      </h3>
      <p className="text-[#263238]">
        Restaurants and individuals share their surplus food with those in need.
      </p>
    </div>

    <div className="bg-[#FFFAF0] p-8 rounded-xl shadow text-center">
      <h3 className="text-xl font-bold text-[#228B22] mb-4">
        NGOs
      </h3>
      <p className="text-[#263238]">
        NGOs discover available food donations and request what their communities need.
      </p>
    </div>

    <div className="bg-[#FFFAF0] p-8 rounded-xl shadow text-center">
      <h3 className="text-xl font-bold text-[#228B22] mb-4">
        Volunteers
      </h3>
      <p className="text-[#263238]">
        Volunteers collect and deliver food to help it reach the right people.
      </p>
    </div>

  </div>
</section>

<section className="py-16 px-8 bg-[#E8F5E9]">
  <h2 className="text-3xl font-bold text-center text-[#228B22] mb-12">
    Our Impact
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">

    <div>
      <h3 className="text-4xl font-bold text-[#228B22]">500+</h3>
      <p className="mt-2 text-[#263238]">Meals Shared</p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-[#228B22]">50+</h3>
      <p className="mt-2 text-[#263238]">Food Donors</p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-[#228B22]">25+</h3>
      <p className="mt-2 text-[#263238]">NGOs Supported</p>
    </div>

  </div>
</section>

<section className="py-20 px-8 bg-[#228B22] text-center">
  <h2 className="text-3xl font-bold text-white mb-5">
    Be Part of the Change!
  </h2>

  <p className="text-white text-lg mb-8">
    Every meal shared is a step towards a hunger-free community.
  </p>

  <button className="bg-[#FED8B1] text-[#263238] px-8 py-3 rounded-lg font-semibold hover:bg-white">
    Join FoodtoGood
  </button>
</section>

<footer className="bg-[#263238] text-white py-8 px-6 text-center">
  <h2 className="text-2xl font-bold text-[#FED8B1] mb-3">
    FoodtoGood
  </h2>

  <p className="text-sm mb-3">
    Reducing food waste, sharing hope.
  </p>

  <p className="text-xs text-gray-300">
    © 2026 FoodtoGood. All rights reserved.
  </p>
</footer>

    </main>
  );
}
