/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Narjess Beltaief",
  title: "Hi all, I'm Narjess",
  subTitle: emoji(
    "A passionate developer experienced in building modern web applications with Django (frontend & backend) and cross-platform mobile apps with Flutter."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/narjessbeltaief-lgtm",
  linkedin: "https://www.linkedin.com/in/narjess-beltaief-946885337/",
  gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=narjess.beltaief@isimg.tn&su=Hello%20Narjess&body=Hi%20Narjess%2C%0A%0AI%20would%20like%20to%20talk%20about%20...",
  facebook: "https://www.facebook.com/share/1GSwemLPhc/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Developer specializing in modern web and mobile solutions",
  skills: [
    emoji(
      "⚡ Build responsive and dynamic web applications using Django for both frontend and backend"
    ),
    emoji("⚡ Develop cross-platform mobile apps with Flutter for seamless user experiences"),
    emoji(
      "⚡ Apply machine learning  techniques to solve real-world problems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Flutter",
    fontAwesomeClassname: "fab fa-google"
  },
  {
    skillName: "Flask",
    fontAwesomeClassname: "fas fa-flask"
  },
  {
    skillName: "Machine Learning",
    fontAwesomeClassname: "fas fa-robot"
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Django",
    fontAwesomeClassname: "fas fa-leaf"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Higher Institute of Computer Science and Multimedia of Gabes",
      logo: require("./assets/images/isimg.png"), // Replace with your institute's logo if available
      subHeader: "Master’s Student in Computer Science and Multimedia Research",
      duration: "September 2025 – Present",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Higher Institute of Computer Science of Medenine",
      logo: require("./assets/images/isimed.jpg"), // Replace with your institute's logo if available
      subHeader: "Bachelor’s Degree in Computer Science (Software Engineering)",
      duration: "September 2022 – May 2025",
      desc: ""
    },
    {
      schoolName: "Gabes Road High School (LRG), Medenine", // Replace with your school's logo if available
      subHeader: "Baccalaureate in Experimental Sciences",
      duration: "September 2021 – September 2022",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Flutter (Mobile Development)",
      progressPercentage: "80%"
    },
    {
      Stack: "Django (Web Frontend & Backend)",
      progressPercentage: "55%"
    },
    {
      Stack: "Machine Learning ",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Summer Intern",
      company: "M-IT (Tunis – Remote)",
      date: "July 2024 – September 2024",
      desc: "Developed a Learning Management System (LMS) website using Laravel."
    },
    {
      role: "End of Studies Intern",
      company: "TmKiin (Gabes)",
      date: "January 2025 – April 2025",
      desc: "Designed a baby cry classification system using Machine Learning."
    }
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Highlighted Projects I've Built",
  projects: [
    {
      image: require("./assets/images/bebe.png"), // Replace with your project logo if available
      projectName: "Baby Cry Classification System",
      projectDesc: "A machine learning system for classifying baby cries using Flutter (mobile), Flask (API), MySQL (database), and Random Forest (ML model).",
      footerLink: [
        {
          name: "May 2025",
          url: "",
          desc: "Internship Project at TmKiin"
        }
        // You can add extra buttons or links here if needed.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",
  achievementsCards: [
    {
      title: "Ethical Hacking & IoT Cybersecurity",
      subtitle: "Completed training on ethical hacking and IoT cybersecurity.",
      image: require("./assets/images/hack.webp"), // Replace with your own image if available
      imageAlt: "Cybersecurity Logo",
      footerLink: [
        {
          name: "Certification",
          url: "" // Add link if available
        },
        {
          name: "Date",
          url: "",
          desc: "December 2022"
        }
      ]
    },
    {
      title: "Penetration Testing for IoT Devices",
      subtitle: "Hands-on workshop on penetration testing for IoT devices.",
      image: require("./assets/images/iot.png"), // Replace with your own image if available
      imageAlt: "IoT Logo",
      footerLink: [
        {
          name: "Certification",
          url: "" // Add link if available
        },
        {
          name: "Date",
          url: "",
          desc: "December 2022"
        }
      ]
    },
    {
      title: "Robotics & Electronics Introduction",
      subtitle: "Introductory course on robotics and electronics.",
      image: require("./assets/images/robot.jpeg"), // Replace with your own image if available
      imageAlt: "Robotics Logo",
      footerLink: [
        {
          name: "Certification",
          url: "" // Add link if available
        },
        {
          name: "Date",
          url: "",
          desc: "December 2023"
        }
      ]
    },
    {
      title: "EcoGuardians ML Workshop",
      subtitle: "Participated in a machine learning workshop focused on environmental solutions.",
      image: require("./assets/images/ml.jpg"), // Replace with your own image if available
      imageAlt: "ML Workshop Logo",
      footerLink: [
        {
          name: "Certification",
          url: "" // Add link if available
        },
        {
          name: "Date",
          url: "",
          desc: "April 2024"
        }
      ]
    },
    {
      title: "Hackathon Isimed v2.0",
      subtitle: "Participated in Hackathon Isimed v2.0.",
      image: require("./assets/images/hackathon.png"), // Replace with your own image if available
      imageAlt: "Hackathon Logo",
      footerLink: [
        {
          name: "Event",
          url: "" // Add link if available
        },
        {
          name: "Date",
          url: "",
          desc: "November 2024"
        }
      ]
    },
    {
      title: "Competitive Programming",
      subtitle: "Engaged in competitive programming activities.",
      image: require("./assets/images/cpc.png"), // Replace with your own image if available
      imageAlt: "Competitive Programming Logo",
      footerLink: [
        {
          name: "Event",
          url: "" // Add link if available
        },
        {
          name: "Date",
          url: "",
          desc: "January 2025"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I enjoy sharing what I learn as I grow in tech. (No blogs published yet, but stay tuned!)",
  displayMediumBlogs: "false", // Set to false since you don't have blogs yet
  blogs: [
    // No blogs yet
  ],
  display: true // Set false to hide this section, defaults to true
};
// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+216-25661956",
  email_address: "narjess.beltaief@isimg.tn"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
