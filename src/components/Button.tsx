const Button = ({
  btnLabel,
  customTailwindStyle,
}: {
  btnLabel: string;
  customTailwindStyle?: string;
}) => {
  return (
    <button
      className={`bg-[#111b47] text-white text-[12px] font-medium leading-[18px] py-2 w-[160px] rounded-[2px] border-[#111b47] ${customTailwindStyle}`}
    >
      {btnLabel}
    </button>
  );
};

export default Button;
