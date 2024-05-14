import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    awsCert,
    java,
    azureCert,
    tailwind,
    nodejs,
    postgres,
    git,
    spring,
    jboss,
    ibm,
    sidley,
    teamtalk,
    talktome,
    phaserGame,
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
    {
      title: 'AWS Cloud Practitioner Certified',
      icon: awsCert,
    },
    {
      title: 'Microsoft Azure Fundamentals Certified',
      icon: azureCert,
    }
    
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
  ];
  
  const testimonials = [
    {
      testimonial:
        "He was fast learner and able to research problem areas and help us solve problems. We were impressed by his abilities as a first-year developer.",
      name: "Jim Stewart",
      designation: "Project Manager",
      company: "IBM",
      image: "https://media.licdn.com/dms/image/C4D03AQHsk-CA04ccpQ/profile-displayphoto-shrink_200_200/0/1516246268077?e=1720656000&v=beta&t=-2Wwnr-PH4Blstz_O6GS0OHnxEJhOshRsCwus9EiLLo",
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
      name: "Alan News Search",
      description:
        "Web application that utilizes voice chat with Alan AI to retrieve news articles by communicating with News API.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Alan AI",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
        {
          name: "News API",
          color: "orange-text-gradient",
        },
      ],
      image: talktome,
      source_code_link: "https://github.com/mallen54/alan-ai-news",
    },
    {
      name: "Apple Catcher",
      description:
        "A basic apple catching game using HTML, Javascript, and the Phaser game development framework.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Phaser",
          color: "pink-text-gradient",
        },
      ],
      image: phaserGame,
      source_code_link: "https://github.com/mallen54/apple_catcher",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };