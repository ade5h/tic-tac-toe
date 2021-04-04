import React, { useState } from "react";
import Board from "./Board";

function Game() {
	const [xTurn, setXTurn] = useState(true);
	const [vals, setVals] = useState(Array(9).fill(null));
	const [message, setMessage] = useState("X's turn");
	const [winner, setWinner] = useState(null);

	let checkWinner = () => {
		const winningPatterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (const [p, q, r] of winningPatterns) {
			let a = vals[p];
			let b = vals[q];
			let c = vals[r];

			if (a !== null && a === b && b === c) return a;
		}

		return null;
	};

	let isDraw = () => {
		let flag = true;
		vals.forEach((x) => {
			if (x === null) {
				flag = false;
			}
		});
		return flag;
	};

	let clickFunction = (idx) => {
		if (vals[idx] != null || winner != null) return;

		let newArr = vals;
		newArr[idx] = xTurn ? "X" : "O";
		let newMessage = xTurn ? "O's Turn" : "X's Turn";

		setVals([...newArr]);
		setXTurn(!xTurn);
		setMessage(newMessage);

		if (isDraw()) {
			console.log("Inside Draw");
			setMessage("Draw!");
		} else if (checkWinner() != null) {
			//winner found
			console.log("Winner Found");
			let w = checkWinner();
			setWinner(w);

			if (w === "X") setMessage("X is the Winner!");
			else setMessage("O is the Winner");
		}
	};

	return (
		<>
			<div>
				<Board arr={vals} clickFunction={clickFunction} />
			</div>
			<h1>{message}</h1>
		</>
	);
}

export default Game;
