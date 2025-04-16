import React, { useContext, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';
import googleLogo from '../assets/google-logo.svg';

const Signup = () => {
    const { createUser, loginwithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // Handle Sign-Up with Email & Password
    const handleSignUp = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            await createUser(email, password);
            alert("Sign Up Successfully!");
            navigate(from, { replace: true });
        } catch (error) {
            setError(error.message);
        }
    };

    // Handle Google Sign-Up
    const handleRegisterWithGoogle = async () => {
        try {
            await loginwithGoogle();
            alert("Sign Up Successfully!");
            navigate(from, { replace: true });
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 py-12 sm:py-20">
            <div className="relative w-full max-w-md sm:max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-6 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-16">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl font-semibold text-center">Sign Up</h1>
                        
                        <form onSubmit={handleSignUp} className="mt-6 space-y-6">
                            <div className="relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="peer w-full h-12 px-4 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
                                    placeholder="Email address"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="peer w-full h-12 px-4 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
                                    placeholder="Password"
                                />
                            </div>
                            
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            
                            <p className="text-gray-600 text-sm">
                                Already have an account?{" "}
                                <Link to="/login" className="text-blue-600 underline">Login here</Link>
                            </p>
                            <div className="text-center">
                                <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition">
                                    Sign Up
                                </button>
                            </div>
                        </form>

                        <div className="flex items-center my-6">
                            <hr className="w-full border-gray-300" />
                            <span className="px-2 text-gray-500">OR</span>
                            <hr className="w-full border-gray-300" />
                        </div>

                        <div className="flex flex-col items-center">
                            <button onClick={handleRegisterWithGoogle} className="flex items-center gap-3 border px-4 py-2 rounded-md hover:bg-gray-200 transition">
                                <img src={googleLogo} alt="Google" className="w-6 h-6" />
                                <span>Sign up with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
