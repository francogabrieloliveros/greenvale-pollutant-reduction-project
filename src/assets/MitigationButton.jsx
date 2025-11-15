function MitigationButton(props) {
  return (
    <button
      className={`${props.pressed ? "bg-[#428F47] text-white" : "bg-white text-[#428F47]"} 
                  h-30 hover:scale-102 transition-all rounded-xl shadow-[2px_2px_3px_rgba(0,0,0,0.2)] 
                  flex flex-col justify-between p-2`}
      onClick={() => props.setButtonsPressed()}
    >
      <p>{props.name}</p>
      <p className="block text-right">{`$${props.cost}`}</p>
    </button>
  );
}

export default MitigationButton;
