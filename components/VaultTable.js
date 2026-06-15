"use client";

import { useState } from "react";
import { Eye, EyeOff, Pencil, Trash2, ExternalLink } from "lucide-react";

export default function VaultTable({
  passwords,
  setEditId,
  setFormData,
  setShowForm,
  handleDelete,
}) {
  const [visiblePasswords, setVisiblePasswords] = useState({});

  const togglePassword = (id) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Title
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Username
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Password
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              URL
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Notes
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {passwords.length > 0 ? (
            passwords.map((p) => (
              <tr
                key={p._id}
                className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3 text-gray-800 font-medium">
                  {p.title}
                </td>

                <td className="px-4 py-3 text-gray-700">
                  {p.username || "-"}
                </td>

                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-gray-700">
                      {visiblePasswords[p._id]
                        ? p.password
                        : "••••••••••••"}
                    </span>

                    <button
                      type="button"
                      onClick={() => togglePassword(p._id)}
                      className="p-1 rounded-md text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition cursor-pointer"
                      aria-label={
                        visiblePasswords[p._id]
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {visiblePasswords[p._id] ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </td>

                <td className="px-4 py-3">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      Visit
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </td>

                <td className="px-4 py-3 text-gray-700 max-w-xs truncate">
                  {p.notes || "-"}
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">
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
                      className="flex items-center gap-1 px-3 py-1.5 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition cursor-pointer"
                    >
                      <Pencil size={15} />
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(p._id)}
                      className="flex items-center gap-1 px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition cursor-pointer"
                    >
                      <Trash2 size={15} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="text-center py-10 text-gray-500 italic"
              >
                No passwords found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
