import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar";
import Calculator from "./Components/Calculator";
import { useState } from "react";
import Result from "./Components/Result";

function App() {
  const [results, setResults] = useState({
    monthlyPayment: null,
    totalPayment: null,
    totalInterest: null,
});

  return (
    <div className="dark:bg-gray-800 bg-slate-100 dark:text-white text-black flex flex-col min-h-screen">
      <Toaster/>
        <Navbar/>
        <Calculator  setResults={setResults}/>
        <Result results={results}/>
    </div>
  );
}

export default App;
