import { useState, useEffect } from 'react';
import index from '@/pages/index';

export default function Calculate(props) {
  // const [weightStatus, setWeightStatus] = useState("score");

  let poundsInKg = 2.20462262;
  let inchesInMeter = 1 / 0.0254;
  var BMI = props.weight / Math.pow(props.height / 100, 2);
  var calcWeightStatus = calcWeight(BMI);

  function calcWeight(BMI) {
    let weightStatus;
    console.log(props);


    if (props.inches == true) {
      console.log(props.inches);
      BMI = props.weight * poundsInKg / Math.pow(props.height / 100 * inchesInMeter, 2) * 703;
      console.log(BMI);
    }

    if (BMI < 18.5) {
      weightStatus = "underweight";
      console.log("eeee niedowaga");
    } else if (BMI <= 24.9) {
      weightStatus = "healthy weight";
    } else if (BMI <= 29.9) {
      weightStatus = "overweight";
    } else if (BMI >= 30) {
      weightStatus = "obesity";
    }
    console.log(BMI);
    console.log(weightStatus);
    return weightStatus;
  }

  return (
    <div id="calclulate_basic">
      <h1>Calculated nutrition facts:</h1>
      <h2>BMI: {BMI}</h2>
      <p>Age: {props.age}<br />
        Weight: {props.weight}<br />
        Height: {props.height}<br />
        Gender: {props.gender}<br />
        You have a BMI of {BMI}.<br />
        Your score: {calcWeightStatus}.</p>
    </div>
  );
}