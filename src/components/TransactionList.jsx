import {
  useGetTransactionsQuery,
  useDeleteTransactionMutation,
} from "../api/apiSlice";

function TransactionList() {
  const [deleteTransaction] = useDeleteTransactionMutation();
  const {
    data: transactions,
    isError,
    isLoading,
    error,
  } = useGetTransactionsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id} className="card">
          <h3>{transaction.descripcion}</h3>

          <p>
            <span
              className="transaction_type"
              style={{
                background:
                  transaction.tipo === "gasto" ? "#F01A64" : "#1AF061",
              }}
            >
              {transaction.tipo}
            </span>
            - Q. {transaction.monto}
          </p>

          <button
            className="btn btn_delete"
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            Delete
          </button>
          <input type="checkbox" name="completed" id="" />
          <label htmlFor="">Checked</label>
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;
