import React from "react";
import KHResume from "../../assets/small/KHResume.PNG";

function Resume() {
  return (
    
    <div>
        <div className="flex-row">
          <h2 className="section-title primary-border">My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={KHResume} className="download-logo" download>
              </a>
              <img
                  src={KHResume}
                  className="my-2"
                  style={{ width: "100%"  }}
                  alt="Korey-Hermann-Resume"
                />
            </div>
          </div>
        </div>
</div>

  );
}

export default Resume;
