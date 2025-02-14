import { FaAngleDown } from "react-icons/fa6";

export const MenuLinks = [
    {
        id : 1,
        name: `SERVICES`,
        link: "/services",
        icon : <FaAngleDown />,
        submenu : true,
        sublinks: [
          {
            subMenuHeading : "Design",
            subIcon : <FaAngleDown />,
            sublink : [
              {
                name: "UI & UX",
                link: "/",
              },
              {
                name: "Prototype",
                link: "/",
              },
              {
                name: "Brand Identity",
                link: "/",
              },
              {
                name: "Wireframes",
                link: "/",
              },
            ]
          },
          {
            subMenuHeading: "Development",
            subIcon : <FaAngleDown />,
            sublink: [
              {
                name: "Application Modernization",
                link: "/",
              },
              {
                name: "Application Redesign",
                link: "/",
              },
              {
                name: "Custom Software Development",
                link: "/",
              },
              {
                name: "Embedded Software Development",
                link: "/",
              },
              {
                name: "Mobile App Development",
                link: "/",
              },
              {
                name: "POC Development",
                link: "/",
              },
              {
                name: "Product Development",
                link: "/",
              },
              {
                name: "Web Development",
                link: "/",
              },
            ],
          },
          {
            subMenuHeading: "Consultancy",
            subIcon : <FaAngleDown />,
            sublink: [
              {
                name: "Cloud Enigneering",
                link: "/",
              },
              {
                name: "Cloud Migration",
                link: "/",
              },
              {
                name: "Digital Transformation",
                link: "/",
              },
              {
                name: "Discovery Workshop",
                link: "/",
              },
              {
                name: "Market Research",
                link: "/",
              },
              {
                name: "Product Strategy",
                link: "/",
              },
              {
                name: "Technical Feasibility Analysis",
                link: "/",
              },
              {
                name: "UI/UX Design",
                link: "/",
              },
            ],
          },
          {
            subMenuHeading: "Optimization",
            subIcon : <FaAngleDown />,
            sublink: [
              {
                name: "Application Enhancement",
                link: "/",
              },
              {
                name: "Quality Assurance",
                link: "/",
              },
              {
                name: "Software Audit",
                link: "/",
              },
              {
                name: "Support & Maintenance",
                link: "/",
              }
            ],
          },
          {
            subMenuHeading: "Solutions",
            subIcon : <FaAngleDown />,
            sublink: [
              {
                name: "AWS",
                link: "/",
              },
              {
                name: "Google Cloud",
                link: "/",
              },
              {
                name: "Heroku",
                link: "/",
              },
              {
                name: "Power BI",
                link: "/",
              },
              {
                name: "Salesforce",
                link: "/",
              },
              {
                name: "Shopify",
                link: "/",
              }
            ],
          },
        ],
    },
    {
      id: "2",
      name: `WORK`,
      link: "/work",
    },
    {
      id: "3",
      name: `CAREERS`,
      link: "/careers",
    },
    {
      id: "4",
      name: `ABOUT`,
      link: "/about",
    },
]
