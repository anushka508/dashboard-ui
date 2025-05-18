import { useState } from 'react';

const AddUser = () => {
  const [form, setForm] = useState({ name: '', email: '', role: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`User "${form.name}" added successfully!`);
    setForm({ name: '', email: '', role: '' });
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 text-center">
        Add New User
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow-md"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-md transition-colors duration-200"
        >
          Submit
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-green-700 font-medium">
          {message}
        </p>
      )}
    </div>
  );
};

export default AddUser;
