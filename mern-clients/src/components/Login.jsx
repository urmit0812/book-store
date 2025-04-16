import React, { useContext, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';
import googleLogo from '../assets/google-logo.svg';

const Login = () => {
    const { login, loginwithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(() => {
                alert("Login Successfully!!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    // Google login
    const handleRegister = () => {
        loginwithGoogle()
            .then(() => {
                alert("Login Successfully!!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-3 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

                {/* Login Form */}
                <div className="relative bg-white shadow-lg rounded-2xl p-8 sm:p-12">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Login</h1>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Email Address"
                            />
                        </div>

                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Password"
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                        <p className="text-gray-600 text-sm text-center">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-blue-600 font-semibold underline">
                                Sign up here
                            </Link>
                        </p>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition">
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center my-6">
                        <hr className="w-full border-gray-300" />
                        <span className="px-2 text-gray-500">OR</span>
                        <hr className="w-full border-gray-300" />
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={handleRegister}
                            className="flex items-center gap-3 border border-gray-300 px-4 py-3 rounded-lg hover:bg-gray-200 transition">
                            <img src={googleLogo} alt="Google" className="w-6 h-6" />
                            <span>Login with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
