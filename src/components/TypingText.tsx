import { useEffect, useState } from "react";

const TypingText = () => {
  const textToType = "a creative web developer.";
  const delayBeforeClearing = 2000; // Adjust as needed

  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [clearing, setClearing] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < textToType.length && !clearing) {
        setDisplayText((prevText) => prevText + textToType[charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      } else if (!clearing) {
        setClearing(true);
        // Wait for a few seconds before clearing text
        setTimeout(() => {
          clearText();
        }, delayBeforeClearing);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  const clearText = () => {
    let currentIndex = displayText.length - 1;
    const clearTextInterval = setInterval(() => {
      if (currentIndex >= 0) {
        setDisplayText((prevText) => prevText.slice(0, -1));
        currentIndex--;
      } else {
        clearInterval(clearTextInterval);
        setCharIndex(0); // Reset charIndex to continue typing
        setClearing(false); // Reset clearing flag
      }
    }, 50);
  };

  return (
    <div className="text-orange-500">
      <p>{displayText}</p>
    </div>
  );
};

export default TypingText;
