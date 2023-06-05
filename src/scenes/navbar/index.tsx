/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "@/lottie/logo.json";

import Link from "./link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

import Lottie from "react-lottie"

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};


  // Header Animatioon
  const Logo = {
    loop: true,
    autoplay: true,
    animationData: logo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-secondary-400 drop-shadow";
  
    const lottieHeight = isAboveMediumScreens ? 90 : 75;
    const lottieWidth = isAboveMediumScreens ? 90 : 75;
    
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* LEFT - SIDE  */}
          <div className={`${flexBetween} w-full gap-16`}>
            <div className="flex items-center gap-10">
              <Lottie
                options={Logo}
                height={lottieHeight}
                width={lottieWidth}
              />
              {isAboveMediumScreens && (
                <>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </>
              )}
            </div>

            {/* RIGHT - SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} gap-8`}>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Get Free Fitness Advice
                </ActionButton>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="bottom fixed right-0 z-40 h-full w-[300px] bg-secondary-400 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* Menu Items */}
          <div className={`ml-[33%] flex flex-col gap-10 text-xl`}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );

};

export default Navbar;