"use client";
import React from "react";
import confetti from "canvas-confetti";

const ConfettiButton = () => {
  return (
    <button
      onClick={() => {
        confetti({
          particleCount: 150,
          spread: 60,
        });
      }}
    >
      <span>Submit</span>
      <span>🎉</span>
    </button>
  );
};

export default ConfettiButton;
