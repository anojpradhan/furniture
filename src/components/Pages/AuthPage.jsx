import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";

const AuthPage = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-1">Something</h2>
        <p className="text-sm text-gray-500 mb-6">Login & Registration Form</p>

        {/* Toggle Buttons */}
        <div className="flex justify-center bg-gray-100 rounded-full p-1 mb-6">
          <button
            className={`px-5 py-1 rounded-full text-sm font-semibold transition ${
              isLogin ? "bg-blue-500 text-white shadow-md" : "text-blue-600"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-5 py-1 rounded-full text-sm font-semibold transition ${
              !isLogin ? "bg-blue-500 text-white shadow-md" : "text-blue-600"
            }`}
            onClick={() =>{setIsLogin(false)}}
          >
            Signup
          </button>
        </div>

        {/* Form */}
        <div className="relative flex items-center justify-center flex-col h-[260px] overflow-hidden"> {/* Fixed height container */}
  <AnimatePresence mode="wait">
    <motion.form
      key={isLogin ? "login" : "signup"}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute top-0 left-0 w-full space-y-4"
      onSubmit={() => {
        navigate("/");
      }}
    >
      {!isLogin && (
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      )}
      <input
        type="email"
        placeholder="youremail@email.com"
        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="password"
        placeholder="password"
        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="w-full py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow hover:opacity-90 transition"
      >
        {isLogin ? "Login" : "Register"}
      </button>
    </motion.form>
  </AnimatePresence>
</div>
      </div>
    </div>
  );
};

export default AuthPage;
