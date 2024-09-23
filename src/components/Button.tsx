const Button = ({
  btnLabel,
  customTailwindStyle,
  onClick,
}: {
  btnLabel: string;
  customTailwindStyle?: string;
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
