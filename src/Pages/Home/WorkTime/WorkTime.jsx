import { FcOvertime, FcCallback, FcGlobe } from "react-icons/fc";
const WorkTime = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 rounded-md justify-center bg-black text-white py-8 px-8 my-8">
      <div className="flex items-center">
      <div className="pr-5">
          <h1><FcOvertime size={40}/></h1>
        </div>
        <div>
        <p>We are open monday-friday</p>
        <p>24/7</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="pr-5"><h1><FcCallback size={40}/></h1></div>
        <div>
        <p>Have a question?</p>
        <p>+8801747001296</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="pr-5"><h1><FcGlobe size={40}/></h1></div>
        <div>
        <p>Need a website? my linkedin or facebook</p>
        <div className="flex space-x-4 text-orange-500">
          <a href="https://www.linkedin.com/in/romjan-ali-b3b11627a/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href="https://www.facebook.com/mnhRomjanAli" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTime;
