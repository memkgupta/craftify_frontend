"use client";
import { ToastContext, ToastProvider } from "@/app/context/ToastContext";
import useApi from "@/app/hooks/useApi";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HOST_URL } from "@/constants";
import { ChangeEvent, FormEvent, useContext, useState } from "react";

export default function Signup() {
    
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "+91",
  });
  const { data, loading, error,fetchData } = useApi(
    `${HOST_URL}/users/register`,
    {},
    "POST",
    formData
  );
  const [failed, setFailed] = useState("");
  const toast = useContext(ToastContext);
  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   await fetchData();
   
    if (error) {
        console.log(error);
        setFailed("Request failed")
     toast?.showToast("Request failed","error")
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
    
 
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Card className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <CardHeader className="mb-4">
            <h2 className="text-2xl font-semibold text-center">Signup</h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Signup
              </Button>
            </form>
          </CardContent>
          <CardFooter className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Login here
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
