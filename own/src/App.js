/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import DroolingCat from "./DroolingCat";
import CatIpsum from "./CatIpsum";

export default function App() {
  return (
    <div
      css={css`
        font-family: "Hi Melody", cursive;
        padding: 2em;
        background: #ebf5ff;
      `}
    >
      <div
        css={css`
          padding: 2em;
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            flex-direction: column;
            text-align: center;
          `}
        >
          <DroolingCat />
          <div>
            <h1>Are you spying me?</h1>
            <h2>Please do not read my private notes!</h2>
          </div>
        </div>

        <div>
          <CatIpsum />
        </div>

        <p>In loving memory of Mr. Bimbo ❤️</p>
      </div>
    </div>
  );
}
