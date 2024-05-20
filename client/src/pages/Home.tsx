import { Hero, Candidate, Volunteer, Employer } from "../components";

const Home = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-pageBg">
      <Hero />
      <Candidate />
      <Volunteer />
      <Employer />
    </div>
  );
};

export default Home;
