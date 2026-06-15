"use client";

export default function VaultForm({ formData, setFormData, editId, handleSubmit, setShowForm }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formData);
      }}
      className="bg-gray-50 p-4 rounded-lg mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-gray-700"
    >
      <input
        type="text"
        placeholder="Title"
        required
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400  text-gray-700"
      />
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-700"
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-700"
      />
      <input
        type="text"
        placeholder="URL (optional)"
        value={formData.url}
        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
        className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 sm:col-span-3 text-gray-700"
      />
      <textarea
        placeholder="Notes (optional)"
        value={formData.notes}
        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 sm:col-span-3 text-gray-700"
      />
      <button
        type="submit"
        className="sm:col-span-3 bg-green-500 text-gray-700 py-2 rounded-lg hover:bg-green-600 transition cursor-pointer"
      >
        {editId ? "Update" : "Save"}
      </button>
    </form>
  );
}
