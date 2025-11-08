import React, { useState } from 'react';

function LoginPage({ onLogin, onSignup }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    birthday: '',
    barangay: '',
    role: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      onLogin(formData);
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      onSignup(formData);
      alert("Account created successfully! Please log in.");
      setIsLogin(true); // switch back to login view
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F2EE] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0B2911]">
            Sangguniang Kabataan Platform
          </h1>
          <h2 className="mt-4 text-2xl font-bold text-[#0B2911]">
            {isLogin ? 'Log in to SK Platform' : 'Sign up for SK Platform'}
          </h2>
        </div>

        <div className="bg-white py-8 px-6 shadow-md rounded-xl">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* SIGN UP FIELDS */}
            {!isLogin && (
              <>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="block w-full px-3 py-2 border border-[#DADFD7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#35723E]"
                  required
                  autoComplete="off"
                />

                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleInputChange}
                  placeholder="Birthday"
                  className="block w-full px-3 py-2 border border-[#DADFD7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#35723E]"
                  required
                  autoComplete="off"
                />

                <input
                  type="text"
                  name="barangay"
                  value={formData.barangay}
                  onChange={handleInputChange}
                  placeholder="Barangay"
                  className="block w-full px-3 py-2 border border-[#DADFD7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#35723E]"
                  required
                  autoComplete="off"
                />

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border border-[#DADFD7] rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#35723E]"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Chairperson">Chairperson</option>
                  <option value="Councilor">Councilor</option>
                  <option value="Secretary">Secretary</option>
                  <option value="Treasurer">Treasurer</option>
                </select>

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Username"
                  className="block w-full px-3 py-2 border border-[#DADFD7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#35723E]"
                  required
                  autoComplete="off"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="block w-full px-3 py-2 border border-[#DADFD7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#35723E]"
                  required
                  autoComplete="off"
                />

                {/* Password */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="block w-full px-3 py-2 border border-[#DADFD7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#35723E]"
                    required
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2 text-sm text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                    className="block w-full px-3 py-2 border border-[#DADFD7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#35723E]"
                    required
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2 text-sm text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </>
            )}

            {/* LOGIN FIELDS */}
            {isLogin && (
              <>
                <input
                  type="text"
                  name="loginIdentifier"
                  value={formData.loginIdentifier || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      loginIdentifier: e.target.value,
                    }))
                  }
                  placeholder="Email or Username"
                  className="block w-full px-3 py-2 border border-[#DADFD7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#35723E]"
                  required
                  autoComplete="off"
                />

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="block w-full px-3 py-2 border border-[#DADFD7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#35723E]"
                    required
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2 text-sm text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-2 px-4 text-white font-medium rounded-md bg-[#35723E] hover:bg-[#2E5F34] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#35723E]"
            >
              {isLogin ? 'Log In' : 'Sign Up'}
            </button>

            {/* Toggle form mode */}
            <div className="flex items-center justify-center">
              <div className="border-t border-[#DADFD7] flex-grow" />
              <span className="mx-3 text-gray-500 text-sm">or</span>
              <div className="border-t border-[#DADFD7] flex-grow" />
            </div>

            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="w-full py-2 px-4 text-white font-medium rounded-md bg-[#285C2F] hover:bg-[#1F4B26] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#285C2F]"
            >
              {isLogin ? 'Create New Account' : 'Already have an account?'}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>Sangguniang Kabataan Platform © 2025</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
