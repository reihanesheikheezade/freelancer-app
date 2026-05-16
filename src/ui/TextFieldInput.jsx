function TextFieldInput({label,name,value,onchange}) {
  return (
    <div>
      <label className="block mb-2 text-secondary-700 " htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        onChange={onchange}
        value={value}
        id={name}
        className="textField__input"
        autoComplete="off"
      />
    </div>
  );
}

export default TextFieldInput;
