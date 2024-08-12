import { useState } from "react";

const skills = [
  {
    name: "JavaScript",
    icon: "/assets/js-icon.png",
    description: "Experiência com desenvolvimento de aplicações web, etc.",
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  return (
    <section id="skills" className="skills">
      <h2>Conhecimentos</h2>
      <div className="skills-content">
        <div className="skills-icons">
          {skills.map((skill, index) => (
            <img
              key={index}
              src={skill.icon}
              alt={skill.name}
              onMouseEnter={() => setSelectedSkill(skill)}
              className="skill-icon"
            />
          ))}
        </div>
        <div className="skill-description">
          <h3>{selectedSkill.name}</h3>
          <p>{selectedSkill.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
