import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ProjectMain = () => {
  const projects = [
    {
      name: "WeikField ",
      year: "Aug-2022",
      align: "right",
      image: "../../images/website-img-1.jpg",
      link: "#",
    },
    {
      name: "Meetups",
      year: "Aug-2022",
      align: "left",
      image: "../../images/website-img-2.webp",
      link: "#",
    },
    {
      name: "Safal Subscriptions",
      year: "Jan-2023",
      align: "right",
      image: "../../images/website-img-3.jpg",
      link: "#",
    },
    {
      name: "DIGIMACH Configurator",
      year: "Aug-2023",
      align: "left",
      image: "../../images/website-img-4.jpg",
      link: "#",
    },
    {
      name: "BD NoticeBoard",
      year: "May-2023",
      align: "right",
      image: "../../images/website-img-3.jpg",
      link: "#",
    },
    {
      name: "DINSO ProjectPlan",
      year: "June-2024",
      align: "left",
      image: "../../images/website-img-4.jpg",
      link: "#",
    },
  ];
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 ">
      <motion.div
        variants={fadeIn("up", "0.2")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-full mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
