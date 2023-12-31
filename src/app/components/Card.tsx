import { motion } from 'framer-motion'
import Image from 'next/image';
import { Project } from '@/app/utils/interfaces'

//make it work mdrrr 

type Props = {
  projects: Project[];
};

const Card = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-fill justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] sm:tracking-[20px] text-lg sm:text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-accent">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center place-items-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              src={project?.image.path}
              width={500}
              alt=""
            />

            <div className="space-y-5 sm:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl sm:text-4xl font-semibold text-center">
                <a href={project.linkToBuild}>
                  <span className="underline decoration-accent/50">
                    Case Study {i + 1} of {projects.length}:
                  </span>
                  {project?.title}
                </a>
              </h4>

              <div className="flex items-center justify-center">
                {project.technologies.map((technology) => (
                  <Image
                    className="h-5 w-5 sm:h-10 sm:w-10"
                    width={100}
                    height={100}
                    key={technology._id}
                    src={technology.image.path}
                    alt="project image "
                  />
                ))}
              </div>

              <p className="text-sm sm:text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Card;