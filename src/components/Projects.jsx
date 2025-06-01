import Card from "./Card";
function Projects() {

  const images=[
    "/4.jpg",
    "/2.jpg",
    "/3.jpg",
    "/1.jpg",
    "/5.jpg",
    "/6.jpg",
  ];
  
  return(
    <div className="w-[1228px] h-[1373px] mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl pb-1 font-bold bg-gradient-to-r from-[#5398FF] to-[#925CFF] bg-clip-text text-transparent">
          Projects
        </h1>
        <h2 className="text-2xl mt-4">今まで進めてきたプロジェクトです</h2>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[51px]">
             {images.map((img, idx) => (
          <Card key={idx} image={img} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
