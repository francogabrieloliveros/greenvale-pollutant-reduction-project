function Input(props) {
  return (
    <div className="inline-flex h-10 items-center justify-start overflow-hidden rounded-full border-2 border-gray-400">
      <label
        className="flex h-full items-center bg-gray-400 px-2 text-white"
        for={props.id}
      >
        {props.name}
        <sub>{props.sub}</sub>
        {props.name2}
        <p className="text-xs">(tons)</p>
      </label>
      <input
        className="h-full w-full bg-white text-center font-light text-gray-500"
        type="number"
        id={props.id}
        value={props.amount}
        onChange={(e) => props.setAmount(e)}
        min={0}
      />
    </div>
  );
}

export default Input;
