/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import { useAppDispatch } from "../../redux/app/hook";
import { signUser } from "../../redux/features/auth/authSlice";

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "user@example.com",
      password: "password123", // Initial empty value
    },
  });
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading("logging in");
    console.log(data);
    try {
      const res = await loginUser(data).unwrap();
      toast.success("logged in", { id: toastId, duration: 5000 });
      const user = res?.data.user;
      const token = res?.data.token;
      dispatch(signUser({ user, token }));
      console.log(res?.data.user);

      navigate("/");
      // toast.error("Something went wrong");
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 5000 });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Sign In
          </button>

          {/* Links */}
          <div className="flex justify-between text-sm">
            <a
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up Instead
            </Link>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>{" "}
          &bull;{" "}
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;