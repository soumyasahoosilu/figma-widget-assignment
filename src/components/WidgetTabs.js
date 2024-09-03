import React, { useState } from 'react';

const tabs = ['About Me', 'Experiences', 'Recommended'];

function WidgetTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex space-x-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 focus:outline-none ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeTab === 'About Me' && (
          <div>
            <h2 className="text-xl font-bold">Hello! I'm Soumya.</h2>
            <p className="mt-2">
              I'm a passionate fresher pursuing my Master's in Computer Applications (MCA). I'm eager to kickstart my career in tech, with a particular interest in web development and software engineering. My journey in tech has just begun, and I'm constantly learning and growing my skills. I look forward to contributing to exciting projects and being a part of an innovative team.
            </p>
          </div>
        )}
        {activeTab === 'Experiences' && (
          <div>
            <h2 className="text-xl font-bold">My Experiences</h2>
            <p className="mt-2">
              During my MCA program, I've worked on several projects that have helped me build a strong foundation in software development:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <strong>E-Commerce Web Application:</strong> Developed a full-stack e-commerce web application using React.js, Node.js, and MongoDB. Integrated user authentication and secure payment gateways.
              </li>
              <li>
                <strong>Job-Seeking Application:</strong> Created a MERN stack application to help users find and apply for jobs, featuring a chat system and a resume-building tool.
              </li>
              <li>
                <strong>Spotify Clone:</strong> Built a music streaming app that mimics core features of Spotify, using React and the Spotify API.
              </li>
              
              <li>
                <strong>Self-Learning:</strong> I have also completed online courses in web development, focusing on JavaScript, React, and backend technologies.
              </li>
            </ul>
            <p className="mt-2">
              These experiences have equipped me with a solid understanding of modern web development practices, and I'm eager to apply these skills in a professional setting.
            </p>
          </div>
        )}
        {activeTab === 'Recommended' && (
          <div>
            <h2 className="text-xl font-bold">Recommendations</h2>
            <ul className="list-disc list-inside mt-2">
              <li>
                <strong>FreeCodeCamp:</strong> A great platform for learning web development and earning certifications. I recommend starting with the JavaScript and Front-End Libraries sections.
              </li>
              <li>
                <strong>MDN Web Docs:</strong> The go-to resource for web development documentation. It's particularly helpful for learning JavaScript, HTML, and CSS.
              </li>
              <li>
                <strong>React Documentation:</strong> The official React docs are excellent for understanding the core concepts of React. I recommend working through the "Getting Started" and "Hooks" sections.
              </li>
              <li>
                <strong>Project-Based Learning:</strong> Building real projects has been incredibly valuable in reinforcing what I've learned. I recommend starting with small projects like a to-do app or a personal website.
              </li>
              <li>
                <strong>GitHub:</strong> Contributing to open-source projects on GitHub is a great way to gain practical experience and collaborate with other developers.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default WidgetTabs;
