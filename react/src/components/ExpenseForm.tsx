import { useState } from 'react';

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function ExpenseForm() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [form, setForm] = useState({
    description: '',
    amount: '',
    category: 'Food'
  });
  const [nextId, setNextId] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.description && form.amount) {
      const newExpense: Expense = {
        id: nextId,
        description: form.description,
        amount: parseFloat(form.amount),
        category: form.category
      };
      setExpenses([...expenses, newExpense]);
      setNextId(nextId + 1);
      setForm({ description: '', amount: '', category: 'Food' });
    }
  };

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const categories = ['Food', 'Transportation', 'Utilities', 'Entertainment', 'Other'];

  return (
    <div className="card my-5">
      <div className="card-body">
        <h3 className="card-title mb-4">Expense Tracker</h3>

        <form onSubmit={handleSubmit} className="mb-5">
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={form.description}
              onChange={handleInputChange}
              placeholder="Enter expense description"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              value={form.amount}
              onChange={handleInputChange}
              placeholder="Enter amount"
              step="0.01"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select
              className="form-select"
              id="category"
              name="category"
              value={form.category}
              onChange={handleInputChange}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        {expenses.length > 0 && (
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-light">
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map(expense => (
                  <tr key={expense.id}>
                    <td>{expense.description}</td>
                    <td>${expense.amount.toFixed(2)}</td>
                    <td>{expense.category}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(expense.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                <tr className="table-active fw-bold">
                  <td colSpan={1}>Total</td>
                  <td>${totalAmount.toFixed(2)}</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {expenses.length === 0 && (
          <p className="text-muted text-center">No expenses added yet. Start tracking!</p>
        )}
      </div>
    </div>
  );
}

export default ExpenseForm;
