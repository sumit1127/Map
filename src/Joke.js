import React, { useState } from "react";

const Joke = ({ setup, punchline }) => {
  const [isShown, setIsShown] = useState(true);

  const toggleShown = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <>
      {/* <h3>{setup}</h3>  */}
      {/* <p>{isShown ? punchline : ""}</p> */}

      {/* conditional renderring with && */}
      <p>{setup && <h3>{setup}</h3>}</p>
      <p>{isShown && <p>{punchline}</p>}</p>

      <button onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
      <hr />
    </>
  );
};

export default Joke;
