"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Edit3, Lock, DollarSign, Shield } from "lucide-react"
import MyForm from "./MyForm"

export default function LoanHero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-white py-4 px-4 md:px-8 border-b">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-8 mr-2">
                <div className="absolute inset-0 bg-green-500 rounded-md flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="text-lg font-bold uppercase">CASHTODAYASAP</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-green-600">
              About Us
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-green-600">
              FAQ
            </Link>
            <div className="text-gray-700">Personal Loans from $200—$5,000</div>
          </div>

          <Link
            href="/login"
            className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-6 py-2 rounded-md font-medium transition-colors"
          >
            LOGIN
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 bg-green-700 relative overflow-hidden">
        {/* Background pattern/illustration would go here */}
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col md:flex-row items-start">
          {/* Left side - Hero content */}
          <div className="md:w-1/2 text-white z-10 mb-10 md:mb-0">
            <p className="uppercase tracking-wider mb-2 text-green-100">GET YOUR LOAN DIRECTLY IN YOUR BANK ACCOUNT</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              GET A LOAN <br /> TODAY
            </h1>
            <p className="text-2xl md:text-3xl mb-12">for a Better Tomorrow</p>

            {/* Process steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-500 rounded-full p-4 mb-4">
                  <Edit3 className="h-6 w-6 text-white" />
                </div>
                <p className="font-medium">Fill Your Quick Form</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-green-500 rounded-full p-4 mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <p className="font-medium">Get Personal Lender</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-green-500 rounded-full p-4 mb-4">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <p className="font-medium">Take Your Loan!</p>
              </div>
            </div>
          </div>

          {/* Right side - Third Party Form */}
          <div className="md:w-1/2 md:pl-8 z-10 w-full">
            <div className="w-full" id="form-container">
              <MyForm />
            </div>
          </div>
        </div>

        {/* Background illustration - simplified version */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-green-800 opacity-30 rounded-tl-full rounded-tr-full"></div>
      </main>
    </div>
  )
}

