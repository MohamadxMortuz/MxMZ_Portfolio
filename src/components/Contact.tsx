import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields.',
        isError: true
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: 'Please enter a valid email address.',
        isError: true
      });
      return;
    }
    
    // In a real application, you would send the form data to a server here
    // For demonstration, we'll just show a success message
    setFormStatus({
      message: 'Your message has been sent successfully!',
      isError: false
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Clear status message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
          darkMode ? 'text-green-300' : 'text-green-700'
        }`}>
          Contact Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-lg mb-8 opacity-90">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${
                  darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'
                } mr-4`}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href="mailto:md.mortuz001@gmail.com" 
                    className={`hover:${darkMode ? 'text-green-300' : 'text-green-700'} transition-colors duration-200`}
                  >
                    md.mortuz001@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${
                  darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'
                } mr-4`}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>+91 7986338945</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${
                  darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'
                } mr-4`}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p>Ludhiana, Punjab, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-green-900/30' : 'bg-green-50'
            } backdrop-blur-sm`}>
              <h3 className="text-xl font-semibold mb-6">Send Message</h3>
              
              {formStatus && (
                <div className={`p-4 mb-6 rounded-lg ${
                  formStatus.isError 
                    ? darkMode ? 'bg-red-900/50 text-red-200' : 'bg-red-100 text-red-800'
                    : darkMode ? 'bg-green-800/50 text-green-200' : 'bg-green-100 text-green-800'
                }`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium">Name*</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-lg ${
                        darkMode 
                          ? 'bg-green-900/50 border border-green-800 text-white focus:border-green-500' 
                          : 'bg-white border border-green-200 text-gray-800 focus:border-green-500'
                      } outline-none transition-colors duration-200`}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">Email*</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-lg ${
                        darkMode 
                          ? 'bg-green-900/50 border border-green-800 text-white focus:border-green-500' 
                          : 'bg-white border border-green-200 text-gray-800 focus:border-green-500'
                      } outline-none transition-colors duration-200`}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg ${
                      darkMode 
                        ? 'bg-green-900/50 border border-green-800 text-white focus:border-green-500' 
                        : 'bg-white border border-green-200 text-gray-800 focus:border-green-500'
                    } outline-none transition-colors duration-200`}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-1 font-medium">Message*</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg ${
                      darkMode 
                        ? 'bg-green-900/50 border border-green-800 text-white focus:border-green-500' 
                        : 'bg-white border border-green-200 text-gray-800 focus:border-green-500'
                    } outline-none transition-colors duration-200`}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`px-6 py-3 rounded-lg ${
                    darkMode 
                      ? 'bg-green-700 text-white hover:bg-green-600' 
                      : 'bg-green-600 text-white hover:bg-green-700'
                  } transition-colors duration-200 flex items-center gap-2 font-medium`}
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;