import React from "react";

export const Highlight = ({ highlightedArt, myWallCount, setMyWallCount }) => {
  //import hightlighted state, read state and populate a div with bigArtCard
  // add minus button to remove art from wall

  if (!highlightedArt) {
    return (
      <div className="highlight-header">
        <h4>Click an artwork on your wall to learn more</h4>
      </div>
    );
  } else {
    return (
      <div>
        <div className="highlight-header">
          <h4>Artwork Information:</h4>
        </div>
        <div className="highlight-boundary">
          <div className="highlight-card">
            <div className="highlight-image-box">
              <img className="highlight-image" src={highlightedArt.image_url} />
            </div>
            <div className="highlight-info">
              <p>
                <b>{highlightedArt.title}</b>
                <br />
                <i>({highlightedArt.date})</i>
              </p>
              <p>
                by
                <b> {highlightedArt.artist}</b>
              </p>
              <p>
                Art Type:
                <b> {highlightedArt.type}</b>
              </p>
              <p>
                Where to see it:
                <b>
                  <br />
                  {highlightedArt.location}
                </b>
              </p>
              <p>
                <b>Description: </b>
                <br />
                {highlightedArt.medium}
                <br />
                {highlightedArt.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

//<b>Medium: </b> {highlightedArt.medium}
