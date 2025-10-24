import React from "react";
import "./quote.css";

const quotes = [
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    align: "left",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Druker",
    align: "right",
  },
];

const QuotesSection = () => {
  return (
    <div className="quotes-container">
      {quotes.map((quote, index) => (
        <div
          key={index}
          className={`quote-box ${quote.align === "right" ? "align-right" : "align-left"}`}
        >
          {/* Decorative quotation mark */}
          <span className={`quote-mark ${quote.align === "right" ? "quote-right" : "quote-left"}`}>
            “
          </span>

          <p className="quote-text">{quote.text}</p>
          <p className="quote-author">~ {quote.author}</p>
        </div>
      ))}
    </div>
  );
};

export default QuotesSection;
