import { BookOpen, Calendar } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science And Engineering",
      institution: "Lovely Professional University",
      period: "2022 - 2026",
      location: "Phagwara, Punjab",
      description: "Specialized in web development and software engineering.",
      gpa: "7.26"
    },
    {
      degree: "Intermediate",
      institution: "Atam Vidya Mandir School",
      period: "2020 - 2021",
      location: "Ludhiana, Punjab",
      description: "Completed higher secondary education with focus on Mathematics and Science.",
      gpa: "7.5"
    },
    {
      degree: "Matriculation",
      institution: "Atam Vidya Mandir School",
      period: "2018 - 2019",
      location: "Ludhiana, Punjab",
      description: "Completed secondary education with distinction in core subjects.",
      gpa: "8.1"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
          darkMode ? 'text-green-300' : 'text-green-700'
        }`}>
          Education
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl ${
                darkMode ? 'bg-green-900/30' : 'bg-green-50'
              } backdrop-blur-sm transition-transform duration-300 hover:scale-102`}
            >
              <div className="md:flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className={`text-lg font-semibold mb-3 ${
                    darkMode ? 'text-green-300' : 'text-green-700'
                  }`}>{edu.institution}</p>
                </div>
                
                <div className="flex items-center gap-1 md:gap-3 mb-4 md:mb-0 text-sm opacity-80">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{edu.period}</span>
                  </div>
                  <span className="hidden md:inline mx-1">•</span>
                  <div className="flex items-center">
                    <BookOpen size={16} className="mr-1" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="opacity-90">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;