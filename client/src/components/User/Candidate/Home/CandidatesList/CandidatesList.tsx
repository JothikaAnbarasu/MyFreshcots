import CandidatesCardsWrapper from "./CandidatesCardsWrapper";

const CandidatesList = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-grey-30 pb-[2.125rem] pt-6 tracking-wide sm:py-8">
      <h2 className="mb-10 text-center text-xl font-medium tracking-wide text-orange sm:mb-12">
        Candidates
      </h2>

      <CandidatesCardsWrapper />
    </div>
  );
};

export default CandidatesList;
