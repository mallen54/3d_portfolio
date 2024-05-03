import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    aws,
    java,
    azure,
    tailwind,
    nodejs,
    postgres,
    git,
    spring,
    jboss,
    ibm,
    sidley,
    teamtalk,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Consultant",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "azure",
      icon: azure,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "PostgreSQL",
      icon: postgres,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "spring",
      icon: spring,
    },
    {
      name: "jboss",
      icon: jboss,
    },
  ];
  
  const experiences = [
    {
      title: "IT Intern",
      company_name: "Sidley Austin LLP",
      icon: sidley,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - Aug 2022",
      points: [
        "Image, troubleshoot, and manage company assets using ServiceNow.",
        "Assist company employees in resolving any tech issues that arose.",
        "Set up and cable-manage employee work stations throughout the office.",
      ],
    },
    {
      title: "Application Developer",
      company_name: "IBM",
      icon: ibm,
      iconBg: "#383E56",
      date: "Aug 2022 - Present",
      points: [
        "Utilize cloud technologies, microservice architecture, and critical thinking to assist in migrating client applications to a hybrid cloud environment.",
        "Collaborate with cross-functional teams in an agile environment.",
        "Utilize CI/CD pipelines for efficient deployment of applications using tools such as Redhat OpenShift.",
        "Debug and refactor legacy Java applications, all while maintaining core business logic.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "TeamTalk Chat App",
      description:
        "Web-based chat application created with React JS and Chat Engine API, utlizing Firebase for third-party login authentication capabilites.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Chat Engine",
          color: "pink-text-gradient",
        },
      ],
      image: teamtalk,
      source_code_link: "https://github.com/mallen54/teamtalk-chatapp",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };