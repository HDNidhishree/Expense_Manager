import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ handleAddExpense }) => {
	const handleOnSaveExpenseData = (expenseData) => {
		const data = { ...expenseData, id: Math.random().toString() };
		handleAddExpense(data);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={handleOnSaveExpenseData} />
		</div>
	);
};

export default NewExpense;
