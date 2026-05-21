"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert("Message sent successfully! We will contact you soon.");
        e.target.reset();
      } else {
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans text-gray-900">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">ProBest Painting</h1>

          <nav className="space-x-6 text-sm font-medium">
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        className="pt-32 pb-24 text-white text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/gallery/image1.jpg')",
        }}
      >
        <div className="bg-black/70 p-12 rounded-xl max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Painting Services
          </h2>

          <p className="text-lg text-gray-200 mb-8">
            Residential • Commercial • Strata • Wallpaper Installation
          </p>

          <a
            href="#contact"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
          >
            Get Free Estimate
          </a>

          <p className="mt-4 text-sm text-gray-200">
            Call Now: 604-618-0023
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center">
          Our Services
        </h3>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Residential",
            "Commercial",
            "Strata",
            "Wallpaper Installation",
          ].map((item) => (
            <div key={item} className="p-6 border rounded-xl shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-center">
            Our Work
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"].map(
              (img) => (
                <img
                  key={img}
                  src={`/gallery/${img}`}
                  alt="painting work"
                  className="rounded-xl shadow object-cover w-full h-64"
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">
          Request a Free Quote
        </h3>

        <form onSubmit={handleSubmit} className="grid gap-4">

          <input
            name="name"
            placeholder="Full Name"
            className="w-full p-4 border rounded-xl"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full p-4 border rounded-xl"
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full p-4 border rounded-xl"
            required
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your project..."
            className="w-full p-4 border rounded-xl"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white py-3 rounded-xl hover:opacity-80"
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} ProBest Painting | 604-618-0023
      </footer>

    </div>
  );
}