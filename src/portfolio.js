/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abraham Gizachew",
  title: "Hi all, I'm Abraham ",
  subTitle: emoji(
    "A passionate Software Engineer dedicated to building scalable, efficient, and user-friendly web and mobile applications. I have hands-on experience developing full-stack solutions using React, Node.js, Laravel, and modern technologies, as well as building mobile apps with Flutter and Firebase — blending creativity with problem-solving to deliver real-world impact."
  ),
  resumeLink:
    "https://drive.google.com/file/d/17b0cRdiYESziA8HrvoQDQWhYgUtIIBpB/view?usp=drive_link",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/joburtab",
  linkedin: "https://www.linkedin.com/in/abraham-g-brutab",
  gmail: "mailto:abraham.sh124@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FULL STACK DEVELOPER FOCUSED ON SOLVING REAL-WORLD PROBLEMS THROUGH CODE",
  skills: [
    emoji(" Build interactive and performant user interfaces using React and TypeScript."),
    emoji(" Develop scalable backend APIs using Node.js/Express and Laravel."),
    emoji(" Integrate cloud and database systems (MongoDB, MySQL, Firebase) for production-ready solutions.")
  ],

  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
    { skillName: "Laravel", fontAwesomeClassname: "fab fa-laravel" },
    { skillName: "TailwindCSS", fontAwesomeClassname: "fas fa-wind" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Haramaya University",
      subHeader: "Bachelor of Science in Software Engineering",
      duration: " 2021 - 2025",
      descBullets: [
        "Developed a strong foundation in software development, system design, and algorithms.",
        "Engaged in multiple real-world software projects focused on problem-solving and digital transformation."
      ]
    }
  ]
};

// Tech Stack

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "75%" },
    { Stack: "Backend", progressPercentage: "70%" },
    { Stack: "Programming", progressPercentage: "65%" }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Ministry of Innovation and Technology (MINT)",
      companylogo: require("./assets/images/WIN_20230908_11_11_12_Pro.jpg"),
      date: "June 2023 – 2024",
      desc: "Developed an enterprise IT support and ticketing system using the MERN stack. The platform managed employee tickets, agent assignments, and automated workflows for faster resolution.",
      descBullets: [
        "Implemented secure role-based authentication using JWT.",
        "Built a RESTful API with Node.js and Express integrated with MongoDB.",
        "Enhanced ticket resolution time by 40% with optimized UI/UX and data handling."
      ]
    }
  ]
};

// Open Source

const openSource = {
  showGithubProfile: "true",
  display: false
};

// Big Projects Section

const bigProjects = {
  title: " Projects",
  subtitle: "PROJECTS THAT SOLVE REAL PROBLEMS USING MODERN TECHNOLOGY",
  projects: [
    {
      image: require("./assets/images/icon2.jpeg"),
      projectName: "Enterprise IT Support System",
      projectDesc:
        "A full-stack IT support and ticketing platform built for the Ministry of Innovation and Technology using the MERN stack.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/joburtab/it-support-system" }
      ]
    },
    {
      image: require("./assets/images/icon2.jpeg"),
      projectName: "Multi-Vendor E-commerce Web App",
      projectDesc:
        "A final-year graduation project designed to empower small local vendors by enabling digital selling and marketplace participation.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/joburtab/multi-vendor-ecommerce" }
      ]
    },
    {
      image: require("./assets/images/icon2.jpeg"),
      projectName: "Inventory Management System",
      projectDesc:
        "Developed a PHP/MySQL-based web app for inventory tracking, supplier management, and low-stock alerts to minimize stockouts.",
      footerLink: [
        { name: "GitHub", url: "GITHUB_USERNAME/inventory-management-system" }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements & Certifications "),
  subtitle: "Highlights of academic and project accomplishments.",
  achievementsCards: [],
  display: false
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love sharing my learnings on software engineering and technology.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji("Knowledge sharing and developer community engagement."),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast "),
  subtitle: "Talking about tech, code, and creativity.",
  podcast: [],
  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume below.",
  display: true
};

// Contact Section

const contactInfo = {
  title: emoji("Contact Me "),
  subtitle: "Let's collaborate or discuss innovative ideas.",

  email_address: "abraham.sh124@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
