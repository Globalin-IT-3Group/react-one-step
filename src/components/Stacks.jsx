import Stack from "./Stack";

function Stacks() {
  return (
    <div class="w-full h-120">
      <div className="text-center mb-12">
        <h1 className="text-5xl pb-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-sky-400">
          My Tech Stack
        </h1>
        <h2 className="text-2xl mt-4 text-gray-800">
          主に使用する技術スタックです
        </h2>
      </div>

      <div className="pt-20">
        <Stack />
      </div>
    </div>
  );
}

export default Stacks;
