import { useState } from "react";
import { FiSettings, FiMoon, FiBell, FiUser, FiSave } from "react-icons/fi";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [username, setUsername] = useState("john_doe");
  const [email, setEmail] = useState("john@example.com");
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();

    // Simulate saving data (e.g., API call)
    // Here you can add real save logic

    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <header className="flex items-center mb-8 space-x-3">
        <FiSettings className="w-8 h-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Preferences</h2>
        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
          <label className="flex items-center space-x-3 cursor-pointer">
            <FiMoon className="w-6 h-6 text-gray-700" />
            <span className="text-gray-700">Dark Mode</span>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="ml-auto w-5 h-5 rounded border-gray-300 focus:ring-indigo-500"
            />
          </label>

          <label className="flex items-center space-x-3 cursor-pointer">
            <FiBell className="w-6 h-6 text-gray-700" />
            <span className="text-gray-700">Notifications</span>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="ml-auto w-5 h-5 rounded border-gray-300 focus:ring-indigo-500"
            />
          </label>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Account Info</h2>
        <form onSubmit={handleSave} className="space-y-6 max-w-md">
          <div>
            <label
              htmlFor="username"
              className="block mb-1 font-medium text-gray-700"
            >
              Username
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
              <FiUser className="w-5 h-5 text-gray-400 mr-2" />
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full outline-none"
                placeholder="Username"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Email"
              required
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition"
          >
            <FiSave className="mr-2 w-5 h-5" />
            Save Changes
          </button>

          {saved && (
            <p className="text-green-600 mt-2 font-medium">
              Settings saved successfully!
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default Settings;
