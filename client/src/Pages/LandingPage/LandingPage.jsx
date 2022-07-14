import "./LandingPage.scss";

import { Discover, Profilebar, Searchbar, Sidebar } from "../../components";

export default function LandingPage() {
  return (
    <>
      <Sidebar />
      <div className="flex_container">
        <div className="main">
          <Searchbar />
          <Discover />
        </div>
        <Profilebar />
      </div>
    </>
  );
}
