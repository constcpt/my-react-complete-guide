export default function Input({
  labelName,
  inputType,
  value,
  onInvestDataChange,
}) {
  function handleChange(event) {
    // const newValue = parseFloat(event.target.value);
    onInvestDataChange(inputType, event.target.value);
  }

  return (
    <p>
      <label>{labelName}</label>
      <input type="number" required value={value} onChange={handleChange} />
    </p>
  );
}
