import React from "react";
import Square from "./Square";

function Board({ arr, clickFunction }) {
	return (
		<div className="grid-container">
			{arr.map((ele, idx) => (
				<Square key={idx} ele={ele} id={idx} clickFunction={clickFunction} />
			))}
		</div>
	);
}

export default Board;
