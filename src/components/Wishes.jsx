import { useEffect, useState } from "react";
import Button from "./Button";

export default function Wishes() {
  const [whises, setWhises] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    fetch("/data/wishes.json")
      .then((response) => response.json())
      .then((data) => setWhises(data.new_year_wishes))
      .catch((error) => console.log(error));
  }, []);

  const generateRandomIndex = () => {
    const index = Math.floor(Math.random() * whises.length);
    setRandomIndex(index);
  };

  return (
    <div className="p-5 rounded-xl border">
      <p className="text-xl">{whises[randomIndex]}</p>
      <br />
      <Button text={"Generate Whises!"} onClick={generateRandomIndex} />
    </div>
  );
}
