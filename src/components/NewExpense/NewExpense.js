import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
	const [addExpensebtnClick, setAddExpensebtnClick] = useState(false);

	const handleOnSaveExpenseData = (expenseData) => {
		const data = { ...expenseData, id: Math.random().toString() };
		onAddExpense(data);
	};

	const handleAddExpensesBtnClick = () => {
		setAddExpensebtnClick((prevState) => !prevState);
	};

	return (
		<div className="new-expense">
			{addExpensebtnClick ? (
				<ExpenseForm
					onSaveExpenseData={handleOnSaveExpenseData}
					handleAddExpensesBtnClick={handleAddExpensesBtnClick}
				/>
			) : (
				<button onClick={handleAddExpensesBtnClick}>Add Expense</button>
			)}
		</div>
	);
};

export default NewExpense;
