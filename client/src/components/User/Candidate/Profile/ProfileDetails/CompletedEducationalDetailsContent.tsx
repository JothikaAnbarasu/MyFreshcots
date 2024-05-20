import mobileEditIconSvg from "../../../../../assets/images/mobileEditIcon.svg";

const CompletedEducationalDetailsContent = () => {
  const tempContent = {
    institute: "Aarupadai Veedu Institute of Technology",
    state: "Tamilnadu",
    city: "Kanchipuram",
    course: "Bachelor of Engineering ",
    department: "CSE",
    duration: {
      fromMonth: "Aug", 
      fromYear: "2018",
      toMonth: "July",
      toYear: "2022",
    },
    courseType: "Full Time",
    cgpa: "8.5", //optional
    currentStudent: false, //optional
  };
  return (
    <div className="flex w-full flex-col gap-3 tracking-wide">
      <h3 className="flex text-sm font-medium text-grey-750 sm:text-base">
        <p className="do-text-wrap ">
          {" "}
          {tempContent.course}({tempContent.department})
        </p>
        <img
          src={mobileEditIconSvg}
          alt="edit"
          className="ml-2 block h-fit w-fit cursor-pointer "
        />
      </h3>
      <h4 className="do-text-wrap flex text-sm font-normal text-grey-750 sm:text-base ">
        {tempContent.institute}, {tempContent.state}, {tempContent.city}
      </h4>
      <div className="text-xs font-normal text-grey-550 sm:text-sm  ">
        {tempContent.duration.fromMonth} {tempContent.duration.fromYear} -{" "}
        {tempContent.duration.toMonth} {tempContent.duration.toYear},{" "}
        {tempContent.courseType}
      </div>

      <div className="text-xs font-normal text-grey-550 sm:text-sm  ">
        {tempContent.cgpa && <>CGPA - {tempContent.cgpa}/10 </>}
        {tempContent.currentStudent && <> (current student) </>}
      </div>
    </div>
  );
};

export default CompletedEducationalDetailsContent;
