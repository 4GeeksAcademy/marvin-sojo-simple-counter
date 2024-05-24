import React from "react";
import Cards from "./Cards";


//create your first component
const SecondsCounter = (props) => {
	let hundredThousands = Math.floor((props.seconds % 1000000) / 100000);
	let tenThousands = Math.floor((props.seconds % 100000) / 10000);
	let oneThousands = Math.floor((props.seconds % 10000) / 1000);
	let hundreds = Math.floor((props.seconds % 1000) / 100);
	let tens = Math.floor((props.seconds % 100) / 10);
	let ones = props.seconds % 10;
  return (
    <div className="d-flex justify-content-center align-items-center p-3">
      <Cards icon={true} />
      <Cards num={hundredThousands} />
      <Cards num={tenThousands} />
      <Cards num={oneThousands} />
      <Cards num={hundreds} />
      <Cards num={tens} />
      <Cards num={ones} />
    </div>
  );
};

export default SecondsCounter;
