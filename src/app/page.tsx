"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is Sun Design?",
      answer:
        "We are your trusted partner, ready to turn any idea into reality with our team of experienced and dedicated designers.",
    },
    {
      question: "Can I try Sun Design for free before making a payment?",
      answer:
        "Absolutely! You can experience our services with no upfront cost. Just contact us and enjoy a free trial instantly.",
    },
    {
      question: "Is there a limit to how many designs I can create?",
      answer:
        "There’s no limit at all — you can create unlimited orders. As long as you have ideas, we’re here to bring them to life as fast as possible.",
    },
    {
      question: "How do I make payments?",
      answer:
        "Simply create a top-up request and you’ll instantly get a secure QR code. Just scan it — your payment will be processed automatically. Plus, enjoy an extra 3% bonus added to every top-up amount!",
    },
    {
      question: "How do I work with multiple designers or teams?",
      answer:
        "With Sun Design, you can easily create custom boards and invite multiple users to collaborate on projects. Manage tasks, feedback, and files in one place — teamwork has never been smoother.",
    },
  ];

  const testimonials = [
    {
      name: "Pham Thanh An",
      role: "TikTok Shop Seller",
      avatar: "/image1.jpg?height=48&width=48",
      text: "Sun Design's creator matching is truly a game-changer! Finding the right designers and creators for my brand has never been this easy. My affiliate network keeps growing — so do my sales!",
    },
    {
      name: "Do Duc Tuan",
      role: "Sales Executive",
      avatar: "/image2.jpg?height=48&width=48",
      text: "Thanks to Sun Design, I can launch product listings in no time and still meet all TikTok Shop standards. It has streamlined my daily tasks and boosted my productivity massively.",
    },
    {
      name: "Le Khac Duy",
      role: "E-commerce Entrepreneur",
      avatar: "/image3.jpg?height=48&width=48",
      text: "Managing all my design orders and team members in one place is priceless. Sun Design keeps everything organized and my workflow stress-free. Exactly what every online seller needs!",
    },
    {
      name: "Phan Van Anh",
      role: "Independent Seller",
      avatar: "/image4.jpg?height=48&width=48",
      text: "As a solo seller, I love how Sun Design saves me hours every week. Quick orders, easy payments, smooth teamwork — it just works!",
    },
    {
      name: "Le Tan Phat",
      role: "Sales Manager",
      avatar: "/image5.jpg?height=48&width=48",
      text: "Sun Design makes my entire operation simpler — from submitting design requests to managing payments and feedback. It’s perfect for scaling my business without the usual chaos.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Sun Design - Save time for all design</title>
        <meta
          name="description"
          content="All-in-one platform to help sellers manage and grow multiple TikTok Shops"
        />
      </Head>

      {/* Hero Section with Header */}
      <section className="relative min-h-screen px-8 py-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <header className="flex justify-between items-center mb-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <span className="text-2xl font-bold">Sun Design</span>
            </div>
            <div className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium">
              <a
                href="https://sundesign.io/"
                target="_blank"
                className="text-purple-500 font-bold"
              >
                Create Design Now
              </a>
            </div>
          </header>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="space-y-8">
              {/* <div className="inline-block bg-gray-700/50 text-gray-300 px-6 py-3 rounded-full text-sm font-medium">
                JOIN THE FUTURE
              </div> */}

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Save time,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  For all design.
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                All-in-one for design, order management, transaction management.
              </p>

              <div className="space-y-4">
                <a
                  href="https://zalo.me/g/plkyoz146"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors duration-300"
                >
                  Get started today
                </a>

                <p className="text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="https://sundesign.io/"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Login now
                  </a>
                </p>
              </div>
            </div>

            {/* Right Content - 3D Elements */}
            <div className="relative flex justify-center items-center">
              {/* 3D Geometric Shapes */}
              <div className="relative w-96 h-96">
                {/* Top row cubes */}
                <div className="absolute top-0 left-16 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg transform rotate-12 shadow-2xl"></div>
                <div className="absolute top-8 left-32 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg transform -rotate-6 shadow-2xl"></div>
                <div className="absolute top-4 right-16 w-18 h-18 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg transform rotate-45 shadow-2xl"></div>

                {/* Middle row cubes */}
                <div className="absolute top-24 left-8 w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg transform rotate-6 shadow-2xl"></div>
                <div className="absolute top-32 right-8 w-22 h-22 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg transform -rotate-12 shadow-2xl"></div>

                {/* Bottom row cubes */}
                <div className="absolute bottom-16 left-20 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg transform rotate-24 shadow-2xl"></div>
                <div className="absolute bottom-8 right-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-teal-500 rounded-lg transform -rotate-18 shadow-2xl"></div>
                <div className="absolute bottom-20 left-40 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg transform rotate-36 shadow-2xl"></div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-center mb-2 font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                Preview website
              </h3>
              <img className="rounded-3xl" src="./preview.png"></img>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered TikTok Shop Section */}
      <section className="relative px-8 py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="Sun Design logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-sm text-gray-400">Sun Design</span>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-full font-medium">
              Design Better
            </button>
          </div>

          {/* Main Content */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm mb-6">
              INTRODUCING
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Turn every idea into a
              <br />
              Masterpiece
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
              You have the vision, you have the idea and we have the creative
              team dedicated to making it happen.
              <br />
              Every design we create is a one-of-a-kind, just for you.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Main Images Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative overflow-hidden">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl transform rotate-12 opacity-80"></div>
              <h3 className="text-2xl font-bold mb-6 text-left">Raw Image</h3>
              <p className="text-gray-300 text-left mb-8 leading-relaxed">
                Rough piece
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden hover:scale-150">
                  <Image
                    src="/prev.jpeg"
                    alt="Product example preview"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Creators AI-Matching Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl transform rotate-12 opacity-80"></div>
              <h3 className="text-2xl font-bold mb-4 text-left">
                After Sun Design
              </h3>
              <p className="text-gray-300 text-left mb-8 leading-relaxed">
                Better than you want.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden hover:scale-150">
                  <Image
                    src="/after.jpg"
                    alt="Product example after"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are You Section */}
      <section className="px-8 py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-semibold">Sun Design</span>
            </div>
            <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
              by <span className="text-red-500">Sun Design</span> media
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Who are you,
              <br />
              And what value will you receive?
            </h2>
            <p className="text-gray-300 text-lg">
              Discover the unique benefits we bring to you!
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Merchandise Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              {/* 3D Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl transform rotate-12"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl transform -rotate-6"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg"></div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-center mb-8">Customer</h3>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✨</span>
                  </div>
                  <span className="text-gray-300">Create Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">📝</span>
                  </div>
                  <span className="text-gray-300">
                    Order & Project Management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">💬</span>
                  </div>
                  <span className="text-gray-300">
                    Realtime Comments & Feedback
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">💰</span>
                  </div>
                  <span className="text-gray-300">
                    Balance Top-Up & Payment Control
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">📂</span>
                  </div>
                  <span className="text-gray-300">Custom Boards for Teams</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">📊</span>
                  </div>
                  <span className="text-gray-300">
                    In & Out Financial Tracking
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://zalo.me/0968083967"
                target="_blank"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                Join as Customer
                <span>→</span>
              </a>
            </div>

            {/* Partner Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              {/* 3D Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-600 rounded-full transform rotate-45"></div>
                  <div className="absolute inset-1 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full transform -rotate-12"></div>
                  <div className="absolute inset-3 bg-gradient-to-br from-purple-300 to-blue-500 rounded-full transform rotate-6"></div>
                  <div className="absolute inset-6 bg-gradient-to-br from-blue-200 to-purple-400 rounded-full"></div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-center mb-8">Designer</h3>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">📥</span>
                  </div>
                  <span className="text-gray-300">
                    Order Receiving & Tracking
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">📤</span>
                  </div>
                  <span className="text-gray-300">File Upload & Delivery</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">🗂️</span>
                  </div>
                  <span className="text-gray-300">
                    Task & Workflow Management
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">💵</span>
                  </div>
                  <span className="text-gray-300">
                    Earnings & Payout Control
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">🗣️</span>
                  </div>
                  <span className="text-gray-300">Realtime Feedback Loop</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">🖼️</span>
                  </div>
                  <span className="text-gray-300">
                    Personal Portfolio Showcase
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://zalo.me/0968083967"
                target="_blank"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                Join as Designer
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Become Partner Section */}
      {/* <section className="px-8 py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
                Why should
                <br />
                become
                <br />
                <span className="text-blue-300">Sun Design</span>
                <br />
                partner?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3">
                    Expand
                    <br />
                    Your
                    <br />
                    Reach
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Access a fast-growing network of TikTok sellers looking for
                    design, fulfillment, content, and automation solutions.
                  </p>
                </div>

                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3">
                    Co-
                    <br />
                    Create
                    <br />
                    Value
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Collaborate directly with our product team to build new
                    features tailored to your services or community.
                  </p>
                </div>

                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3">
                    Boost
                    <br />
                    Your
                    <br />
                    Credibilit
                    <br />y
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Partner with an AI-powered platform that's trusted by TikTok
                    sellers and stay ahead in e-commerce.
                  </p>
                </div>

                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3">
                    Full
                    <br />
                    Support
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Enjoy onboarding guidance, marketing assets, and dedicated
                    partner support to help you succeed.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="sticky top-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Ready to collaborate with Sun Design?
                  <br />
                  <br />
                  Please fill out the form below — our team will connect with
                  you 1:1 to discuss exclusive partnership opportunities
                  tailored to your business.
                </p>

                <button className="w-full max-w-md bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center space-x-3 group">
                  <span className="text-lg">Join as Partner</span>
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-sm">⭐</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="px-8 py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm mb-6">
              WE'VE GOT YOU COVERED
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-700/30 transition-colors duration-300"
                >
                  <span className="text-lg font-medium text-gray-300">
                    {faq.question}
                  </span>
                  <div
                    className={`transform transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-8 py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm mb-6">
              WE'VE GOT YOU COVERED
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              Feedback From Big Customer
            </h2>
          </div>
          <div className="text-center mb-16">
            {/* 3D Diamond */}
            <div className="flex justify-center mb-16">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 transform rotate-45 rounded-lg"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-blue-300 via-purple-400 to-pink-400 transform -rotate-12 rounded-lg"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-blue-200 via-purple-300 to-pink-300 transform rotate-6 rounded-lg"></div>
              </div>
            </div>
            {/* <p className="text-xl md:text-2xl mb-12">
              More than{" "}
              <span className="text-blue-400 font-bold">152.78k+</span> users
              love their TikTok Shop journey
            </p> */}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-4">
              <img
                src="./logo.png"
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center"
              />
              <div>
                <h3 className="text-2xl font-bold">Sun Design</h3>
                <p className="text-gray-400">Unlock growth for your shop!</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-300 flex items-center space-x-2">
              <a href="https://zalo.me/g/plkyoz146" target="_blank">
                Get Started Today
              </a>
              <span>→</span>
            </button>

            {/* Copyright */}
            <div className="pt-8 border-t border-gray-700 w-full">
              <p className="text-gray-500">
                © 2025 Sun Design. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
