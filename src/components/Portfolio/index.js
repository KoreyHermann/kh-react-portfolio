import React from "react";
import dndEncounterCreator from "../../assets/small/dndencountercreator.png";
import noteTaker from "../../assets/small/notetaker.PNG";
import rolliePollies from "../../assets/small/rolliepollies.PNG";
import weatherDashboard from "../../assets/small/weatherdashboard.PNG";
import workdayScheduler from "../../assets/small/workdayscheduler.PNG";


function Portfolio() {
  return (
    <div>
      <section id="work" className="apps">
        <div className="flex-row">
          <h2 className="section-title secondary-border">My Applications</h2>
        </div>

        <div className="app">
          <div className="app-info">
            <div className="app-img">
              <a href="https://github.com/tanvirkhon/dnd-encounter-creator">
                {" "}
                <img
                  src={dndEncounterCreator}
                  className="my-2"
                  style={{ width: "60%"  }}
                  alt="Dnd-Encounter-Creator"
                />
              </a>
            </div>
            <div className="app-text">
              <h4>DnD Encounter Creator</h4>
              <p>
              An API based application that allows a user to create, modify, and save combat encounters for Dungeons and Dragons 5th Edition.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="app">
          <div className="app-info">
            <div className="app-img">
              <a href="https://github.com/KoreyHermann/rollie-pollies">
                {" "}
                <img
                  src={rolliePollies}
                  className="my-2"
                  style={{ width: "60%" }}
                  alt="Rollie-Pollies"
                />
              </a>
            </div>
            <div className="app-text">
              <h4>Rollie Pollies</h4>
              <p>
              An application that utilizes Node.js, Express.js, Sequelize, and MySQL to create an interface that allows the user to create an account in order to create and host polls that users can vote on.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="app">
          <div className="app-info">
            <div className="app-img">
              <a href="https://github.com/KoreyHermann/express.js-note-taker">
                {" "}
                <img
                  src={noteTaker}
                  className="my-2"
                  style={{ width: "60%" }}
                  alt="note-taker"
                />
              </a>
            </div>
            <div className="app-text">
              <h4>Note Taker</h4>
              <p>
              An application that allows the user to save, edit, and delete notes stored locally.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="app">
          <div className="app-info">
            <div className="app-img">
              <a href="https://github.com/KoreyHermann/weather-dashboard">
                {" "}
                <img
                  src={weatherDashboard}
                  className="my-2"
                  style={{ width: "60%" }}
                  alt="weather-dashboard"
                />
              </a>
            </div>
            <div className="app-text">
              <h4>Weather Dashboard</h4>
              <p>
              An HTML and Javascript application that uses a weather API to allow a user to enter a city and see the current weather, plus a weather forecast for the next five days.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="app">
          <div className="app-info">
            <div className="app-img">
              <a href="https://github.com/KoreyHermann/work-day-scheduler">
                {" "}
                <img
                  src={workdayScheduler}
                  className="my-2"
                  style={{ width: "60%" }}
                  alt="workday-scheduler"
                />
              </a>
            </div>
            <div className="app-text">
              <h4>Workday Scheduler</h4>
              <p>
              An application that allows the user to create and manage an hour-by-hour daily schedule.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
