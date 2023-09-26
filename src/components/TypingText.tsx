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
  }, [charIndex, clearing]);

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

// import { useEffect, useState } from "react";

// const TypingText = () => {
//   const textToType = "a creative web developer.";

//   const [displayText, setDisplayText] = useState("");
//   const [textIndex, setTextIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     const typingInterval = setInterval(() => {
//       if (charIndex < textToType.length) {
//         setDisplayText((prevText) => prevText + textToType[charIndex]);
//         setCharIndex((prevCharIndex) => prevCharIndex + 1);
//       } else {
//         // Wait for a few seconds before clearing text
//         setTimeout(() => {
//           clearText();
//           setCharIndex(textToType.length);
//         }, 1000);
//       }
//     }, 100);

//     return () => {
//       clearInterval(typingInterval);
//     };
//   }, [charIndex, textIndex]);

//   const clearText = () => {
//     const clearTextTimeout = setTimeout(() => {
//       if (displayText.length > 0) {
//         setDisplayText((prevText) => prevText.slice(0, -1));
//       } else {
//         clearTimeout(clearTextTimeout); // Clear the timeout
//         setTextIndex(
//           (prevTextIndex) => (prevTextIndex + 1) % textToType.length,
//         );
//         setCharIndex(0);
//       }
//     }, 50);
//   };

//   return (
//     <div className="text-white">
//       <p className="text-2xl font-semibold">{displayText}</p>
//     </div>
//   );
// };

// export default TypingText;
