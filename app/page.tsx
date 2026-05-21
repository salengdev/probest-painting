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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully! We will contact you soon.");
        e.target.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="h-[70vh] flex items-center justify-center bg-gray-900 text-white text-center px-6">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            ProBest Painting
          </h1>
          <p className="text-lg mb-6">
            Residential • Commercial • Strata • Wallpaper Installation
          </p>

          <a
            href="#contact"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
          >
            Get Free Quote
          </a>

          <p className="mt-4">
            Call:{" "}
            <a href="tel:604-618-0023" className="underline">
              604-618-0023
            </a>
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            "Residential Painting",
            "Commercial Painting",
            "Strata Painting",
            "Interior Painting",
            "Exterior Painting",
            "Wallpaper Installation",
          ].map((item) => (
            <div key={item} className="border p-6 rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Request a Free Quote
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Name"
            className="w-full border p-3 rounded"
            required
          />

          <input
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded"
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            className="w-full border p-3 rounded"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            className="w-full border p-3 rounded"
            rows={5}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} ProBest Painting
      </footer>

    </div>
  );
}