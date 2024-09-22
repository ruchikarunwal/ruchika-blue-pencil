import React from "react";
import designerImg from "../../public/designer_1.png";
import imgThird from "../assets/img_3.jpg";
import imgFourth from "../assets/img_4.jpg";
import imgFifth from "../assets/img_5.jpg";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import HomeSections from "../components/HomeSections";
import DescriptionWithIcon from "../components/DescriptionWithIcon";

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
      <div className="flex flex-col md:flex-row gap-6">
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
    descriptionFooter: <Button btnLabel="Purchase Now" />,
  },
];

const Home = () => {
  return (
    <>
      <div className="bg-none lg:bg-[url('../../public/designer_1.png')] lg:bg-no-repeat lg:h-dvh lg:bg-right lg:bg-contain">
        <NavBar />
        {/* Introduce Your Product Quickly & Effectively*/}
        <div className="flex flex-col-reverse md:flex-row gap-6 px-8 lg:px-40 py-10 lg:py-20">
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
              <Button btnLabel="Purchase UI Kit" />
              <Button
                btnLabel="Learn More"
                customTailwindStyle="bg-[white] text-blue-950 border-2"
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
    </>
  );
};

export default Home;
