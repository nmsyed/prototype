/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from "react";

import OwlCarousel from "react-owl-carousel2";

import Countdown from "react-countdown";

import Question from "../Question/Question";

import Stats from "../Stats/Stats";

import i18n from "../../../i18n";

import { HomeService } from "../../_Services";

import { withTranslation } from "react-i18next";

// import Header from './Header';
// import Footer from './Footer';
import "react-owl-carousel2/src/owl.carousel.css";

import "react-owl-carousel2/lib/styles.css";

import "./Machine.css";
import { loadLanguages } from "i18next";
import { func } from "prop-types";
import MenuItems from "../Menu/Menu";

// Programs items config for carousel
const options = {
  items: 2,
  // nav: true,
  // rewind: true,
  autoplay: false,
};

// Speed and temp items config for carousel
const opts = {
  items: 5,
  // nav: true,
  // rewind: true,
  autoplay: false,
};

const events = {};

class Machine extends React.Component {
  constructor(props) {
    //new Date().getTime()
    super(props);
    /* Initiate Sate values of the Componenet */
    this.state = {
      lang: "en",
      feedback: false,
      settings: false,
      language: false,
      qustion: false,
      start: false,
      program: false,
      temparature: false,
      speed: false,
      wash: false,
      extras: false,
      run: false,
      spin: false,
      success: false,
      zoom: false,
      activeQ: 1,
      q: [],
      programs: [],
      speeds: [],
      temps: [],
      store: [],
      stats: [],
      fullstats: [],
      data: {
        startTime: new Date().getTime(),
        program: 1,
        question: 1,
        programName: "Automatic plus",
        temparature: 20,
        speed: 1600,
        extras: "",
        workflow: [],
      },
    };
  }

  // Renderer callback with condition and select Next question and run Process again
  renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      this.setState({ spin: false, success: true });

      if (this.state.activeQ == 2) {
        var userData = this.state.data;

        userData.endTime = new Date().getTime();

        this.setState(
          (prevState) => ({
            store: [...prevState.store, userData],
          }),
          function () {
            /* Saving the transaction for particular question*/
            this.saveTrans();
          }
        );
        /* Showing feed back after all questions completed*/
        setTimeout(() => {
          this.setState({ success: false, feedback: true }, function () {
            this.userStats();
          });
        }, 1000);
        // alert('Thanks for providing feedback');
      } else
        setTimeout(() => {
          /* Processing to Next Question*/
          this.setState({ activeQ: this.state.activeQ + 1 });

          var userData = this.state.data;

          console.log(userData);

          userData.endTime = new Date().getTime();

          this.setState(
            (prevState) => ({
              store: [...prevState.store, userData],
            }),
            function () {
              //rest the default data for question
              this.setState((prevData) => ({
                data: {
                  program: 1,
                  startTime: new Date().getTime(),
                  programName: "Automatic plus",
                  temparature: 20,
                  speed: 1600,
                  extras: "",
                  workflow: [],
                  question: prevData.data.question + 1,
                },
              }));
            }
          );

          this.setDefault();
        }, 1000);

      return "<span ClassName='blink'>program Completed !</span>";
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  // rest data if machine off
  setDefault = () => {
    this.setState(
      {
        feedback: false,
        settings: false,
        language: false,
        qustion: false,
        start: true,
        program: false,
        temparature: false,
        speed: false,
        wash: false,
        extras: false,
        run: false,
        spin: false,
        success: false,
        zoom: false,
        stats: [],
        startTime: new Date().getTime(),
        //  fullstats: [],
        workflow: [],
      },
      function () {
        this.setGraph();
      }
    );
  };
  //rest data
  reset = () => {
    this.setState(
      {
        feedback: false,
        settings: false,
        language: false,
        qustion: false,
        start: false,
        program: false,
        temparature: false,
        speed: false,
        wash: false,
        extras: false,
        run: false,
        spin: false,
        success: false,
        zoom: false,
        activeQ: 1,
        q: [],
        stats: [],
        //  fullstats: [],
        // programs : [],
        //speeds : [],
        //temps : [],
        store: [],
        data: {
          startTime: new Date().getTime(),
          program: 1,
          question: 1,
          programName: "Automatic plus",
          temparature: 20,
          speed: 1600,
          extras: "NONE",
          workflow: [],
        },
      },
      function () {
        this.setGraph();
      }
    );
  };
  /* start and stop machine*/
  startMachine = () => {
    //  if (!this.state.qustion) return;
    this.setState({ start: !this.state.start }, function () {
      if (this.state.start === false) {
        this.reset();
      }
    });

    //  this.props.setLoginWidgetAction("show_block");
  };
  /* Window Operations Start */
  selectHome = () => {
    this.setState(
      {
        // start: false,
        settings: false,
        language: false,
        qustion: false,
        feedback: false,
        program: false,
        temparature: false,
        speed: false,
        wash: false,
        extras: false,
        run: false,
        spin: false,
        success: false,
      },
      function () {
        this.setGraph();
      }
    );
    console.log(this.state);
  };

  selectProgramDetail = () => {
    this.setState(
      {
        // start: false,
        feedback: false,
        settings: false,
        language: false,
        qustion: false,

        program: true,
        temparature: false,
        speed: false,
        wash: false,
        extras: false,
        run: false,
        spin: false,
        success: false,
      },
      function () {
        this.setGraph();
      }
    );
  };
  showMachine = () => {
    this.setState({ qustion: true });
  };

  selectWash = (id) => {
    console.log(id);

    const data = this.state.programs.filter((data) => {
      return parseInt(data.pid) === parseInt(id);
    });
    let temp = [];
    let speed = [];
    if (data.length > 0) {
      temp = data[0].temp.split(",");
      speed = data[0].speed.split(",");
    }
    this.setState((prevData) => ({
      data: {
        ...prevData.data,
        program: id,
        programName: data[0].pname,
      },
      temps: temp,
      speeds: speed,
    }));

    // workflow
    this.setState((prevData) => ({
      data: {
        ...prevData.data,
        workflow: [
          ...prevData.data.workflow,
          {
            screen: "washing",
            value: data[0].pname,
            time: new Date().getTime(),
          },
        ],
      },
    }));

    this.setState({ wash: true });
  };

  selectProgram = () => {
    this.setState({ program: true, wash: false }, function () {
      this.setGraph();
    });
  };
  selectExtra = () => {
    this.setState({ extras: true }, function () {
      this.setGraph();
    });
  };

  updateTemparature = (temparature) => {
    this.setState((prevData) => ({
      data: {
        ...prevData.data,
        temparature: temparature,
      },
    }));

    this.setState((prevData) => ({
      data: {
        ...prevData.data,
        workflow: [
          ...prevData.data.workflow,
          {
            screen: "temparature",
            value: temparature,
            time: new Date().getTime(),
          },
        ],
      },
    }));
  };

  updateExtras = (extra) => {
    this.setState((prevData) => ({
      data: {
        ...prevData.data,
        extras: extra,
      },
    }));

    // workflow
    this.setState((prevData) => ({
      data: {
        ...prevData.data,
        workflow: [
          ...prevData.data.workflow,
          {
            screen: "extra",
            value: extra,
            time: new Date().getTime(),
          },
        ],
      },
    }));
  };

  updateSpeed = (speed) => {
    this.setState((prevData) => ({
      data: {
        ...prevData.data,
        speed: speed,
      },
    }));

    // workflow
    this.setState((prevData) => ({
      data: {
        ...prevData.data,
        workflow: [
          ...prevData.data.workflow,
          {
            screen: "speed",
            value: speed,
            time: new Date().getTime(),
          },
        ],
      },
    }));
  };

  selectTemparature = () => {
    this.setState({ temparature: true }, function () {
      this.setGraph();
    });
  };

  selectSpeed = () => {
    this.setState({ speed: true }, function () {
      this.setGraph();
    });
  };

  selectRun = () => {
    this.setState({ run: true, spin: true });
  };
  showSettings = () => {
    this.setState({ settings: true });
  };
  showLanguage = () => {
    this.setState({ language: true });
  };
  changeLanguage = (lang) => {
    this.setState({ lang: lang });
    i18n.changeLanguage(lang);
  };

  changeQ = (q) => {
    this.setState({ changeQ: q });
  };
  /* Window Operations End */
  /* Saving The user Transactions*/
  saveTrans = () => {
    let userData = { data: this.state.store };

    HomeService.submitTransaction(userData)
      .then((res) => {
        if (res.data.status === "success") {
        } else {
          //setErrorMessage(res.data.msg);
        }
        /// setLoading(false);
      })
      .catch((err) => {
        // setLoading(false);
        if (err.response !== undefined) {
          setErrorMessage(err.response.data.msg);
        }
      });
  };
  //featching the programs through REST API CALLS
  fetchPrograms = () => {
    HomeService.fetchProgrms()
      .then((res) => {
        this.setState({ programs: res.data.data }, function () {});
      })
      .catch((err) => {});
  };
  //featching the stats through REST API CALLS
  userStats = () => {
    HomeService.userStats()
      .then((res) => {
        var stats = [];
        res.data.data.forEach(function (value) {
          //  stats.push([value.programName, value.programStats]);
          stats.push(value);
        });

        this.setState({ fullstats: stats }, function () {
          this.setGraph();
        });
      })
      .catch((err) => {});
  };

  /* Arranging UI Stats data*/
  setGraph = () => {
    // var stats = [["Program", "Total"]];
    var stats = [];
    var { temparature, speed, extras } = this.state;
    var { program, question } = this.state.data;

    var filterStats = this.state.fullstats.filter((s) => {
      if (!temparature && !speed && !extras)
        return parseInt(s.question) == parseInt(question);
      else if (temparature || speed || extras)
        return (
          parseInt(s.question) == parseInt(question) &&
          parseInt(s.pid) == parseInt(program)
        );
    });

    var graphFormat = [];
    var name = "";
    var stateValue = 0;
    filterStats.forEach(function (value) {
      name =
        !temparature && !speed && !extras
          ? value.programName
          : temparature
          ? value.temp.toString()
          : extras
          ? value.extraWash
          : value.speed.toString();
      stateValue = value.totalStats;

      var ret = graphFormat.findIndex((st) => st[0] === name);
      if (ret > -1) graphFormat[ret][1] += parseInt(graphFormat[ret][1]);
      else if (name !== "NONE") graphFormat.push([name, parseInt(stateValue)]);
    });

    var mergeStats = stats.concat(graphFormat);

    this.setState({ stats: mergeStats }, function () {});
  };

  /*Zoom IN AND Zoom our window*/
  zoomWindow = () => {
    this.setState({ zoom: !this.state.zoom });
  };

  back = () => {
    const {
      settings,

      program,
      language,
      wash,
      extras,
      temparature,
      speed,
    } = this.state;

    console.log(program, language, wash, extras, temparature, speed, settings);
    if (
      (program || language || settings) &&
      !wash &&
      !extras &&
      !temparature &&
      !speed
    ) {
      this.selectHome();
    } else if (wash || extras || temparature || speed) {
      this.selectProgramDetail();
    }
  };

  componentDidMount() {
    //featching the programs and user stats for showing sats throug REST API CALLS
    this.fetchPrograms();
    this.userStats();
    this.showMachine();

    // setting the languages
    this.setState({ lang: this.props.i18n.language });
  }

  render() {
    const {
      feedback,
      start,
      program,
      settings,
      language,
      wash,
      extras,
      run,
      spin,
      success,
      programs,
      data,
      temps,
      speeds,
      temparature,
      speed,
      lang,
      activeQ,
      stats,
      zoom,
    } = this.state;
    const { t } = this.props;

    console.log(programs);
    return (
      <>
        {/* Menu Ites Section Start */}
        <MenuItems />
        {/* Menu Ites Section End */}
        {/* Question & Stats Section Start */}
        {start ? (
          <div className="left">
            <Question
              showMachine={this.showMachine}
              activeQ={activeQ}
              changeQ={this.changeQ}
            />
            {program ? (
              <div className="charts">
                <Stats
                  stats={stats}
                  temparature={this.state.temparature}
                  speed={this.state.speed}
                  extras={this.state.extras}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

        {/* Question & Stats Section End */}

        {/* Washing Machine Start*/}

        <div className="right">
          <div className="bg-img">
            <div className="row align-items-center wash-img-mar">
              <div className={`wash-img ${zoom ? "blur" : ""}`}>
                <img src="images/washingmachine.png" alt="bg" />
              </div>

              {run ? (
                <div className="spin-img ">
                  <img
                    className={spin ? "image-rotate" : "image-rotate-off"}
                    alt="back"
                    src="images/spin-img.png"
                  />
                </div>
              ) : (
                ""
              )}

              {!run && start ? (
                <div className="spin-img ">
                  <img
                    className="image-rotate-off"
                    alt="back"
                    src="images/cloth-img.png"
                  />
                </div>
              ) : (
                ""
              )}

              <div className="stop-icon ">
                {start ? (
                  <a href="#" className="" onClick={this.startMachine}>
                    <img className="" src="images/start-icon.png" alt="test" />
                  </a>
                ) : (
                  <a href="#" onClick={this.startMachine}>
                    <img src="images/stiop-img.png" alt="test" />
                  </a>
                )}
              </div>

              {success ? (
                <div className="completed">
                  <span className="blink">{t("Program Completed")}</span>
                </div>
              ) : (
                ""
              )}

              {feedback ? (
                <div className="completed">
                  <span className="blink">
                    {t("Thank you for your valuable feedback")}
                  </span>
                </div>
              ) : (
                ""
              )}

              {run && spin ? (
                <div className="timer">
                  {/* Timer start once machine started */}
                  <Countdown
                    date={Date.now() + 4000}
                    renderer={this.renderer}
                  />
                </div>
              ) : (
                ""
              )}

              <div className={`main-screen ${zoom ? "main-screen-zoom" : ""}`}>
                {start && !run ? (
                  <>
                    <div className="home-menu">
                      <ul className="home-icons">
                        <li>
                          <a
                            href="javascript:void(0)"
                            onClick={this.selectHome}
                          >
                            <img
                              src="images/Home.png"
                              className="home"
                              alt="test"
                            />
                          </a>
                        </li>
                        <li>
                          {!program ? t("Home") : ""}
                          {program && !wash && !temparature && !speed
                            ? "Programme"
                            : ""}
                          {wash && !extras && !temparature && !speed
                            ? "Programme"
                            : ""}
                          {extras ? "Extras" : ""}
                          {speed ? "Speed" : ""}
                          {temparature ? "Temparature" : ""}
                        </li>
                      </ul>
                      <div className="return-icon">
                        <ul className="">
                          <li className="zoomtext">
                            <a
                              href="javascript:void(0)"
                              onClick={this.zoomWindow}
                            >
                              {!zoom ? t("Zoom In") : t("Zoom Out")}
                            </a>
                          </li>
                          {program || language || settings ? (
                            <li>
                              <a href="javascript:void(0)" onClick={this.back}>
                                <img src="images/return.png" alt="test" />
                              </a>
                            </li>
                          ) : (
                            ""
                          )}
                        </ul>
                      </div>
                    </div>

                    {program && !wash ? (
                      <div className="baumwolee">
                        <div className="baumwolee-main">
                          <OwlCarousel options={options} events={events}>
                            {programs.map((item, ind) => (
                              <div className="baumwolee-icon">
                                <a
                                  href="javascript:void(0)"
                                  className={` ${
                                    data.program == item.pid ? "active" : ""
                                  }`}
                                  onClick={() => this.selectWash(item.pid)}
                                >
                                  <img src="images/baumwolee.png" />
                                  <p>{t(item.pname)}</p>
                                  <p className="std">2.39 Std</p>
                                </a>
                              </div>
                            ))}
                          </OwlCarousel>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {!program && !settings ? (
                      <div className="carouselslide">
                        {/* <Header /> */}
                        <OwlCarousel options={options} events={events}>
                          <div className="program active">
                            <a
                              href="javascript:void(0)"
                              onClick={this.selectProgram}
                              className="active"
                            >
                              <img src="images/icon-1.png" alt="Programme" />
                            </a>
                          </div>
                          <div className="favorite">
                            <a
                              href="javascript:void(0)"
                              onClick={this.selectRun}
                            >
                              <img src="images/play.png" alt="Programme" />
                            </a>
                          </div>
                          <div className="mobile-control">
                            <a href="#">
                              <img
                                src="images/setting.png"
                                alt="settings"
                                onClick={this.showSettings}
                              />
                            </a>
                          </div>
                        </OwlCarousel>
                      </div>
                    ) : (
                      ""
                    )}

                    {settings && !language ? (
                      <div className="baumwolee">
                        <div className="baumwolee-main">
                          <div className="baumwolee-icon baumwolee-temp">
                            <a
                              href="javascript:void(0)"
                              className="active"
                              onClick={this.showLanguage}
                            >
                              <img src="images/baumwolee.png" />
                              <p>{t("Language")}</p>
                              <p className="std">&nbsp;</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {language ? (
                      <div className="baumwolee">
                        <div className="baumwolee-main">
                          <div className="baumwolee-icon baumwolee-temp">
                            <a
                              href="javascript:void(0)"
                              className={lang == "en" ? "active" : ""}
                              onClick={() => this.changeLanguage("en")}
                            >
                              <img src="images/baumwolee.png" />
                              <p>English</p>
                              <p className="std">&nbsp;</p>
                            </a>
                          </div>
                          <div className="baumwolee-icon baumwolee-temp">
                            <a
                              href="javascript:void(0)"
                              className={lang == "es" ? "active" : ""}
                              onClick={() => this.changeLanguage("es")}
                            >
                              <img src="images/baumwolee.png" />
                              <p>German</p>
                              <p className="std">&nbsp;</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {temparature ? (
                      <div className="carouselslide quick-wash temparature">
                        {/* <Header /> */}
                        <OwlCarousel options={opts} events={events}>
                          {temps.map((item, ind) => (
                            <div className="program">
                              <a
                                href="javascript:void(0)"
                                onClick={() => this.updateTemparature(item)}
                                className={`speed ${
                                  item == data.temparature ? "active" : ""
                                }`}
                              >
                                {item}
                              </a>
                            </div>
                          ))}
                        </OwlCarousel>
                      </div>
                    ) : (
                      ""
                    )}

                    {speed ? (
                      <div className="carouselslide quick-wash speedlimit">
                        {/* <Header /> */}
                        <OwlCarousel options={opts} events={events}>
                          {speeds.map((item, ind) => (
                            <div className="program">
                              <a
                                href="javascript:void(0)"
                                onClick={() => this.updateSpeed(item)}
                                className={`speed ${
                                  item == data.speed ? "active" : ""
                                }`}
                              >
                                {item}
                              </a>
                            </div>
                          ))}
                        </OwlCarousel>
                      </div>
                    ) : (
                      ""
                    )}

                    {wash && !extras && !temparature & !speed ? (
                      <div className="baumwolee">
                        <div className="baumwolee-main">
                          <div className="baumwolee-icon baumwolee-temp">
                            <a href="javascript:void(0)" className="active">
                              <img src="images/baumwolee.png" />
                              <p>{t(data.programName)}</p>
                              <p className="std">2.39 Std</p>
                            </a>
                          </div>
                          <div className="Baumwolee-temparatur">
                            <div className="temparatur">
                              <ul>
                                <li>
                                  <a
                                    href="javascript:void(0)"
                                    onClick={this.selectTemparature}
                                  >
                                    <p className="tem">Temparatur</p>
                                    <p className="">{data.temparature} c</p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0)"
                                    onClick={this.selectSpeed}
                                  >
                                    <p className="dreh">Drehzahl</p>
                                    <p>{data.speed} U/min</p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="extras-text">
                              <ul>
                                <li>
                                  <a
                                    href="javascript:void(0)"
                                    onClick={this.selectExtra}
                                  >
                                    <p className="extras">Extras</p>
                                    <p className="extra-text">{data.extras}</p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {extras ? (
                      <div className="carouselslide quick-wash extras">
                        {/* <Header /> */}
                        <OwlCarousel options={options} events={events}>
                          <div className="program ">
                            <a
                              href="javascript:void(0)"
                              onClick={() => this.updateExtras("Quick")}
                              className={`program stopwatch ${
                                "Quick" == data.extras ? "active" : ""
                              }`}
                            >
                              <img src="images/stopwatch.png" alt="stopwatch" />

                              <p>Quick</p>
                            </a>
                          </div>
                          <div className="favorite">
                            <a
                              href="javascript:void(0)"
                              onClick={() => this.updateExtras("Single Wash")}
                              className={`program single ${
                                "Single Wash" == data.extras ? "active" : ""
                              }`}
                            >
                              <img
                                src="images/single-wash.png"
                                alt="Programme"
                              />

                              <p>Single Wash</p>
                            </a>
                          </div>
                          <div className="mobile-control">
                            <a
                              href="javascript:void(0)"
                              onClick={() => this.updateExtras("Water+")}
                              className={`program water ${
                                "Water+" == data.extras ? "active" : ""
                              }`}
                            >
                              <img src="images/water.png" alt="Programme" />

                              <p>Water+</p>
                            </a>
                          </div>
                        </OwlCarousel>
                      </div>
                    ) : (
                      ""
                    )}

                    {program || language ? (
                      <div className="ok-button">
                        <a href="javascript:void(0)" onClick={this.selectHome}>
                          Ok
                        </a>
                      </div>
                    ) : (
                      ""
                    )}

                    {(wash && !extras && !temparature & !speed) ||
                    extras ||
                    temparature ||
                    speed ? (
                      <div className="ok-button">
                        <a
                          href="javascript:void(0)"
                          onClick={this.selectProgramDetail}
                        >
                          Ok
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-3">&nbsp;</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withTranslation(["translation"])(Machine);
