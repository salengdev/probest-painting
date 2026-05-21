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
        alert("Thanks! We’ll contact you shortly.");
        e.target.reset();
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans text-gray-900">

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">
            ProBest Painting
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="bg-black text-white px-4 py-2 rounded-lg text-sm"
          >
            Get Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        className="h-[90vh] flex items-center justify-center text-center text-white relative"
        style={{
          backgroundImage: "url('/gallery/image1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-3xl px-6">
          <h2 className="text-5xl md:text-6xl font-bold">
            Premium Painting Services
          </h2>

          <p className="mt-6 text-lg text-gray-200">
            Residential • Commercial • Strata • Wallpaper Installation
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
            >
              Free Estimate
            </a>

            <a
              href="tel:6046180023"
              className="border border-white px-6 py-3 rounded-xl"
            >
              Call 604-618-0023
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">
          Services
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Residential Painting",
            "Commercial Projects",
            "Strata Buildings",
            "Wallpaper Installation",
          ].map((item) => (
            <div
              key={item}
              className="p-6 border rounded-xl text-center hover:shadow-md transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-24 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Work
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "image1.jpg",
              "image2.jpg",
              "image3.jpg",
             ].map((img) => (
              <div key={img} className="rounded-xl overflow-hidden shadow">
                <img
                  src={`/gallery/${img}`}
                  className="h-72 w-full object-cover hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-10">
          Request a Quote
        </h3>

        <form onSubmit={handleSubmit} className="grid gap-4">

          <input
            name="name"
            placeholder="Name"
            className="p-4 border rounded-xl"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-4 border rounded-xl"
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            className="p-4 border rounded-xl"
            required
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your project..."
            className="p-4 border rounded-xl"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white py-3 rounded-xl"
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