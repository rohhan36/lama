const HomePageSkeleton = () => {
  return (
    <div className="h-[100vh] w-full py-7 px-10 flex flex-col items-center justify-start">
      <div className="flex justify-between w-[80vw]">
        <div className="text-purple-700 font-bold text-4xl">Projects</div>
        <div className="blurhash"></div>
      </div>
      <div className="w-[80vw] gap-10 mt-10 grid justify-center projectsList">
        <div className="blurhash h-24 w-64 rounded-lg"></div>
        <div className="blurhash h-24 w-64 rounded-lg"></div>
        <div className="blurhash h-24 w-64 rounded-lg"></div>
        <div className="blurhash h-24 w-64 rounded-lg"></div>
        <div className="blurhash h-24 w-64 rounded-lg"></div>
        <div className="blurhash h-24 w-64 rounded-lg"></div>
      </div>
    </div>
  );
};
export default HomePageSkeleton;
