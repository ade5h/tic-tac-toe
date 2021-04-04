import React from "react";

function Square({ ele, id, clickFunction }) {
	return (
		<button className="grid-item" onClick={() => clickFunction(id)}>
			{ele}
		</button>
	);
}

export default Square;
