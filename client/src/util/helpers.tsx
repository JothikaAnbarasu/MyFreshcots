import { useState, useEffect, useRef, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const Timer = ({ delayResend = 59 }) => {
  const [delay, setDelay] = useState(delayResend);
  let minutes = Math.floor(delay / 60);
  let seconds = Math.floor(delay % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <span>
        {minutes}:{seconds}
      </span>
    </>
  );
};

export const ScrollToAnchor = ({ offset = 80 }) => {
  const location = useLocation();
  const lastHash = useRef("");

  // listen to location change using useEffect with location as dependency
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        const element = document.getElementById(lastHash.current);
        if (element) {
          const offsetTop = element.offsetTop - offset;
          window.scrollTo({
            behavior: "smooth",
            top: offsetTop,
          });
          lastHash.current = "";
        }
      }, 100);
    }
  }, [location, offset]);

  return null;
};

interface AOSInitializerProps {
  children: ReactNode;
}

export const AOSInitializer = ({ children }: AOSInitializerProps) => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      startEvent: "DOMContentLoaded",
    });
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return <>{children}</>;
};

export const getYearsArray = (startYear: number, stopYear?: number) => {
  const currentYear = new Date().getFullYear();
  if (!stopYear) {
    stopYear = currentYear;
  }

  const years = [];

  for (let year = stopYear; year >= startYear; year--) {
    years.push({ value: year.toString(), label: year.toString() });
  }
  return years;
};

// Prevent typing whitespace at the beginning
export const preventInputSpace = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === " " && e.currentTarget.selectionStart === 0) {
    e.preventDefault();
  }
};

export const formatCount = (count: number) => {
  if (count >= 1e24) {
    if (count % 1e24 === 0) {
      return count / 1e24 + "Y";
    } else {
      return (count / 1e24).toFixed(1) + "Y+";
    }
  } else if (count >= 1e21) {
    if (count % 1e21 === 0) {
      return count / 1e21 + "Z";
    } else {
      return (count / 1e21).toFixed(1) + "Z+";
    }
  } else if (count >= 1e18) {
    if (count % 1e18 === 0) {
      return count / 1e18 + "E";
    } else {
      return (count / 1e18).toFixed(1) + "E+";
    }
  } else if (count >= 1e15) {
    if (count % 1e15 === 0) {
      return count / 1e15 + "P";
    } else {
      return (count / 1e15).toFixed(1) + "P+";
    }
  } else if (count >= 1e12) {
    if (count % 1e12 === 0) {
      return count / 1e12 + "T";
    } else {
      return (count / 1e12).toFixed(1) + "T+";
    }
  } else if (count >= 1e9) {
    if (count % 1e9 === 0) {
      return count / 1e9 + "G";
    } else {
      return (count / 1e9).toFixed(1) + "G+";
    }
  } else if (count >= 1e6) {
    if (count % 1e6 === 0) {
      return count / 1e6 + "M";
    } else {
      return (count / 1e6).toFixed(1) + "M+";
    }
  } else if (count >= 1e3) {
    if (count % 1e3 === 0) {
      return count / 1e3 + "k";
    } else {
      return Math.floor(count / 1e3) + "k+";
    }
  } else {
    if (count >= 100) {
      return Math.floor(count / 100) * 100 + "+";
    } else {
      return count.toString();
    }
  }
};
