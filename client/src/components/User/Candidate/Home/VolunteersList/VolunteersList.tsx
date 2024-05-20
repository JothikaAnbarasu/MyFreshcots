import VolunteersCardsWrapper from "./VolunteersCardsWrapper";

const VolunteersList = () => {
  return (
    <div className=" mb-20 flex w-full flex-col items-center justify-center bg-grey-30 pb-[2.125rem] pt-6 tracking-wide sm:mb-12 sm:py-8">
      <h2 className="mb-10 text-center text-xl font-medium tracking-wide text-orange sm:mb-12">
        Volunteers
      </h2>
      <VolunteersCardsWrapper />
    </div>
  );
};

export default VolunteersList;
