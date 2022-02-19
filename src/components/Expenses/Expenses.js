import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2019");

	const filteredExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	const handleOnYearFilterChange = (year) => {
		setFilteredYear(year);
	};

	return (
		<li>
			<Card className="expenses">
				<ExpenseFilter
					onYearFilterChange={handleOnYearFilterChange}
					year={filteredYear}
				/>
				<ExpenseList filteredExpenses={filteredExpenses} />
			</Card>
		</li>
	);
};

export default Expenses;
