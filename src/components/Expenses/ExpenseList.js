import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({ filteredExpenses }) => {
	if (filteredExpenses.length === 0) {
		return <h2 className="expenses-list__fallback">No expenses found</h2>;
	}

	return (
		<ul className="expenses-list">
			{filteredExpenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					date={expense.date}
					amount={expense.amount}
				/>
			))}
		</ul>
	);
};

export default ExpenseList;
