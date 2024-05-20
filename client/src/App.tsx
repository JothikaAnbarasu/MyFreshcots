import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Home,
  ContactUs,
  CandidateRegister,
  EmployerRegister,
  VolunteerRegister,
  PageNotFound,
  CandidateProfile,
  CandidateHome,
  CandidateGetJob,
  CandidateHrScreening,
  CandidateTechnical,
} from "./pages";
import { Navbar, Footer } from "./components";
import { ScrollToAnchor, ScrollToTop } from "./util/helpers";
import CandidateWrapper from "./components/User/Candidate/CandidateWrapper";
import ChangePhoneNo from "./pages/userPages/candidate/ChangePhoneNo";
import ChangeEmail from "./pages/userPages/candidate/ChangeEmail";
import CandidateNavbar from "./components/User/Candidate/Navbar/CandiateNavbar";
// import { useAppSelector } from "./redux/store";
import { useLocation } from "react-router-dom";

const Layout = () => {
  // const { isUserAuthenticated } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToAnchor />
      <ScrollToTop />
      {/* {isUserAuthenticated ? <CandidateNavbar /> : <Navbar />} */}
      {pathname.split("/")[1] === "candidate" ? (
        <CandidateNavbar />
      ) : (
        <Navbar />
      )}
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/candidate-register/:category",
        element: <CandidateRegister />,
      },
      {
        path: "/volunteer-register/:category",
        element: <VolunteerRegister />,
      },
      {
        path: "/employer-register/:category",
        element: <EmployerRegister />,
      },
      {
        path: "/candidate/home",
        element: <CandidateWrapper component={CandidateHome} />,
      },
      {
        path: "/candidate/profile",
        element: <CandidateWrapper component={CandidateProfile} />,
      },
      {
        path: "/candidate/technical-interview",
        element: <CandidateWrapper component={CandidateTechnical} />,
      },
      {
        path: "/candidate/hr-screening",
        element: <CandidateWrapper component={CandidateHrScreening} />,
      },
      {
        path: "/candidate/get-offer",
        element: <CandidateWrapper component={CandidateGetJob} />,
      },
      {
        path: "/candidate/change-email",
        element: <ChangeEmail />,
      },
      {
        path: "/candidate/change-phoneNo",
        element: <ChangePhoneNo />,
      },
      {
        path: "/candidate/contact-us",
        element: <ContactUs />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
