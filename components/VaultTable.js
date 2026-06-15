"use client";

export default function VaultTable({ passwords, setEditId, setFormData, setShowForm, handleDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left border">
        <thead className="bg-gray-200 text-gray-900">
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Password</th>
            <th className="px-4 py-2">URL</th>
            <th className="px-4 py-2">Notes</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {passwords.length > 0 ? (
            passwords.map((p) => (
              <tr key={p._id} className="border-b hover:bg-gray-50 text-gray-700">
                <td className="px-4 py-2">{p.title}</td>
                <td className="px-4 py-2">{p.username}</td>
                <td className="px-4 py-2">{p.password}</td>
                <td className="px-4 py-2">{p.url}</td>
                <td className="px-4 py-2">{p.notes}</td>
                <td className="px-4 py-2 flex justify-center gap-2">
                  <button
                    onClick={() => {
                      setEditId(p._id);
                      setFormData({
                        title: p.title,
                        username: p.username,
                        password: p.password,
                        url: p.url,
                        notes: p.notes,
                      });
                      setShowForm(true);
                    }}
                    className="px-3 py-1 bg-yellow-400 text-gray-700 rounded hover:bg-yellow-500 cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="px-3 py-1 bg-red-500 text-gray-700 rounded hover:bg-red-600 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-700 italic">
                No passwords found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
