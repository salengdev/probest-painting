"use client";
import { useState } from "react";
export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="font-sans text-gray-900">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">ProBest Painting</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative overflow-hidden pt-44 md:pt-52 pb-24 text-white text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')"
        }}
      >
        {/* OVERLAY (must be inside section) */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT (must sit above overlay) */}
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-snug md:leading-tight">
            Professional Painting Services in Surrey & Cloverdale
          </h2>

          <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-10 leading-relaxed">
            Interior Painting • Exterior Painting • Wallpaper • 3D Wall Design
          </p>

          <a
            href="#contact"
            className="inline-block bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-200 hover:scale-105 transition duration-300 shadow-2xl"
          >
            Get Free Estimate
          </a>
        </div>
      </section>
      
      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">About Us</h3>
        <p className="text-gray-600 leading-relaxed">
          ProBest Painting is a Surrey-based painting company specializing in
          high-quality residential and commercial finishes. We focus on clean
          work, attention to detail, and reliable service.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-gray-100 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-10">Services</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Interior Painting",
              "Exterior Painting",
              "Wallpaper Installation",
              "3D Wall Design",
              "Commercial Painting",
              "Drywall Repairs"
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>


     {/* GALLERY */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center">
          Recent Projects
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

         <div className="relative overflow-hidden rounded-2xl group shadow-lg">

          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
            alt="Modern Home"
            className="object-cover h-72 w-full group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <h4 className="text-xl font-bold">Exterior Painting</h4>

            <p className="text-sm text-gray-200">
              Modern Residential Finish
            </p>
          </div>

        </div>

         <div className="relative overflow-hidden rounded-2xl group shadow-lg">

          <img
            src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=1200&auto=format&fit=crop"
            alt="Interior Painting"
            className="object-cover h-72 w-full group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <h4 className="text-xl font-bold">Interior Painting</h4>

            <p className="text-sm text-gray-200">
              Clean Modern Interior
            </p>
          </div>

        </div>

          <div className="relative overflow-hidden rounded-2xl group shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
              alt="Exterior Painting"
              className="object-cover h-72 w-full group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <h4 className="text-xl font-bold">Townhouse Project</h4>

              <p className="text-sm text-gray-200">
                Exterior Residential Upgrade
              </p>
            </div>

          </div>

        </div>
      </section>       

      {/* QUOTE FORM */}
      <section className="py-20 bg-black text-white px-6">

        <div className="max-w-3xl mx-auto">

          <h3 className="text-4xl font-bold mb-6 text-center">
            Request a Free Quote
          </h3>

          <p className="text-gray-300 text-center mb-10">
            Tell us about your project and we’ll contact you shortly.
          </p>

          
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-xl bg-white text-black"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-xl bg-white text-black"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-4 rounded-xl bg-white text-black"
          />

          <textarea
            placeholder="Tell us about your project..."
            rows={5}
            className="w-full p-4 rounded-xl bg-white text-black"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-white text-black py-4 rounded-2xl font-semibold text-lg hover:bg-gray-200 hover:scale-[1.02] transition duration-300"
          >
            Request Estimate
          </button>

          {submitted && (
            <div className="text-green-400 text-center font-medium mt-4">
              ✅ Thank you! We will contact you shortly.
            </div>
          )}
        </form>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <p className="mb-2">📞 (604) 618-0023</p>
        <p className="mb-2">📧 Gurpreetjhattu@ymail.com</p>
        <p>Serving Surrey, Cloverdale & surrounding areas</p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} ProBest Painting. All rights reserved.
      </footer>

    </div>
  );
}