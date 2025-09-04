import { BiBadge } from "react-icons/bi";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaGraduationCap, FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Work Experience */}
        <div className="">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Work <span className="text-cyan-200">Experiences</span>
          </h1>
          <div className="mt-10">
            <ResumeCard Icon={FaCodepen} role="Full Stack Developer" />
            <ResumeCard Icon={FaServer} role="IT-Support" />
            </div>
        </div>
        {/* Education */}
        <div className="">
        <h1 className="text-3xl sm:text-4xl font-bold text-cyan-200 ">
            Education
        </h1>
        <div className="mt-10">
            <ResumeCard 
            Icon={FaReact} 
            role="Fullstack Web Development" 
            date="Jun 2024 - Mar 2025" 
            />
            <ResumeCard 
            Icon={FaGraduationCap} 
            role="Bachelor in computer Engineering" 
            date="Oct 2010 - Oct 2014"
            />
        </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
