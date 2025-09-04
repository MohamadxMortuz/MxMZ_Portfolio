interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Java", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 80 },
        { name: "Python", level: 70 },
        { name: "PHP", level: 65 }
      ]
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "HTML, CSS", level: 85 },
        { name: "ReactJS", level: 80 },
        { name: "ExpressJS", level: 80 },
        { name: "NodeJS", level: 80 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      name: "Tools & Technologies",
      skills: [

        { name: "Docker", level: 70 },
        { name: "MySql", level: 75 },
        { name: "MongoDB", level: 75 }
        
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
          darkMode ? 'text-green-300' : 'text-green-700'
        }`}>
          Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`rounded-xl p-6 ${
                darkMode ? 'bg-green-900/30' : 'bg-green-50'
              } backdrop-blur-sm`}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{category.name}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="opacity-80">{skill.level}%</span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${
                      darkMode ? 'bg-green-900/50' : 'bg-green-200'
                    }`}>
                      <div 
                        className={`h-full rounded-full ${
                          darkMode ? 'bg-green-400' : 'bg-green-600'
                        }`} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 p-8 rounded-xl ${
          darkMode ? 'bg-green-900/20' : 'bg-green-50/80'
        } backdrop-blur-sm`}>
          <h3 className="text-xl font-semibold mb-4">Additional Skills</h3>
          <div className="flex flex-wrap gap-3">
            {["Problem Solving", "Team Collaboration", 
              "Cross-browser Compatibility",
              "3D Modelling", "Graphic Designing", "Version Control"].map((skill, index) => (
              <span 
                key={index} 
                className={`px-4 py-2 rounded-full ${
                  darkMode 
                    ? 'bg-green-800/40 text-green-200' 
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;