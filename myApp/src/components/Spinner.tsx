import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { Wheel } from "react-custom-roulette";

import './Spinner.css';

interface RouletteDataItem {
    text: string;
    style?: {
      backgroundColor?: string;
      textColor?: string;
    };
  }
  
  interface SpinnerProps {
    data: RouletteDataItem[];
  }
  
  
  const Spinner = ({ data }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState(data);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  useEffect(() => {
    const addShortString = data.map((item: { text: string; style: any; }) => ({
      completeOption: item.text,
      option: item.text.length >= 30 ? item.text.substring(0, 30).trimEnd() + "..." : item.text,
      style: item.style || {}
    }));
    setRouletteData(addShortString);
  }, [data]);

  return (
    <>
      <div className="roulette-container">
        <Wheel
          mustStartSpinning={mustSpin}
          spinDuration={0.2}
          prizeNumber={prizeNumber}
          data={rouletteData.map((item: { option: any; style: any; }) => ({
            option: item.option,
            style: item.style
          }))}
          outerBorderColor={"#ccc"}
          outerBorderWidth={9}
          innerBorderColor={"#f2f2f2"}
          radiusLineColor={"transparent"}
          radiusLineWidth={1}
          textColors={["#f5f5f5"]}
          textDistance={55}
          fontSize={16}
          backgroundColors={[
            "#3f297e",
            "#175fa9",
            "#169ed8",
            "#239b63",
            "#64b031",
            "#efe61f",
            "#f7a416",
            "#e6471d",
            "#dc0936",
            "#e5177b",
            "#be1180",
            "#871f7f"
          ]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />

        <button className="button spin-button roulette-button" onClick={handleSpinClick}>
          Spin
        </button>
      </div>
      <br />
      
      <button
        className={`prize-message ${mustSpin ? 'shake' : ''}`}
        onClick={handleSpinClick}
        disabled={mustSpin}
      >
        {!mustSpin ? rouletteData[prizeNumber].completeOption : "Spinning..."}
      </button>
    </>
  );
};

// citation: https://codesandbox.io/p/sandbox/elysium-roulette-knkjbh?file=%2Fsrc%2FRoulette.js%3A30%2C12-30%2C26 

export default Spinner;


