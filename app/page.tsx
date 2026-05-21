"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    // CAPTCHA check (frontend safety)
    if (!captcha) {
      alert("Please complete the CAPTCHA");
      setLoading(false);
      return;
    }

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      captcha,
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
        setCaptcha(null);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50">
        <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

            <h1 className="font-bold text-xl text-white">
              ProBest Painting
            </h1>

            <nav className="space-x-6 text-sm font-medium flex items-center text-white/90">
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#why" className="hover:text-white transition">Why Us</a>
              <a href="#gallery" className="hover:text-white transition">Gallery</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>

              <a
                href="tel:604-618-0023"
                className="ml-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold"
              >
                Call Now
              </a>
            </nav>

          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        className="h-[90vh] flex items-center justify-center text-center px-6 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/gallery/1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

        <div className="relative max-w-3xl text-white pt-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Painting Services in Surrey
          </h2>

          <p className="text-lg text-gray-200 mb-8">
            Residential • Commercial • Strata • Interior • Exterior
          </p>

          <a
            href="#contact"
            className="bg-white text-black px-8 py-3 rounded-xl font-semibold"
          >
            Get Free Quote
          </a>

          <p className="mt-4 text-sm text-gray-200">
            Or call:{" "}
            <a href="tel:604-618-0023" className="underline">
              604-618-0023
            </a>
          </p>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-10 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center text-sm font-medium text-gray-600 gap-4">
          <div>✔ Licensed & Insured</div>
          <div>✔ Free Estimates</div>
          <div>✔ Surrey & Fraser Valley</div>
          <div>✔ Clean Professional Work</div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Choose ProBest Painting
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Reliable & On Time",
              desc: "We show up when we say we will and finish on schedule.",
            },
            {
              title: "Clean Workspaces",
              desc: "We protect your home and leave everything spotless.",
            },
            {
              title: "High Quality Finish",
              desc: "We focus on detail and long-lasting results.",
            },
          ].map((item) => (
            <div key={item.title} className="p-6 border rounded-2xl">
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Services
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Residential Painting",
              "Commercial Painting",
              "Strata Painting",
              "Interior Painting",
              "Exterior Painting",
              "Wallpaper Installation",
              "Wallpaper Removal",
              "Drywall Repair",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h4 className="font-semibold">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Work
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "/gallery/1.jpg",
              "/gallery/2.jpg",
              "/gallery/3.jpg",
              "/gallery/4.jpg",
              "/gallery/5.jpg",
              "/gallery/6.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl shadow hover:shadow-xl transition group"
              >
                <img
                  src={img}
                  className="h-64 w-full object-cover group-hover:scale-105 transition"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">
          Request a Free Quote
        </h3>

        <p className="text-gray-600 mb-4">
          Call us directly:{" "}
          <a href="tel:604-618-0023" className="font-semibold underline">
            604-618-0023
          </a>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Full Name"
            className="w-full p-4 border rounded-xl"
            required
          />

          <input
            name="email"
            placeholder="Email"
            className="w-full p-4 border rounded-xl"
            required
          />

          <input
            name="phone"
            placeholder="Phone"
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

          {/* CAPTCHA (NO KEY HERE) */}
          <div className="pt-2">
            <ReCAPTCHA
              sitekey=""
              onChange={(value) => setCaptcha(value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-xl"
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} ProBest Painting
      </footer>

    </div>
  );
}