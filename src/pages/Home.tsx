import designerImg from "../../public/designer_1.png";
import imgThird from "../assets/img_3.jpg";
import imgFourth from "../assets/img_4.jpg";
import imgFifth from "../assets/img_5.jpg";
import Rectangle from "../assets/Rectangle.jpg";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import HomeSections from "../components/HomeSections";
import DescriptionWithIcon from "../components/DescriptionWithIcon";
import Footer from "../components/Footer";
import { featureList } from "../utils/featureList";
import { useNavigate } from "react-router-dom";

// const use to store sections data on home screen other than hero section
const homeSectionData = [
  {
    title: "Light, Fast & Powerful",
    description: (
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus <br />
        <br />
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
        sem. Nulla consequat massa quis enim.
      </p>
    ),
    imgUrl: imgFifth,
    isImgAtStart: false,
    descriptionFooter: (
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        <DescriptionWithIcon
          title="Title Goes Here"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
        />
        <DescriptionWithIcon
          title="Title Goes Here"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
        />
      </div>
    ),
  },
  {
    title: "Light, Fast & Powerful",
    description: (
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus <br />
        <br />
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
        sem. Nulla consequat massa quis enim.
      </p>
    ),
    imgUrl: imgThird,
    isImgAtStart: true,
  },
  {
    title: "Light, Fast & Powerful",
    description: (
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus <br />
        <br />
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
        sem. Nulla consequat massa quis enim.
      </p>
    ),
    imgUrl: imgFourth,
    isImgAtStart: true,
  },
  {
    title: "Light, Fast & Powerful",
    description: (
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus <br />
        <br />
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
        sem. Nulla consequat massa quis enim.
      </p>
    ),
    imgUrl: imgFifth,
    isImgAtStart: true,
    descriptionFooter: (
      <Button
        btnLabel="Purchase Now"
        customTailwindStyle="mb-4"
        onClick={() => {}}
      />
    ),
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col bg-none lg:bg-[url('../../public/designer_1.png')] lg:bg-no-repeat lg:h-dvh lg:bg-right lg:bg-contain">
        <NavBar />

        {/* Introduce Your Product Quickly & Effectively*/}
        <div className="flex flex-col-reverse md:flex-row gap-6 px-8 lg:px-40 py-6 lg:py-20">
          <div className="flex flex-col gap-8 lg:w-[45%] lg:pt-20">
            <p className="text-3xl lg:text-5xl text-[#091133]">
              Introduce Your Product Quickly & Effectively
            </p>
            <p className="text-base md:text-[18px] text-[#505F98]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              <br />
              <br /> mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <div className="flex gap-8">
              <Button btnLabel="Purchase UI Kit" onClick={() => {}} />
              <Button
                btnLabel="Learn More"
                customTailwindStyle="text-[black] bg-[white] border-2"
                onClick={() => {}}
              />
            </div>
          </div>
          <div className="md:mt-14 lg:hidden ">
            <img src={designerImg} className="object-contain" />
          </div>
        </div>
      </div>

      {/* section other than hero section starts */}
      {homeSectionData.map((section) => {
        return (
          <HomeSections
            title={section.title}
            description={section.description}
            imgUrl={section.imgUrl}
            isImgAtStart={section.isImgAtStart}
            descriptionFooter={
              section.descriptionFooter ? section.descriptionFooter : undefined
            }
          />
        );
      })}

      {/* Purchase Section */}
      <div
        style={{
          backgroundImage: `url(${Rectangle})`,
        }}
        className="flex flex-col w-full pb-10 object-cover items-center justify-center"
      >
        <p className="text-2xl md:text-3xl font-bold text-[#091133] my-3 mt-28">
          A Price To Suit Everyone
        </p>
        <p className="text-[16px] text-center font-[400] text-[#6F7CB2] w-[80%] md:w-[38%]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </p>
        <p className="text-5xl mt-10 font-bold text-[#222F65] my-3">$40</p>
        <p className="text-[16px] font-semibold text-[#37447E]">
          UI Design Kit
        </p>

        <p className="mt-14 mb-2 text-[#5D6970]">See, One price. Simple.</p>
        <Button btnLabel="Purchase Now" onClick={() => {}} />

        {/* Feature Section */}
        <p className="mt-10 mb-4 text-[#5D6970]">Checkout our Features</p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-evenly">
          {featureList.map((feature) => {
            return (
              <Button
                btnLabel={`Feature-${feature.featureId}`}
                onClick={() => {
                  navigate(`/feature/${feature.featureId}`);
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
