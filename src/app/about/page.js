import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-[#FFFAF0]">
      <Navbar />

      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-[#228B22]">
          About FoodtoGood
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-[#263238]">
          FoodtoGood is a surplus food sharing platform that connects food
          donors, NGOs and volunteers to reduce food waste and support
          communities in need.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-12 md:grid-cols-2">
        <div className="rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-[#228B22]">
            Our Mission
          </h2>
          <p className="text-[#263238]">
            Our mission is to prevent edible surplus food from going to waste
            by making it easier for donors to share food with people who need
            it.
          </p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-[#228B22]">
            Our Vision
          </h2>
          <p className="text-[#263238]">
            We envision a community where surplus food is shared responsibly
            and fewer people go hungry.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <h2 className="mb-10 text-3xl font-bold text-[#228B22]">
          How FoodtoGood Works
        </h2>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              title: "1. Donors",
              description: "List surplus food available for donation.",
            },
            {
              title: "2. NGOs",
              description: "Find and request available food donations.",
            },
            {
              title: "3. Volunteers",
              description: "Collect and deliver food to those in need.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-[#228B22]">
                {item.title}
              </h3>
              <p className="text-[#263238]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#228B22] px-6 py-6 text-center text-white">
        © 2026 FoodtoGood | Good Food. Good People. Good Purpose.
      </footer>
    </main>
  );
}