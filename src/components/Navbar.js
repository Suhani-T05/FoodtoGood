
export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 bg-white px-8 py-5 shadow-sm">
      <a href="/" className="text-2xl font-bold text-[#228B22]">
        FoodtoGood
      </a>

      <div className="flex flex-wrap items-center gap-6 font-medium text-[#263238]">
        <a href="/" className="hover:text-[#228B22]">Home</a>
        <a href="/about" className="hover:text-[#228B22]">About</a>
        <a href="/donor" className="hover:text-[#228B22]">Donor</a>
        <a href="/donor/my-donations" className="hover:text-[#228B22]">My Donations</a>
        <a href="/ngo" className="hover:text-[#228B22]">NGO</a>
        <a href="/volunteer" className="hover:text-[#228B22]">Volunteer</a>
        <a href="/login" className="rounded-lg bg-[#228B22] px-4 py-2 text-white hover:bg-[#1b701b]">
          Login
        </a>
      </div>
    </nav>
  );
}
