import { BookOpen, Code, Briefcase } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
          darkMode ? 'text-green-300' : 'text-green-700'
        }`}>
          About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`${
            darkMode ? 'bg-green-900/30' : 'bg-green-50'
          } rounded-xl p-6 backdrop-blur-sm transition-transform duration-300 hover:scale-105`}>
            <div className={`w-16 h-16 rounded-full ${
              darkMode ? 'bg-green-900/50' : 'bg-green-100'
            } flex items-center justify-center mb-4`}>
              <Code size={28} className={darkMode ? 'text-green-300' : 'text-green-700'} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Developer</h3>
            <p className="opacity-80">
              A passionate full stack developer with a focus on building efficient, scalable, and user-friendly applications.
            </p>
          </div>
          
          <div className={`${
            darkMode ? 'bg-green-900/30' : 'bg-green-50'
          } rounded-xl p-6 backdrop-blur-sm transition-transform duration-300 hover:scale-105`}>
            <div className={`w-16 h-16 rounded-full ${
              darkMode ? 'bg-green-900/50' : 'bg-green-100'
            } flex items-center justify-center mb-4`}>
              <Briefcase size={28} className={darkMode ? 'text-green-300' : 'text-green-700'} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional</h3>
            <p className="opacity-80">
              Experienced in Java, JavaScript, C++ and web technologies with a strong foundation in problem-solving and teamwork.
            </p>
          </div>
          
          <div className={`${
            darkMode ? 'bg-green-900/30' : 'bg-green-50'
          } rounded-xl p-6 backdrop-blur-sm transition-transform duration-300 hover:scale-105`}>
            <div className={`w-16 h-16 rounded-full ${
              darkMode ? 'bg-green-900/50' : 'bg-green-100'
            } flex items-center justify-center mb-4`}>
              <BookOpen size={28} className={darkMode ? 'text-green-300' : 'text-green-700'} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Continuous Learner</h3>
            <p className="opacity-80">
              Always exploring new technologies and methodologies to enhance my skills and stay current in the field.
            </p>
          </div>
        </div>
        
        <div className={`mt-12 p-8 rounded-xl ${
          darkMode ? 'bg-green-900/20' : 'bg-green-50/80'
        } backdrop-blur-sm`}>
          <p className="text-lg leading-relaxed mb-4">
            I am a dedicated Full Stack developer with experience in building web applications using ReactJs, JavaScript, and various frameworks and libraries. My journey in software development began with a strong foundation in computer science principles, which I've applied to deliver efficient and scalable solutions.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I'm passionate about clean code, user experience, and staying updated with the latest industry trends. I enjoy tackling complex problems and finding elegant solutions that balance technical requirements with user needs.
          </p>
          <p className="text-lg leading-relaxed">
            When I'm not coding, I enjoy participating in coding communities, contributing to open-source projects, and continuously expanding my knowledge through courses and self-study.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;