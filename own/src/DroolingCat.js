/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";

function DroolingCat() {
  const [isBored, setIsBored] = useState(true);
  const [isSticky, setSticky] = useState(false);
  const mouthRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      mouthRef &&
      mouthRef.current &&
      mouthRef.current.getBoundingClientRect()
    ) {
      if (mouthRef.current.getBoundingClientRect().bottom <= 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
  };

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 30 603"
        css={css`
          ${isSticky
            ? `position: fixed; top: 0;`
            : `position: absolute; top: 50%;  margin-top: 17%;`}
          width: 18px;
          left: 50%;
          margin-left: -9px;
        `}
      >
        <path
          fill="#B7CFFF"
          fillOpacity="0.6"
          d="M8.59 1.796S8.59 0 15 0s6.41 1.796 6.41 1.796v540.748c0 2.396 23.073 60.183-6.41 60.183s-6.41-60.183-6.41-60.183V1.797z"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 700 700"
        width="350"
        height="auto"
        onMouseEnter={() => setIsBored(false)}
        onMouseLeave={() => setIsBored(true)}
        css={css`
          width: 100%;
          max-width: 700px;
        `}
      >
        <path fill="#fff" d="M0 0h700v700H0z"></path>
        <mask
          id="a"
          style={{ maskType: "alpha" }}
          width="700"
          height="700"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="350" cy="350" r="350" fill="#E8F3FF"></circle>
        </mask>
        <g mask="url(#a)">
          <circle cx="350" cy="350" r="350" fill="#E8F3FF"></circle>
          <path
            fill="#2F356A"
            d="M100.216 498.639c65.082 1.904 68.488 114.76 92.454 141.242 23.966 26.482 44.364 26.627 44.364 26.627h30.143l5.349 53.254s-43.518 5.829-76.899-2.958c-33.38-8.787-58.801-80.426-75.953-127.078-21.44-58.315-50.295-25.191-69.678-31.831-19.384-6.639-31.132-61.635 50.22-59.256z"
          ></path>
          <path
            fill="#000"
            fillOpacity="0.4"
            d="M100.216 498.639c65.082 1.904 68.488 114.76 92.454 141.242 23.966 26.482 44.364 26.627 44.364 26.627h30.143l5.349 53.254s-43.518 5.829-76.899-2.958c-33.38-8.787-58.801-80.426-75.953-127.078-21.44-58.315-50.295-25.191-69.678-31.831-19.384-6.639-31.132-61.635 50.22-59.256z"
          ></path>
          <path
            fill="#2F356A"
            d="M286.369 772.381c-134.928-2.811-127.666-178.67-108.926-260.097C274.071 512.87 462 490 476.111 517.556 494.706 553.868 522 690 462 740l-175.631 32.381z"
          ></path>
          <path
            fill="#000"
            fillOpacity="0.2"
            d="M286.369 772.381c-134.928-2.811-127.666-178.67-108.926-260.097C274.071 512.87 462 490 476.111 517.556 494.706 553.868 522 690 462 740l-175.631 32.381z"
          ></path>
          <path
            fill="#2F356A"
            fillRule="evenodd"
            d="M47.496 355.873c0 92.496 74.983 167.479 167.48 167.479h268.97c92.496 0 167.479-74.983 167.479-167.479 0-92.496-74.983-167.479-167.479-167.479h-268.97c-92.497 0-167.48 74.983-167.48 167.479z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#2F356A"
            d="M210.437 114.256c-45.779-12.776-58.562 75.859-59.231 121.773L305.81 198.1c-12.717-22.625-49.594-71.068-95.373-83.844z"
          ></path>
          <path
            fill="#0D0E14"
            d="M213.831 136.39c-27.052-7.665-34.605 45.515-35.001 73.064l91.357-22.758c-7.514-13.574-29.305-42.64-56.356-50.306z"
          ></path>
          <path
            fill="#2F356A"
            d="M479.534 113.076c39.536-11.034 50.576 65.514 51.154 105.168l-151.251-17.043c10.982-19.539 60.561-77.091 100.097-88.125z"
          ></path>
          <path
            fill="#0D0E14"
            d="M473.15 139.965c23.362-6.621 29.886 39.308 30.228 63.1l-78.9-19.654c6.49-11.723 25.309-36.826 48.672-43.446z"
          ></path>
          <path
            ref={mouthRef}
            fill="#0D0E14"
            fillRule="evenodd"
            d="M323.252 462.377c-1.416 3.156-2.25 6.557-2.252 10.057 0 1.605.67 3.176 1.839 4.31a6.43 6.43 0 004.446 1.786h43.993c1.655 0 3.272-.65 4.443-1.786a6.039 6.039 0 001.841-4.31c-.014-5.251-1.851-10.271-4.812-14.597-2.974-4.318-7.131-8.003-12.221-10.348-3.39-1.554-7.213-2.491-11.248-2.489-6.067 0-11.595 2.099-16.017 5.255-4.437 3.17-7.877 7.393-10.012 12.122z"
            clipRule="evenodd"
          ></path>
          <mask
            id="b"
            style={{ maskType: "alpha" }}
            width="57"
            height="34"
            x="321"
            y="445"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M323.252 462.377c-1.416 3.156-2.25 6.557-2.252 10.057 0 1.605.67 3.176 1.839 4.31a6.43 6.43 0 004.446 1.786h43.993c1.655 0 3.272-.65 4.443-1.786a6.039 6.039 0 001.841-4.31c-.014-5.251-1.851-10.271-4.812-14.597-2.974-4.318-7.131-8.003-12.221-10.348-3.39-1.554-7.213-2.491-11.248-2.489-6.067 0-11.595 2.099-16.017 5.255-4.437 3.17-7.877 7.393-10.012 12.122z"
              clipRule="evenodd"
            ></path>
          </mask>
          <g mask="url(#b)">
            <path
              fill="#FF93D3"
              fillRule="evenodd"
              d="M323.361 475.388c-.582 1.094-.924 2.274-.925 3.487 0 .556.275 1.101.756 1.494.035.029.074.065.121.108.596.551 2.362 2.185 10.746 2.185s10.15-1.633 10.746-2.185c.047-.043.086-.079.121-.108.482-.393.757-.938.757-1.494-.006-1.821-.761-3.561-1.978-5.06-1.222-1.497-2.93-2.775-5.023-3.588a12.811 12.811 0 00-11.206.959c-1.824 1.099-3.237 2.563-4.115 4.202z"
              clipRule="evenodd"
            ></path>
          </g>
          <path
            fill="#FF93D3"
            d="M365.396 401.072c-3.428-7.401-28.567-7.828-31.233 0-1.651 5.124 9.649 15.656 15.362 15.371 5.841-.427 17.902-10.959 15.871-15.371z"
          ></path>
          <ellipse
            cx="227.193"
            cy="330.843"
            fill="#F0F3F8"
            rx="103.193"
            ry="103.225"
          ></ellipse>
          <ellipse
            cx="224.327"
            cy="322.241"
            fill="#0D0E14"
            rx="68.796"
            ry="68.817"
          ></ellipse>
          <ellipse
            cx="251.559"
            cy="286.399"
            fill="#fff"
            rx="32.965"
            ry="32.975"
          ></ellipse>
          <ellipse
            cx="280.223"
            cy="323.675"
            fill="#fff"
            rx="10.033"
            ry="10.036"
          ></ellipse>
          <ellipse
            cx="467.259"
            cy="323.675"
            fill="#F0F3F8"
            rx="103.193"
            ry="103.225"
          ></ellipse>
          <ellipse
            cx="467.259"
            cy="326.543"
            fill="#0D0E14"
            rx="68.796"
            ry="68.817"
          ></ellipse>
          <ellipse
            cx="494.492"
            cy="290.701"
            fill="#fff"
            rx="32.965"
            ry="32.975"
          ></ellipse>
          <ellipse
            cx="523.157"
            cy="327.977"
            fill="#fff"
            rx="10.033"
            ry="10.036"
          ></ellipse>
          {!isBored && (
            <>
              <path
                fill="#2F356A"
                d="M151.001 222h116l101.661 39.376-25.69 79.002L123 268.847 151.001 222z"
              ></path>
              <path
                fill="#2F356A"
                d="M505.051 198.102l-183.41 55.387 30.465 93.684 219.972-71.531-67.027-77.54z"
              ></path>
            </>
          )}

          {isBored && (
            <path
              fill="#2F356A"
              d="M571 322s-46.786-20.222-104.5-20.222S362 322 362 322c0-57.438 46.786-104 104.5-104S571 264.562 571 322zm-240.613-4.624s-46.202-20.071-103.194-20.071c-56.992 0-103.193 20.071-103.193 20.071 0-57.009 46.201-103.225 103.193-103.225s103.194 46.216 103.194 103.225z"
            ></path>
          )}
        </g>
      </svg>
    </div>
  );
}

export default DroolingCat;
