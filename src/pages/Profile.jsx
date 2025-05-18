import { useState } from 'react';
import { FaUserCircle, FaEnvelope, FaUserShield, FaSave, FaEdit } from 'react-icons/fa';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6">
      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
        <div className="flex items-center gap-4 mb-6">
          <FaUserCircle className="text-5xl text-blue-600" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {editMode ? 'Edit Profile' : 'User Profile'}
            </h1>
            <p className="text-sm text-gray-500">Manage your account information</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Name */}
          <div className="flex items-center gap-2 text-gray-700">
            <FaUserCircle className="text-blue-500" />
            {editMode ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            ) : (
              <span><strong>Name:</strong> {profile.name}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 text-gray-700">
            <FaEnvelope className="text-blue-500" />
            {editMode ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            ) : (
              <span><strong>Email:</strong> {profile.email}</span>
            )}
          </div>

          {/* Role */}
          <div className="flex items-center gap-2 text-gray-700">
            <FaUserShield className="text-blue-500" />
            {editMode ? (
              <select
                name="role"
                value={profile.role}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              >
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
              </select>
            ) : (
              <span><strong>Role:</strong> {profile.role}</span>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={toggleEdit}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition duration-200 mx-auto"
          >
            {editMode ? <FaSave /> : <FaEdit />}
            {editMode ? 'Save' : 'Edit Profile'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
