      function Card({image}) {
        return(
    <div className="w-[373px] h-[567px] bg-white rounded-2xl shadow-2xl overflow-hidden">
    <img src={image} alt="project" className="w-[373px] h-[200px] object-cover"/>
    <div className="w-[373px] h-[295px] m-4 p-4">
      <h3 className="text-2xl font-semibold mb-6">Project Title goes here</h3>
      <p className="text-lg text-[#7B9CE4] mb-8">
        This is sample project<br/>
        description random things are<br/>
        here in description This is<br/>
        sample project lorem ipsum<br/>
        generator for dummy content
      </p>
      <p className="text-sm text-[#898989] mb-8">
        Tech stack: HTML, JavaScript, SASS, React
      </p>
      <div className="flex space-x-20 text-sm text-[#898989]">
        <a href="#" className="flex items-center space-x-1 ">
        <img src="/chain-icon.png" alt="project" className="w-[15px] h-[15px]" />
        <span className="underline text-[#898989]">Live Preview</span>
        </a>

        <a href="#" className="flex items-center space-x-1 ">
        <img src="/github-icon.png" alt="project" className="w-[15px] h-[15px]" />
        <span className="underline text-[#898989]" >View Code</span>
        </a>
      </div>
    </div>
    </div>
        )
      }

      export default Card
      
      
    