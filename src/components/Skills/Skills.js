import "./Skills.css";
import { useState } from "react";
import { SkillData } from "./skillData";

const Skills = () => {
  const [click, setClick] = useState([
    {
      id: 1,
      open: true,
    },
    {
      id: 2,
      open: false,
    },
    {
      id: 3,
      open: false,
    },
    {
      id: 4,
      open: false,
    },
  ]);

  const handleClick = (index) => {
    console.log(index);
    let newClick = [...click];
    newClick.forEach((n) => {
      if (n.id === index + 1) {
        n.open = !n.open;
      }
    });
    setClick(newClick);
  };

  return (
    <section className="container section" id="skill">
      <div className="skill-title">
        <h4 className="title-text mb-2">Skills</h4>
        <p className="para-text">Things I'm capable of</p>
      </div>

      <div className="skill-container">
        {SkillData.map((data, index) => {
          return (
            <div
              key={data.id}
              onClick={() => handleClick(index)}
              className={`skill mb-4 ${click[index].open ? "open" : ""}`}
            >
              <div className="skill-heading">
                <i className={`${data.icon} me-2`}></i>
                <h5 className="third-title-text">{data.title}</h5>
                <i
                  className={`uil skill-toggle ${
                    click[index].open ? "uil-angle-up" : "uil-angle-down"
                  }`}
                ></i>
              </div>

              <div className="skill-list">
                {data.skillList.map((skill) => {
                  var percent = skill.percentage + "%";
                  return (
                    <div key={skill.name} className="skill-holder">
                      <div className="skill-text">
                        <p className="para-text">{skill.name}</p>
                        <p className="para-text">{skill.percentage}%</p>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-percentage"
                          style={{ width: percent }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
