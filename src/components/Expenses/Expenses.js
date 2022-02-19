import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2022");

	const handleOnYearFilterChange = (year) => {
		setFilteredYear(year);
	};

	return (
		<Card className="expenses">
			<ExpenseFilter
				onYearFilterChange={handleOnYearFilterChange}
				year={filteredYear}
			/>
			{props.expenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					date={expense.date}
					amount={expense.amount}
				/>
			))}
		</Card>
	);
};

export default Expenses;
