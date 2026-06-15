"use client";

export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by title..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full mb-4 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-700"
    />
  );
}
