import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, handleAddExpensesBtnClick }) => {
	const [inputValue, setInputValue] = useState({
		enteredTitle: "",
		enteredDate: "",
		enteredAmount: 0,
	});

	const handleInputChange = (event) => {
		setInputValue((prevstate) => {
			return { ...prevstate, [event.target.name]: event.target.value };
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const expenseData = {
			title: inputValue.enteredTitle,
			amount: inputValue.enteredAmount,
			date: new Date(inputValue.enteredDate),
		};

		setInputValue(() => {
			return {
				enteredTitle: "",
				enteredDate: "",
				enteredAmount: 0,
			};
		});

		onSaveExpenseData(expenseData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						name="enteredTitle"
						onChange={handleInputChange}
						value={inputValue.enteredTitle}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						name="enteredAmount"
						onChange={handleInputChange}
						value={inputValue.enteredAmount}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-02-19"
						max="2025-12-31"
						name="enteredDate"
						onChange={handleInputChange}
						value={inputValue.enteredDate}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={handleAddExpensesBtnClick}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
