// Sim.jsx
import React from "react";

export default function sim() {
  const simulations = [
    {
      img: "/pic1.png",
      title: "What if I moved to Tokyo?",
      desc: "Cost of living, culture shocks, and bullet trains.",
    },
    {
      img: "/pic2.png",
      title: "What if I worked remotely from Goa?",
      desc: "Beaches, co-working spaces, and affordable rent.",
    },
    {
      img: "/pic3.png",
      title: "What if I doubled my salary?",
      desc: "How life scales — rent, food, travel, fun.",
    },
    {
      img: "/pic4.png",
      title: "What if I switched to minimal living?",
      desc: "Save money, reduce clutter, live intentionally.",
    },
    {
      img: "/pic5.png",
      title: "What if I became a freelancer in Europe?",
      desc: "Digital nomad life in Lisbon or Berlin.",
    },
    {
      img: "/pic6.png",
      title: "What if I moved from a small town to a metro?",
      desc: "Higher costs, better opportunities — is it worth it?",
    },
  ];

  return (
    <div style={{ backgroundColor: "#0b132b", color: "white", padding: "2rem" }}>
      <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
        Popular Simulations
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {simulations.map((sim, idx) => (
          <div
            key={idx}
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#5c7080",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <img
              src={sim.img}
              alt={sim.title}
              style={{ width: "100%", height: "160px", objectFit: "cover" }}
            />
            <div style={{ padding: "0.8rem" }}>
              <h3 style={{ fontWeight: "bold", fontSize: "1rem", marginBottom: "0.4rem" }}>
                {sim.title}
              </h3>
              <p style={{ fontSize: "0.85rem", marginBottom: "0.6rem" }}>{sim.desc}</p>
              <a
                href="#"
                style={{
                  fontSize: "0.85rem",
                  color: "#cbd5e1",
                  textDecoration: "none",
                }}
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button
          style={{
            backgroundColor: "#9bb6d6",
            color: "black",
            padding: "0.6rem 1.2rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Browse Simulations
        </button>
      </div>
    </div>
  );
}