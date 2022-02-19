import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);

	const handleClick = () => {
		setTitle("update!");
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">
					&#8377;
					{props.amount}
				</div>
			</div>
			<button onClick={handleClick}>click here!</button>
		</Card>
	);
}

export default ExpenseItem;