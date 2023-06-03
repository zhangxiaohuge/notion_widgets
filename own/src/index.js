import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Global
      styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        h1,
        h2 {
          line-height: 1.2;
        }
        h1 {
          font-size: 3em;
        }
        h2 {
          font-size: 2em;
          padding-bottom: 0.5em;
        }
        p {
          line-height: 1.5;
          font-size: 1.3em;
          padding-bottom: 1em;
        }
      `}
    />
    <App />
  </StrictMode>
);
