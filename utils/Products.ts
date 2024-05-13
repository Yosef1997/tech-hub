import server from "@/public/assets/server.jpg"
import cloudService from "@/public/assets/cloud-service.jpg"
import webDev from "@/public/assets/web-development.jpg"
import itManagment from "@/public/assets/about-hero.jpg"
import softwareRenew from "@/public/assets/software.jpg"
import ai from "@/public/assets/ai.jpg"

const products = [
  {
    name: "Data Center",
    description:
      "The efficiency of our operations skyrocketed after switching to TechHub Data Center's services. The reliability and speed of their infrastructure have been unparalleled, allowing us to focus on our core business activities without worrying about downtime.",
    image: server,
    advantages: [
      "Secure and reliable data storage",
      "Scalable infrastructure to accommodate growing data needs",
      "High availability and performance for mission-critical applications",
    ],
    specifications: [
      "Tiered storage options (e.g., SSD, HDD)",
      "Redundant power and cooling systems",
      "24/7 monitoring and support",
    ],
  },
  {
    name: "Cloud Services",
    description:
      "The efficiency of our operations skyrocketed after switching to TechHub Data Center's services. The reliability and speed of their infrastructure have been unparalleled, allowing us to focus on our core business activities without worrying about downtime.",
    image: cloudService,
    advantages: [
      "Flexible resource allocation",
      "Scalable infrastructure to support growth",
      "Cost-effective pay-as-you-go pricing model",
    ],
    specifications: [
      "Virtualized computing resources (e.g., virtual machines, containers)",
      "Support for various operating systems and development frameworks",
      "Integration with leading cloud platforms (e.g., AWS, Azure, Google Cloud)",
    ],
  },
  {
    name: "Web Development",
    description:
      "The efficiency of our operations skyrocketed after switching to TechHub Data Center's services. The reliability and speed of their infrastructure have been unparalleled, allowing us to focus on our core business activities without worrying about downtime.",
    image: webDev,
    advantages: [
      "Customized solutions to fit specific business needs",
      "User-friendly interfaces optimized for performance and usability",
      "Responsive design for seamless access across devices",
    ],
    specifications: [
      "Front-end technologies (e.g., HTML, CSS, JavaScript)",
      "Back-end frameworks (e.g., Node.js, Django, Ruby on Rails)",
      "Content management systems (e.g., WordPress, Drupal, Joomla)",
    ],
  },
  {
    name: "IT Management",
    description:
      "The efficiency of our operations skyrocketed after switching to TechHub Data Center's services. The reliability and speed of their infrastructure have been unparalleled, allowing us to focus on our core business activities without worrying about downtime.",
    image: itManagment,
    advantages: [
      "Proactive monitoring and maintenance to prevent downtime",
      "Enhanced security to protect against cyber threats",
      "Streamlined operations and improved efficiency",
    ],
    specifications: [
      "Network monitoring and management tools",
      "Endpoint security solutions (e.g., antivirus, firewall)",
      "Patch management and software deployment systems",
    ],
  },
  {
    name: "Software Renew",
    description:
      "The efficiency of our operations skyrocketed after switching to TechHub Data Center's services. The reliability and speed of their infrastructure have been unparalleled, allowing us to focus on our core business activities without worrying about downtime.",
    image: softwareRenew,
    advantages: [
      "Automated renewal process for hassle-free license management",
      "Cost optimization through license consolidation and negotiation",
      "Compliance assurance to mitigate legal and financial risks",
    ],
    specifications: [
      "License management platform with automated renewal reminders",
      "License optimization tools to identify unused or redundant licenses",
      "Vendor management and negotiation support",
    ],
  },
  {
    name: "Machine Learning",
    description:
      "The efficiency of our operations skyrocketed after switching to TechHub Data Center's services. The reliability and speed of their infrastructure have been unparalleled, allowing us to focus on our core business activities without worrying about downtime.",
    image: ai,
    advantages: [
      "Data-driven insights for informed decision-making",
      "Automation of repetitive tasks for improved efficiency",
      "Personalized customer experiences and targeted marketing",
    ],
    specifications: [
      "Machine learning algorithms and models tailored to specific use cases",
      "Integration with data sources and analytics platforms",
      "Training and deployment of machine learning models in production environments",
    ],
  },
]

export default products
