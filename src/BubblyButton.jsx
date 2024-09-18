import { useState, useEffect } from "react";
import "./BubblyButton.scss";

export function BubblyButton({ children, href }) {
  const [redirectUrl, setRedirectUrl] = useState(href);

  const animateButton = (e) => {
    e.preventDefault();
    const button = e.target;

    // Reset animation
    button.classList.remove("animate");
    button.classList.add("animate");

    // Set redirect URL
    setRedirectUrl(href);

    // Remove animation class and redirect after animation
    setTimeout(() => {
      button.classList.remove("animate");

      if (redirectUrl) {
        window.location.assign(redirectUrl); // Use window.location.assign() for redirection
      }
    }, 700);
  };

  useEffect(() => {
    const bubblyButtons = document.getElementsByClassName("bubbly-button");

    for (let i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener("click", animateButton, false);
    }

    // Cleanup function
    return () => {
      for (let i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].removeEventListener("click", animateButton, false);
      }
    };
  }, [redirectUrl]); // Add redirectUrl to the dependency array

  return (
    <a href={href} className="bubbly-button">
      {children}
    </a>
  );
}
