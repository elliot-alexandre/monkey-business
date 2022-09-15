import ReactGA from "react-ga";

export const initGA = (trackingID: string) => {
  ReactGA.initialize(trackingID);
};

export const PageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};
