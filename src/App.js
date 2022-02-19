import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
	const [expenses, setExpenses] = useState([]);

	const handleAddExpense = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<h2 style={{ textAlign: "center", color: "white" }}>
				My Expense Manager
			</h2>
			<NewExpense onAddExpense={handleAddExpense} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
