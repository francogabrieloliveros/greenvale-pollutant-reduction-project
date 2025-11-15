function MitigationButton(props) {
  return (
    <button
      className={`${
        props.pressed ? "bg-[#428F47] text-white" : "bg-white text-[#428F47]"
      } flex h-30 flex-col justify-between rounded-xl p-2 shadow-[2px_2px_3px_rgba(0,0,0,0.2)] transition-all hover:scale-102`}
      onClick={() => props.setButtonsPressed()}
    >
      <p>{props.name}</p>
      <p className="block text-right">{`$${props.cost}`}</p>
    </button>
  );
}

export default MitigationButton;
