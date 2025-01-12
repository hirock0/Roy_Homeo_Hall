"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FiUser, FiMail, FiLock, FiUserPlus, FiArrowLeft } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import swal from 'sweetalert';

interface RegistrationFormInputs {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function RegistrationPage() {
    const router = useRouter();
    const searchParams = useSearchParams()
    const state = searchParams?.get("redirect") || "/"
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false)
console.log(state)
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<RegistrationFormInputs>();


    const onSubmit = async (data: RegistrationFormInputs) => {

        setLoading(true)
        try {
            const response = await axios.post(`${process.env.DOMAIN_URL}/pages/api/register`, data)
            if (response?.data?.success) {
                swal({
                    title: response?.data?.message,
                    icon: "success"
                })
                router.push(state)
                setLoading(false)
            } else {
                swal({
                    title: response?.data?.message,
                    icon: "warning"
                })
                setLoading(false)
            }


        } catch (error) {
            setLoading(false)
            throw new Error(String(error))

        }

    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev);
    };

    const password = watch('password');

    return (
        <div className="flex  md:flex-row md:h-screen bg-zinc-100">
            {/* Left Side with Image */}
            <div className="md:w-1/2 max-md:hidden w-full h-64 md:h-full bg-gray-200">
                <Image
                    src="https://i.ibb.co.com/JqYxCQZ/ergonomic-office-chair.webp" // Replace with your image path
                    alt="Registration"
                    width={50000}
                    height={50000}
                    priority
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Right Side with Form */}
            <div className="md:w-1/2 w-full flex items-center justify-center p-4">
                <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                    {/* Back Button */}
                    <button
                        type="button"
                        onClick={() => router.back()} // Navigate back to the previous page
                        className="flex items-center text-blue-500 hover:underline mb-4"
                    >
                        <FiArrowLeft className="mr-2" size={20} />
                        Back
                    </button>

                    <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name Field */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <div className="relative mt-1">
                                <FiUser className="absolute top-3 left-3 text-gray-400" size={20} />
                                <input
                                    id="name"
                                    type="text"
                                    {...register('name', { required: 'Name is required' })}
                                    className="pl-10 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your name"
                                />
                            </div>
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="relative mt-1">
                                <FiMail className="absolute top-3 left-3 text-gray-400" size={20} />
                                <input
                                    id="email"
                                    type="email"
                                    {...register('email', { required: 'Email is required' })}
                                    className="pl-10 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="mb-4 relative">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="relative mt-1">
                                <FiLock className="absolute top-3 left-3 text-gray-400" size={20} />
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('password', { required: 'Password is required' })}
                                    className="pl-10 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? (
                                        <AiOutlineEyeInvisible size={20} />
                                    ) : (
                                        <AiOutlineEye size={20} />
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Confirm Password Field */}
                        <div className="mb-4 relative">
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <div className="relative mt-1">
                                <FiLock className="absolute top-3 left-3 text-gray-400" size={20} />
                                <input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    {...register('confirmPassword', {
                                        required: 'Confirm Password is required',
                                        validate: (value) =>
                                            value === password || 'Passwords do not match',
                                    })}
                                    className="pl-10 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Confirm your password"
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
                                >
                                    {showConfirmPassword ? (
                                        <AiOutlineEyeInvisible size={20} />
                                    ) : (
                                        <AiOutlineEye size={20} />
                                    )}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        >
                            {
                                !loading ?
                                    <span className=' flex items-center gap-3'>
                                        <FiUserPlus size={18} />
                                        Register
                                    </span>
                                    :

                                    <div className=' loading loading-spinner loading-md'></div>
                            }

                        </button>

                        {/* Register with Google */}
                        <button
                            type="button"
                            className="w-full bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 mb-4"
                        >
                            <FcGoogle size={18} />
                            Register with Google
                        </button>
                    </form>

                    {/* Links Section */}
                    <div className="text-center mt-4">
                        <p className="text-sm">
                            Already have an account?{' '}
                            <Link href={"/login"} className="text-blue-500 hover:underline">
                                Login
                            </Link>
                        </p>
                        <p className="text-sm mt-2">
                            By creating an account, you agree to our{' '}
                            <Link href={"/policy"} className="text-blue-500 hover:underline">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
