const Login = ({ onLogin }) => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-sm bg-white p-6 sm:p-8 rounded-xl shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
          Login
        </h2>
        <button
          onClick={onLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-md transition duration-200"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
