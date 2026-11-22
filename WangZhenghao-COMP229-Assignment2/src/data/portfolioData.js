/**
 * ============================================================
 * PORTFOLIO CONTENT — ALL EDITABLE DATA LIVES HERE
 * ============================================================
 * Every page reads from this file, so you only need to edit
 * this one file to personalise the entire website.
 *
 * NOTE: Images live in /public/images/. Replace those files
 * (keeping the same names) or update the paths below.
 */

// Personal identity used across the site (navigation, hero, footer, about).
export const personalInfo = {
  fullName: 'LPoster',
  firstName: 'Zhenghao',
  role: 'Software Technology Student',
  tagline: 'A Software Technology student building practical web applications.',
  location: 'Suzhou, Jiangsu, China',
  email: '1713227350@qq.com',
  phone: '15231569662',
  githubUrl: 'https://github.com/LPost11',
  resumePath: '/resume.pdf', // PDF version of the resume, stored in /public
};

// Navigation links — the "to" values match the routes defined in App.jsx.
export const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Education', to: '/education' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

// Home page welcome / mission content.
export const homeContent = {
  welcomeHeading: 'Welcome to My Portfolio',
  welcomeMessage:
    'Hi, I’m LPoster — a Software Technology student at Suzhou Centennial College. I enjoy learning how to build websites and applications that are practical and easy to use. This site is a small showcase of who I am, what I’ve built, and what I can do for you.',
  missionTitle: 'My Mission',
  missionStatement:
    'To keep learning and growing as a developer — turning ideas into simple, useful digital experiences, one project at a time.',
  primaryButtonText: 'Learn More About Me',
  primaryButtonLink: '/about',
  secondaryButtonText: 'View My Projects',
  secondaryButtonLink: '/projects',
};

// About Me page content.
export const aboutContent = {
  heading: 'About Me',
  portraitImage: '/images/profile.jpg',
  imageAlt: 'Portrait photo of LPoster',
  biography: [
    'My name is LPoster. I am a Software Technology student at Suzhou Centennial College (苏州百年职业学院), enrolled in 2024. I am interested in web development and in building applications that solve real problems.',
    'Through my coursework I have learned programming fundamentals, web technologies, and database basics. I am eager to keep improving my skills and take on new challenges in software development.',
  ],
  quickFacts: [
    { label: 'Based in', value: 'Suzhou, China' },
    { label: 'Major', value: 'Software Technology' },
    { label: 'College', value: 'Suzhou Centennial College' },
    { label: 'Enrolled', value: '2024' },
  ],
  resumeButtonText: 'Download Resume (PDF)',
};

// Projects page — at least 3 projects are required by the assignment.
export const projects = [
  {
    id: 'taskflow',
    title: 'TaskFlow — Productivity Dashboard',
    image: '/images/project-taskflow.svg',
    imageAlt: 'Screenshot-style illustration of the TaskFlow dashboard',
    description:
      'A React dashboard for organising daily tasks with drag-and-drop columns, priority tags, and local storage persistence.',
    technologies: ['React', 'CSS Grid', 'LocalStorage'],
    link: 'https://github.com/',
  },
  {
    id: 'recipe-finder',
    title: 'Recipe Finder',
    image: '/images/project-recipe.svg',
    imageAlt: 'Screenshot-style illustration of the Recipe Finder app',
    description:
      'A responsive application that searches a public recipe API, filters by dietary needs, and saves favourites for later.',
    technologies: ['React', 'REST API', 'Fetch'],
    link: 'https://github.com/',
  },
  {
    id: 'weather-app',
    title: 'Weather Now',
    image: '/images/project-weather.svg',
    imageAlt: 'Screenshot-style illustration of the Weather Now application',
    description:
      'A lightweight weather app showing live conditions and a five-day forecast, built with geolocation and dynamic icons.',
    technologies: ['React', 'OpenWeather API', 'SVG Icons'],
    link: 'https://github.com/',
  },
];

// Education page — degrees / professional qualifications with dates.
export const education = [
  {
    id: 'college',
    qualification: 'Software Technology (软件技术)',
    school: 'Suzhou Centennial College (苏州百年职业学院)',
    period: '2024 – Present',
    details:
      'Currently studying programming fundamentals, web development, and database technologies as a student enrolled in 2024.',
  },
];

// Services page — a short list of services, each with an image.
export const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    image: '/images/service-web.svg',
    imageAlt: 'Illustration representing web development',
    description:
      'Responsive, standards-compliant websites built with modern HTML, CSS, JavaScript, and React.',
  },
  {
    id: 'ui-ux-design',
    title: 'UI / UX Design',
    image: '/images/service-design.svg',
    imageAlt: 'Illustration representing UI and UX design',
    description:
      'Clean, accessible interfaces designed with the user in mind — from wireframes to polished prototypes.',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    image: '/images/service-mobile.svg',
    imageAlt: 'Illustration representing mobile application development',
    description:
      'Cross-platform mobile experiences using React Native, with a focus on performance and usability.',
  },
];

// Contact page — information panel plus the interactive form configuration.
export const contactContent = {
  heading: 'Contact Me',
  intro:
    'Have a question, a project idea, or just want to say hello? Fill out the form and I’ll get back to you as soon as I can.',
  formFields: {
    firstName: 'First Name',
    lastName: 'Last Name',
    contactNumber: 'Contact Number',
    emailAddress: 'Email Address',
    message: 'Message',
  },
};
