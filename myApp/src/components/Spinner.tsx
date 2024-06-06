import React from 'react';
import { Wheel } from 'react-custom-roulette';

const data = [
  { option: 'Option 1', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: 'Option 2', style: { backgroundColor: 'white' } },
  { option: 'Option 3' },
];

function Spinner() {
  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Wheel
        mustStartSpinning={true} // Whether to start spinning automatically when mounted
        prizeNumber={3} // The index of the option to stop at
        data={data} // The data for each option
        backgroundColors={['#3e3e3e', '#df3428']} // Background color for each segment
        textColors={['#ffffff']} // Text color for each segment
      />
    </div>
  );
}

export default Spinner;
