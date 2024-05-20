import { RiStarSFill } from "react-icons/ri";

interface IHomeSectionHeadingProps {
  title: string;
  highlights: string[];
}

const HomeSectionHeading = (props: IHomeSectionHeadingProps) => {
  return (
    <div className="mb-8 flex flex-col items-center justify-center xl:mb-16">
      <div className="mb-2 text-lg font-semibold tracking-wide text-orange sm:text-2xl">
        {props.title}
      </div>

      <div className="flex items-center justify-center text-sm  font-medium leading-snug tracking-wide text-grey-600 sm:text-base sm:font-semibold sm:leading-normal">
        {props.highlights[0]}
        <span>
          <RiStarSFill className="mx-2 text-amber-400" />
        </span>
        {props.highlights[1]}

        <span>
          <RiStarSFill className="mx-2 text-amber-400" />
        </span>
        {props.highlights[2]}
      </div>
    </div>
  );
};

export default HomeSectionHeading;
