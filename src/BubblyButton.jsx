import { useContext, useEffect } from "react";
import { FlowersContext } from "./context/FlowersContext.jsx";
import "./BubblyButton.scss";

export function BubblyButton({ children }) {
  const { flowers, setFlowers } = useContext(FlowersContext);

  const animateButton = (e) => {
    e.preventDefault();
    const button = e.target;

    // Reset animation
    button.classList.remove("animate");
    button.classList.add("animate");

    // Remove animation class and redirect after animation
    setTimeout(() => {
      button.classList.remove("animate");
      setFlowers(!flowers);
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
  }, []); // Add redirectUrl to the dependency array

  return <button className="bubbly-button">{children}</button>;
}
