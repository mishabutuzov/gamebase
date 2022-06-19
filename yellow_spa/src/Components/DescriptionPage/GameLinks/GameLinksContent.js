import React from "react";
import {GameLinksContentStyled} from "./gameLinksStyled";

function GameLinksContent({website, reddit_url}) {
  return (
      <div style={{position: "relative"}}>
        <GameLinksContentStyled>
          {website && (
              <>
                <h3>Website: </h3>
                <h4>
                  <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="desc__link"
                      href={website}>
                    {website}
                  </a>
                </h4>
              </>
          )}

          {reddit_url && (
              <>
                {" "}
                <h3>Reddit: </h3>
                <h4>
                  <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="desc__link"
                      href={reddit_url}>
                    {reddit_url}
                  </a>
                </h4>
              </>
          )}
        </GameLinksContentStyled>
      </div>
  );
}

export default GameLinksContent;
