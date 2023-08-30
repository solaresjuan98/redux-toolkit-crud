import "./App.css";
import { TransactionForm } from "./components/TransactionForm";
import TransactionList from './components/TransactionList'

function App() {
  return (
    <div>
      <h1>
        Transaction list
      </h1>
      <TransactionForm />
      <TransactionList />
    </div>
  );
}

export default App;
