import { useState } from "react";
import InputBox from "./component/inputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  const convertCurrency = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="w-1/2 bg-cyan-100 p-4 rounded-xl ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convertCurrency();
          }}
        >
          <InputBox
            label={"From"}
            amount={amount}
            currency={from}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            currencyOption={currencyOptions}
          />
          <InputBox
            label={"To"}
            amount={convertedAmount}
            currency={to}
            onCurrencyChange={(currency) => setTo(currency)}
            readOnly={true}
            currencyOption={currencyOptions}
          />
          <button
            type="submit"
            className="w-full bg-blue-400 text-white cursor-pointer h-[2em] rounded-lg p-1"
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
