/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,  // Change this to false if you don't want Splash screen.
};


//Home Page
const greeting = {
	title: "Hardik Khanesa",
	logo_name: "Hardikkhanesa",
	nickname: "passionate_thinker",
	subTitle:
		"A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
	resumeLink:
		"https://drive.google.com/file/d/15UWCY2FJ-1XfthWfXkugqHt_wSH_1hi5/view?usp=sharing",
	portfolio_repository: "https://github.com/Hardikkhanesa/masterPortfolio",
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/Hardikkhanesa/",
	linkedin: "https://www.linkedin.com/in/hardik-khanesa/",
	gmail: "hkhanesa@gmail.com",
	gitlab: "https://gitlab.com/ashutoshhathidara98",
	facebook: "https://www.facebook.com/hardikkhanesa.99",
	twitter: "https://twitter.com/hardik_khanesa",
	instagram: "https://www.instagram.com/hardik_khanesa/"
};

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis"
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
		},
		{
			skillName: "Tableau",
			fontAwesomeClassname: "simple-icons:tableau",
			style: {
			  backgroundColor: "transparent",
			  color: "#3776AB"
			}
		  }
      ]
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#CB3837"
          }
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#00ff40"
          }
        }
      ]
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS"
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4"
          }
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900"
          }
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6"
          }
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28"
          }
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791"
          }
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248"
          }
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6"
          }
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5"
          }
        }
      ]
    }
  ]
};


// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866"
      },
      profileLink: "https://www.hackerrank.com/hardik_khanesa"
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638"
      },
      profileLink: "https://www.codechef.com/users/hardik_99"
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB"
      },
      profileLink: "http://codeforces.com/profile/hkhanesa"
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754"
      },
      profileLink: "https://www.hackerearth.com/@hkhanesa"
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF"
      },
      profileLink: "https://www.kaggle.com/hardikkhanesa"
    }
  ]
}

const degrees = {
  degrees : [
    {
      title: "L. D. College Of Engineering,Ahmedabad",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "ldcelogo.png",
      alt_name: "LDCE AHMEDABAD",
      duration: "2016 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Algortihms(NPTEL,Princeton), Data Science, Cloud Computing and Full Stack Development.",
         ],
      website_link: "http://ldce.ac.in/"
    }
  ]
}

const certifications = {
	certifications: [
		{
			title: "JavaScript Algorithms and Data Structures",
			subtitle: "- Freecodecamp",
			logo_path: "freecodecamp.jpeg",
			certificate_link:
				"https://www.freecodecamp.org/certification/hardikkhanesa/javascript-algorithms-and-data-structures",
			alt_name: "Freecodecamp",
			color_code: "#0C9D5899"
		},
		{
			title: "Responsive Web Design",
			subtitle: "- FreeCodeCamp",
			logo_path: "freecodecamp.jpeg",
			certificate_link:
				"https://www.freecodecamp.org/certification/hardikkhanesa/responsive-web-design",
			alt_name: "Freecodecamp",
			color_code: "#1F70C199"
		},
		{
			title: "Programming for Everybody (Getting Started with Python)",
			subtitle: "- University of Michigan",
			logo_path: "michigan.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/R5URLDHWDK4M",
			alt_name: "University of Michigan",
			color_code: "#D83B0199"
		},
		{
			title: "Python Data Structures",
			subtitle: "- University of Michigan",
			logo_path: "michigan.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/73UCGM67ST83",
			alt_name: "University of Michigan",
			color_code: "#1F70C199"
		},
		{
			title: "Using Python to Access Web Data",
			subtitle: "- University of Michigan",
			logo_path: "michigan.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/WSZC35P6YCSP",
			alt_name: "University of Michigan",
			color_code: "#0C9D5899"
		},
		{
			title: "Visualizing Citibike Trips with Tableau",
			subtitle: "- Coursera",
			logo_path: "coursera_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/KFGFYEXH6P4Z",
			alt_name: "Coursera Project Network",
			color_code: "#00000099"
		},
		{
			title: "AWS Fundamentals: Going Cloud-Native",
			subtitle: "- Amazon Web Services",
			logo_path: "coursera_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/GVZGSZWWFFJU",
			alt_name: "AWS",
			color_code: "#2A73CC"
		},
		{
			title: "QwikLabs on GCP",
			subtitle: "- Qwiklabs",
			logo_path: "gcp_logo.png",
			certificate_link:
				"https://google.qwiklabs.com/public_profiles/c19e9e52-f608-4011-82f2-6df7f4b13b4e",
			alt_name: "GCP",
			color_code: "#4285F499"
		},
		{
			title: "Algorithms",
			subtitle: "- A.Ramesh,IITM",
			logo_path: "nptel_logo.png",
			certificate_link:
				"https://drive.google.com/file/d/14avXwP9PE0VuNqNg0NUeg-g6Ehre1j_0/view?usp=sharing",
			alt_name: "NPTEL",
			color_code: "#FFBB0099"
		}
	]
};


// Experience Page
const experience = {
	title: "Experience",
	subtitle: "Work, Internship and Volunteership",
	description:
		"I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			experiences: [
				{
					title: "Associate AI Engineer",
					company: "Legato Health Technology",
					company_url: "https://legatohealthtech.com/",
					logo_path: "legato_logo.png",
					duration: "June 2020 - PRESENT",
					location: "Hyderabad, Telangana",
					description:
						"I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
					color: "#0879bf",
				},
				{
					title: "Android and ML Developer",
					company: "Muffito Incorporation",
					company_url: "https://www.linkedin.com/company/muffito-inc/about/",
					logo_path: "muffito_logo.png",
					duration: "May 2018 - Oct 2018",
					location: "Pune, Maharashtra",
					description:
						"I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
					color: "#9b1578",
				},
				{
					title: "Android Developer",
					company: "FreeCopy Pvt. Ltd.",
					company_url: "https://www.linkedin.com/company/freecopy/about/",
					logo_path: "freecopy_logo.png",
					duration: "Nov 2017 - Dec 2017",
					location: "Ahmedabad, Gujarat",
					description:
						"FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
					color: "#fc1f20",
				},
			],
		},
		{
			title: "Internships",
			experiences: [
				{
					title: "Data Science Research Intern",
					company: "Delhivery Pvt. Ltd.",
					company_url: "https://www.delhivery.com/",
					logo_path: "delhivery_logo.png",
					duration: "May 2019 - Sept 2019",
					location: "Gurgaon, Haryana",
					description:
						"I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
					color: "#ee3c26",
				},
				{
					title: "Data Science Intern",
					company: "Intel Indexer LLC",
					company_url:
						"https://opencorporates.com/companies/us_dc/EXTUID_4170286",
					logo_path: "intel_logo.jpg",
					duration: "Nov 2018 - Dec 2018",
					location: "Work From Home",
					description:
						"This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
					color: "#0071C5",
				},
			],
		},
		{
			title: "Volunteerships",
			experiences: [
				{
					title: "Google Explore ML Facilitator",
					company: "Google",
					company_url: "https://about.google/",
					logo_path: "google_logo.png",
					duration: "June 2019 - April 2020",
					location: "Hyderabad, Telangana",
					description:
						"Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
					color: "#4285F4",
				},
				{
					title: "Microsoft Student Partner",
					company: "Microsoft",
					company_url: "https://www.microsoft.com/",
					logo_path: "microsoft_logo.png",
					duration: "Aug 2019 - May 2020",
					location: "Hyderabad, Telangana",
					description:
						"Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
					color: "#D83B01",
				},
				{
					title: "Mozilla Campus Captain",
					company: "Mozilla",
					company_url: "https://www.mozilla.org/",
					logo_path: "mozilla_logo.png",
					duration: "Oct 2019 - May 2020",
					location: "Kurnool, Andhra Pradesh",
					description:
						"My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
					color: "#000000",
				},
				{
					title: "Developer Students Club Member",
					company: "DSC IIITDM Kurnool",
					company_url:
						"https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
					logo_path: "dsc_logo.png",
					duration: "Jan 2018 - May 2020",
					location: "Kurnool, Andhra Pradesh",
					description:
						"We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
					color: "#0C9D58",
				},
				{
					title: "Developer Program Member",
					company: "Github",
					company_url: "https://github.com/",
					logo_path: "github_logo.png",
					duration: "July 2019 - PRESENT",
					location: "Work From Home",
					description:
						"I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
					color: "#181717",
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
		profile_image_path: "animated_ashutosh.png",
		description:
			"I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
	},
	blogSection: {
		title: "Blogs",
		subtitle:
			"For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
		link: "https://ashutoshhathidara.wordpress.com",
		avatar_image_path: "blogs_image.svg",
	},
	addressSection: {
		title: "Address",
		subtitle:
			"Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
		avatar_image_path: "address_image.svg",
		location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
	},
	phoneSection: {
		title: "Phone Number",
		subtitle: "+91 8320758513",
	},
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
