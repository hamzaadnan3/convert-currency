import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  currency,
  onAmountChange,
  onCurrencyChange,
  readOnly,
  currencyOption = [],
}) => {
  const id = useId();
  return (
    <div className="w-full gap-2 flex justify-between bg-white mb-2 rounded-xl p-3">
      <div className="w-1/2 flex flex-col gap-1">
        <label htmlFor={id} className="text-gray-500">
          {label}
        </label>
        <input
          className="border-gray-500 border-[2px] p-1 rounded-lg"
          type="text"
          id={id}
          placeholder="Amount"
          readOnly={readOnly}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-col gap-1">
        <label htmlFor="Currency" className="text-gray-500">
          Currency
        </label>
        <select
          className="border-gray-500 border-[2px] p-1 rounded-lg"
          id="Currency"
          value={currency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyOption?.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
