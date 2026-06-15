"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import VaultForm from "@/components/VaultForm";
import VaultTable from "@/components/VaultTable";
import SearchBar from "@/components/SearchBar";

export default function VaultPage() {
  const router = useRouter();
  const [passwords, setPasswords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ title: "", username: "", password: "", url: "", notes: "" });
  const [search, setSearch] = useState("");

  // Fetch passwords from API
  const fetchPasswords = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const res = await fetch("/api/passwords", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setPasswords(data.passwords || []);
      } else {
        setMessage(data.message || "Failed to load passwords");
      }
    } catch (err) {
      console.error("Fetch passwords error:", err);
      setMessage("Error loading passwords");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPasswords();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Add/Edit form submit
  const handleSubmit = async (data) => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const method = editId ? "PUT" : "POST";
    const url = editId ? `/api/passwords/${editId}` : "/api/passwords";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editId ? { ...data, id: editId } : data),
      });

      const resData = await res.json();

      if (res.ok) {
        setMessage(editId ? "Password updated!" : "Password added!");
        setFormData({ title: "", username: "", password: "", url: "", notes: "" });
        setEditId(null);
        setShowForm(false);
        fetchPasswords();
      } else {
        setMessage(resData.message || "Action failed");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setMessage("Error connecting to server");
    }
  };

  // Delete password
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    if (!confirm("Are you sure you want to delete this password?")) return;

    try {
      const res = await fetch(`/api/passwords/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setPasswords(passwords.filter((p) => p._id !== id));
      } else {
        const data = await res.json();
        setMessage(data.message || "Delete failed");
      }
    } catch (err) {
      console.error("Delete error:", err);
      setMessage("Error deleting password");
    }
  };

  const filteredPasswords = passwords.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">🔐 Your Vault</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-500 text-gray-200 cursor-pointer px-4 py-2 rounded-lg hover:bg-blue-600 "
          >
            {showForm ? "Close" : "Add New"}
          </button>
        </div>

        {message && (
          <p className="text-center text-sm text-gray-800 bg-gray-50 py-2 mb-3 rounded">
            {message}
          </p>
        )}

        {showForm && (
          <VaultForm
            formData={formData}
            setFormData={setFormData}
            editId={editId}
            handleSubmit={handleSubmit}
            setShowForm={setShowForm}
          />
        )}

        <SearchBar search={search} setSearch={setSearch} />

        <VaultTable
          passwords={filteredPasswords}
          setEditId={setEditId}
          setFormData={setFormData}
          setShowForm={setShowForm}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
