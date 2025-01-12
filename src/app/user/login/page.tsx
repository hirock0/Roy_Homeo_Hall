"use client"
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FiUserPlus, FiLock, FiMail, FiArrowLeft } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import swal from 'sweetalert';
import { useSearchParams } from 'next/navigation';
interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectPath = searchParams?.get("redirect") || "/"
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true)
    try {
      const response = await axios.post(`/pages/api/login`, data)
      if (response?.data?.success) {
        swal({
          title: response?.data?.message,
          icon: "success"
        })
        setLoading(false)
        router.push(redirectPath)

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

  return (
    <div className="flex md:flex-row relative h-screen bg-zinc-100">

      {/* Left Side with Image */}
      <div className="md:w-1/2 max-md:hidden w-full h-64 md:h-full bg-gray-200">
        <Image
          src="https://i.ibb.co.com/JqYxCQZ/ergonomic-office-chair.webp" // Replace with your image path
          alt="Login"
          width={50000}
          height={50000}
          priority
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Side with Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <button
            type="button"
            onClick={() => router.back()} // Navigate back to the previous page
            className="flex items-center text-blue-500 hover:underline mb-4"
          >
            <FiArrowLeft className="mr-2" size={20} />
            Back
          </button>
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
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

            {/* Forgot Password */}
            <div className="mb-4 text-right">
              <Link href="/" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>


            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            >


              {
                !loading ?
                  <span className=' flex items-center gap-3'>
                    <FiLock size={18} />
                    Login
                  </span>
                  :

                  <div className=' loading loading-spinner loading-md'></div>
              }

            </button>

            <button
              type="button"
              className="w-full bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 mb-4"
            >
              <FcGoogle size={18} />
              Login with Google
            </button>
          </form>

          {/* Links Section */}
          <div className="text-center mt-4">
            <p className="text-sm">
              Do not have an account?
              <Link
                href={`/user/register?redirect=${redirectPath}`}
                className="text-blue-500 hover:underline flex items-center justify-center gap-1"
              >
                <FiUserPlus size={16} />
                Create a new account
              </Link>
            </p>
            <p className="text-sm mt-2">
              By logging in, you agree to our
              <Link href={"/"} className="text-blue-500 hover:underline">
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
