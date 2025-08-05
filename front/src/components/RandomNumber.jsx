import { useState } from "react";
function RandomNumber() {
  const [number, setNumber] = useState(0);
  const getRandomNumber = async () => {
    const randomNumber = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.random());
      }, 500);
    });

    setNumber(await randomNumber);
  };

  return (
    <>
      <button style={{ margin: "10px" }} onClick={getRandomNumber}>
        get random number
      </button>
      <h3>{number}</h3>
    </>
  );
}

export default RandomNumber;
