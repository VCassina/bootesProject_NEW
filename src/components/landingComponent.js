import React from "react";
import illustration from "../media/illustrationLandingWireframe.png";

function LandingComponent() {
  return (
    // <section className="massiveComponent_container massiveComponent_shadow relative">
    //   <svg className="svg-bg" id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1">
    //     <rect x="0" y="0" width="900" height="600" fill="#001220"></rect>
    //     <path d="M0 490L75 469.2C150 448.3 300 406.7 450 423.8C600 441 750 517 825 555L900 593L900 0L825 0C750 0 600 0 450 0C300 0 150 0 75 0L0 0Z" fill="#FA7268"></path>
    //   </svg>
    //   <article className="flex justify-between massiveComponent_limitation landingComponent items-center h-full relative">
    //     <div className="flex flex-col h-3/5 w-full items-center justify-evenly relative titlePromesse">
    //       <h1 className="">SITES VITRINES</h1>
    //       <p>Modernes et personnalisés à votre image</p>
    //     </div>
    //     <img src={illustration} alt="IMG sous crédit" />
    //   </article>
    // </section>

    // mb-48 temporaire pour simuler le contenu à venir.
    <section className="massiveComponent_container mb-48">
      <svg
        className="landingComponent_svg"
        viewBox="0 0 1280 688"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_27_483)">
          <path
            d="M-190.855 492.727C-417.221 259.397 196.206 -190.961 196.206 -190.961L660.967 -236L982.792 -199.969L1304.48 -52.995L1366 659.675C1366 659.675 74.1465 765.883 -190.855 492.727Z"
            fill="url(#paint0_linear_27_483)"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_27_483"
            x="-245"
            y="-236"
            width="1615"
            height="924"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_27_483"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_27_483"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_27_483"
            x1="493.5"
            y1="239"
            x2="571.242"
            y2="664.281"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#381A99" stop-opacity="0.95" />
            <stop offset="0.9997" stop-color="#5E2BFF" stop-opacity="0.95" />
          </linearGradient>
        </defs>
      </svg>
      <article className="flex justify-between massiveComponent_limitation landingComponent items-center h-full relative">
        <div className="flex flex-col h-3/5 w-full items-center justify-evenly relative titlePromesse">
          <h1 className="">SITES VITRINES</h1>
          <p>Modernes et personnalisés à votre image</p>
        </div>
        <img src={illustration} alt="IMG sous crédit" />
      </article>
    </section>
  );
}

export default LandingComponent;
