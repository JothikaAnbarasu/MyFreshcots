import SkillChip from "./ProfileDetailsForms/SkillChip";

const CompletedKeySkillsContent = () => {
  const tempContent = {
    defaultSkills: [
      { skillName: "Communication", rating: 4 },
      { skillName: "Critical thinking", rating: 3 },
      { skillName: "Personality", rating: 2 },
    ],
    primarySkill: { skillName: "User Experience Design", rating: 4 },
    secondarySkill: { skillName: "DBMS", rating: 3 },
    otherSkills: ["RDBMS", "MySQL", "Azure"],
  };  
  return (
    <div className="flex flex-col items-start justify-center gap-6">
      <div>
        <h6 className="mb-[0.875rem] text-[0.813rem] font-medium tracking-wide text-grey-550 sm:text-base">
          Default
        </h6>
        <div className="flex flex-wrap gap-2">
          {tempContent.defaultSkills.map(({ skillName, rating }, i) => {
            return (
              <SkillChip
                skillName={skillName}
                rating={rating}
                key={i}
                showRating={true}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h6 className="mb-[0.875rem] text-[0.813rem] font-medium tracking-wide text-grey-550 sm:text-base">
          Primary Skill
        </h6>

        <div>
          <SkillChip
            skillName={tempContent.primarySkill.skillName}
            rating={tempContent.primarySkill.rating}
            showRating={true}
          />
        </div>
      </div>
      <div>
        <h6 className="mb-[0.875rem] text-[0.813rem] font-medium tracking-wide text-grey-550 sm:text-base">
          Secondary Skill
        </h6>

        <div>
          <SkillChip
            skillName={tempContent.secondarySkill.skillName}
            rating={tempContent.secondarySkill.rating}
            showRating={true}
          />
        </div>
      </div>
      <div>
        <h6 className="mb-[0.875rem] text-[0.813rem] font-medium tracking-wide text-grey-550 sm:text-base">
          Other Skills
        </h6>

        <div className="flex flex-wrap gap-2">
          {tempContent.otherSkills.map((skillName, i) => {
            return <SkillChip skillName={skillName} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CompletedKeySkillsContent;
