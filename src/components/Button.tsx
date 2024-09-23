const Button = ({
  btnLabel,
  customTailwindStyle,
  onClick,
}: {
  // prop use to pass label of button
  btnLabel: string;
  // prop use to pass custom style for the button
  customTailwindStyle?: string;
  // prop use to pass on click handler for button
  onClick: () => void;
}) => {
  return (
    <button
      className={`text-[#ffffff] text-[12px] font-medium bg-[#111b47] leading-[18px] py-2 w-[160px] rounded-[2px] border-[#111b47] ${customTailwindStyle}`}
      onClick={onClick}
    >
      {btnLabel}
    </button>
  );
};

export default Button;
