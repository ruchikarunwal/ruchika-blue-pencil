const HomeSections = ({
  title,
  description,
  descriptionFooter,
  imgUrl,
  isImgAtStart = false,
  containerStyle,
}: {
  title: string;
  description: JSX.Element | null;
  descriptionFooter?: JSX.Element;
  imgUrl: string;
  // prop use to store boolean value which decide whether img is at start of row or not
  isImgAtStart?: boolean;
  // prop use to pass custom style for outer container (div) of the component
  containerStyle?: string;
}) => {
  return (
    <div
      className={`flex gap-6 flex-col px-8 lg:px-40 py-10 lg:py-20 justify-between ${
        isImgAtStart ? "md:flex-row-reverse" : "flex-col md:flex-row"
      } ${containerStyle}`}
    >
      <div className="flex flex-col gap-4 md:gap-8 lg:w-[45%]">
        <p className="text-2xl lg:text-3xl text-[#091133]">{title}</p>
        <p className="text-sm md:text-[16px] text-[#505F98] mb-4">
          {description}
        </p>
        <div>{descriptionFooter}</div>
      </div>
      <div>
        <img src={imgUrl} className="object-contain" />
      </div>
    </div>
  );
};

export default HomeSections;
