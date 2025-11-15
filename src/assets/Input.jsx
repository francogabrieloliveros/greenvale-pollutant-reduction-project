function Input(props) {
  return (
    <div
      className="h-10 inline-flex items-center justify-start rounded-full overflow-hidden 
                 border-gray-400 border-2"
    >
      <label
        className="text-white h-full bg-gray-400 px-2 flex items-center"
        for={props.id}
      >
        {props.name}
        <sub>{props.sub}</sub>
        {props.name2}
        <p className="text-xs">(tons)</p>
      </label>
      <input
        className="bg-white w-full h-full text-center font-light text-gray-500"
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
