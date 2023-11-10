import React from "react";
import { Footer, Nav } from "../../components";
import HomeSvg from "../../assets/House.png";

function Home() {
  let navItem = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/blog", title: "Blogs" },
    { path: "/log-in", title: "LogIn" },
  ];
  return (
    <div>
      <Nav links={navItem} />
      <main className="max-h-[calc(100vh-49px-188px)]">
        <div>
          <img
            className="home_img mx-auto block max-h-[calc(100vh-49px-188px)]"
            src={HomeSvg}
            alt=""
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
