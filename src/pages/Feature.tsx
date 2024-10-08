import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { featureList } from "../utils/featureList";
import HomeSections from "../components/HomeSections";
import DescriptionWithIcon from "../components/DescriptionWithIcon";

const Feature = () => {
  // extracting param from the react router useParam hook
  const { id } = useParams();

  // const to store the feature data based on feature id param
  const featureData = featureList.find((ele) => ele.featureId === Number(id));

  return (
    <div className="flex flex-col">
      <NavBar />
      {featureData ? (
        <div className="h-full md:h-[98vh] overflow-hidden mb-10">
          <HomeSections
            title={featureData.title}
            description={featureData.description}
            descriptionFooter={
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featureData.subSections.map((section) => {
                  return (
                    <DescriptionWithIcon
                      title={section.title}
                      description={section.description}
                    />
                  );
                })}
              </div>
            }
            imgUrl={featureData.imgUrl as string}
            isImgAtStart={featureData.isImgAtStart}
            containerStyle="items-start"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Feature;
