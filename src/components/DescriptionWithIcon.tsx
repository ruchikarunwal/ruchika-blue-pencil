import icon from "../assets/Icon.jpg";

const DescriptionWithIcon = ({
  title,
  description,
}: {
  // prop store title
  title: string;
  // prop to store description
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <img src={icon} />
      </div>
      <p className="text-base md:text-[16px] text-[#091133] font-medium">
        {title}
      </p>
      <p className="text-sm md:text-[14px] text-[#505F98]">{description}</p>
    </div>
  );
};

export default DescriptionWithIcon;
