import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Welcome Back</h2>
        <p className="text-sm text-blue-600 mb-8">Login or Register to continue</p>

        {/* Toggle Buttons */}
        <div className="flex justify-center bg-blue-100 rounded-full p-1 mb-8">
          <button
            aria-pressed={isLogin}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition 
              ${isLogin ? "bg-blue-600 text-white shadow-lg" : "text-blue-600 hover:bg-blue-200"}`}
            onClick={() => setIsLogin(true)}
            type="button"
          >
            Login
          </button>
          <button
            aria-pressed={!isLogin}
            className={`ml-2 px-6 py-2 rounded-full text-sm font-semibold transition
              ${!isLogin ? "bg-blue-600 text-white shadow-lg" : "text-blue-600 hover:bg-blue-200"}`}
            onClick={() => setIsLogin(false)}
            type="button"
          >
            Signup
          </button>
        </div>

        {/* Animated Form */}
        <div className="relative h-[280px]">
          <AnimatePresence mode="wait">
            <motion.form
              key={isLogin ? "login" : "signup"}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute top-0 left-0 w-full space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-3 rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  autoComplete="name"
                />
              )}
              <input
                type="email"
                placeholder="youremail@email.com"
                required
                className="w-full px-5 py-3 rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                autoComplete="email"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full px-5 py-3 rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                autoComplete={isLogin ? "current-password" : "new-password"}
                minLength={6}
              />
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg hover:opacity-90 transition"
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
