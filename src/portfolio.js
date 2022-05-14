/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Hardik Khanesa",
  logo_name: "Hardikkhanesa",
  nickname: "Fullstack Developer",
  subTitle:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1BelWkj3FEP5uqxriZOs0s2mA99KdkkoI/view?usp=sharing",
  portfolio_repository: "https://github.com/Hardikkhanesa/masterPortfolio",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Hardikkhanesa/",
  linkedin: "https://www.linkedin.com/in/hardik-khanesa/",
  gmail: "hkhanesa@gmail.com",
  facebook: "https://www.facebook.com/hardikkhanesa.99",
  twitter: "https://twitter.com/hardik_khanesa",
  instagram: "https://www.instagram.com/hardik_khanesa/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡	 Full stack developer with 2 years of industrial experience in Designing, Development, Deployment and maintenance of web apps based on Django framework - Python Django , Node.js , React.js.",
        "⚡ Microservices Architecture developement from scratch design to production .",
        "⚡ Experience of Programming using Object Oriented Programming (OOPs concept) and software development life cycle (SDLC), architecting scalable platforms, object oriented programming, database design and agile methodologies , sprint planning .",
        "⚡ More than 2 years of Professional Web Apps development experience using Django , Node.js inclusive of experience in React.js.",
        "⚡ Experience in using frameworks and tools like Django , Django REST ,Express.js .",
        "⚡ Experience working with  Docker images and containers.",
        // "⚡ Proficient knowledge in Web services like Amazon AWS Services Ec2 , lambda.",
        // "⚡ Worked with varieties of Relational Databases ( RDBMS ) like PostgreSQL",
        // "⚡ Experience in working with libraries using pip command for python libraries like BeautifulSoup , numpy , pyenv , RabbitMQ, Celery , matplotlib, Pandas data-frame, uuid and used PEP8 coding convention.",
        // "⚡ Working on a new web app built in React using ES6.",
        // "⚡ Experience in Developing reverse proxy using NGINX to manage end user quarantine.",
        // "⚡ Strong experience using REST Web Services for data communication between remote systems, designed, developed and testing of REST interfaces in Django,Node.",
        // "⚡ Experience using GIT version control"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "fa-css3",
        //   style: {
        //     color: "#1572B6"
        //   }
        // },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699"
        //   }
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NodeJs",
          fontAwesomeClassname: "simple-icons:nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#339933",
          },
        },
		
		  
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        // "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up DB,Ec2,lambda over AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6"
        //   }
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28"
        //   }
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791"
        //   }
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248"
        //   }
        // },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5"
        //   }
        // }
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/hardik_khanesa",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/hardik_99",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/hkhanesa",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@hkhanesa",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/hardikkhanesa",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "L. D. College Of Engineering,Ahmedabad",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "ldcelogo.png",
      alt_name: "LDCE AHMEDABAD",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied Computer science subjects like Datastructure, Algorithms, DBMS, Operating Systems, Computer architecture, AI etc.",
        "⚡ Apart from this, I have done courses on Algortihms(NPTEL,Princeton), Data Science, Cloud Computing and Full Stack Development on various online platforms",
      ],
      website_link: "https://ldce.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
	{
		title: " Microservices: Designing Highly Scalable Systems",
		subtitle: "- Udemy",
		logo_path: "udemy.jpeg",
		certificate_link:
		  "https://udemy-certificate.s3.amazonaws.com/pdf/UC-2da2efe6-bd16-4ef4-af14-0c4110443d33.pdf",
		alt_name: "Udemy",
		color_code: "#2A73CC",
	  },
    {
      title: "Node.js Essential Training",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin.png",
      certificate_link:
        "https://drive.google.com/file/d/1yQvgIlrUWPCoVFE5OJacdeWaNzcMcUz3/view?usp=sharing",
      alt_name: "Linkedin Learning",
      color_code: "#2A73CC",
    },

	
    {
      title: "JavaScript Algorithms and Data Structures",
      subtitle: "- Freecodecamp",
      logo_path: "freecodecamp.jpeg",
      certificate_link:
        "https://www.freecodecamp.org/certification/hardikkhanesa/javascript-algorithms-and-data-structures",
      alt_name: "Freecodecamp",
      color_code: "#0C9D5899",
    },
    {
      title: "Responsive Web Design",
      subtitle: "- FreeCodeCamp",
      logo_path: "freecodecamp.jpeg",
      certificate_link:
        "https://www.freecodecamp.org/certification/hardikkhanesa/responsive-web-design",
      alt_name: "Freecodecamp",
      color_code: "#1F70C199",
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      subtitle: "- University of Michigan",
      logo_path: "michigan.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/R5URLDHWDK4M",
      alt_name: "University of Michigan",
      color_code: "#D83B0199",
    },
    {
      title: "Python Data Structures",
      subtitle: "- University of Michigan",
      logo_path: "michigan.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/73UCGM67ST83",
      alt_name: "University of Michigan",
      color_code: "#1F70C199",
    },
    {
      title: "Using Python to Access Web Data",
      subtitle: "- University of Michigan",
      logo_path: "michigan.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/WSZC35P6YCSP",
      alt_name: "University of Michigan",
      color_code: "#0C9D5899",
    },
    {
      title: "Visualizing Citibike Trips with Tableau",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/KFGFYEXH6P4Z",
      alt_name: "Coursera Project Network",
      color_code: "#00000099",
    },
    {
      title: "AWS Fundamentals: Going Cloud-Native",
      subtitle: "- Amazon Web Services",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/GVZGSZWWFFJU",
      alt_name: "AWS",
      color_code: "#2A73CC",
    },
    {
      title: "QwikLabs on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/c19e9e52-f608-4011-82f2-6df7f4b13b4e",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Algorithms",
      subtitle: "- A.Ramesh,IITM",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/14avXwP9PE0VuNqNg0NUeg-g6Ehre1j_0/view?usp=sharing",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Learning Chrome Web Developer Tools",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin.png",
      certificate_link:
        "https://drive.google.com/file/d/18pzNbFSzBBS6Xv9AQbXFR1A7FBVxMEf_/view?usp=sharing",
      alt_name: "Linkedin Learning",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership,Freelance",
  description:
    "I have worked with evolving startups as ML and DL Developer, Android Developer and Software Architect.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineering Intern",
          company: "Fluvina Technology Pvt. Ltd.(Mobihealth.in)",
          company_url: "https://www.mobihealth.in/",
          logo_path: "mobihealth.jpg",
          duration: "Dec 2019 - Feb 2020",
          location: "Ahmedabad, Gujarat",
          description:
            "I was working as a engineering intern position in Fluvina Technologies pvt Ltd(https://www.mobihealth.in/).I was Working in Android development team,Doing research with Python libraries.Machine Learning Models Building for Diabetes risk prediction score.(TensorFlow,Pandas,Random Forest,Naive bayes,etc)",
          Reference:
            "https://drive.google.com/file/d/1SP1-rDSq23YRrQxwF7Yv8FzABuu-do95/view?usp=sharing",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Full Time",
      experiences: [
        {
          title: "Software Engineer(Full Stack Developer",
          company: "Digiqt Technolabs",
          company_url: "https://digiqt.com/",
          logo_path: "digiqt.jpeg",
          duration: "Aug 2020 - Present",
          location: "Ahmedabad, Gujarat",
          description:
            "- Developed InsureTech products as a full-stack engineer with exposure to multiple tech stacks.My work includes Full stack development with Python django and Node.js.Also using React js for Frontend integrations. Majorly working on Health related Insurance products , Part of digital team of client.Working in Django,Node.js,React.js,Microservices,Aws.Developing business critical frontend ,backend services along with microservices architecture. Developing microservices with Node.js and Django.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hkimage.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Python, React, Nodejs, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://hardikkhanesa.com/blog/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Ahmedabad,Gujarat",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/zr1YvEN57Z2gtpW56",
  },

  // phoneSection: {
  // 	title: "Phone Number",
  // 	subtitle: "+91********",
  // },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
