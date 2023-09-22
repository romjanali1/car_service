const WorkTime = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-center bg-black text-white py-8 px-8 my-8">
      <div className="stat">
        <div>We are open monday-friday</div>
        <div>24/7</div>
      </div>

      <div className="stat">
        <div>Have a question?</div>
        <div>+8801747001296</div>
      </div>

      <div className="stat">
        <div className="stat-figure">
          <div className="avatar online">
          </div>
        </div>
        <div>Need a website? my linkedin or facebook</div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/romjan-ali-b3b11627a/">Linkedin</a>
          <a href="https://www.facebook.com/mnhRomjanAli">Facebook</a>
        </div>
      </div>
    </div>
  );
};

export default WorkTime;
