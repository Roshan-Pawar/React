const Shimmer = () => {
  return (
    <div className="shimmer">
      <div className="mt-8 ml-96 justify-center">
        <h1 className="bg-gray-200 h-10 ml-16 w-1/2 rounded-full"></h1>
      </div>
      <div className="flex mt-10 ml-36">
        <h1 className="w-28 h-9 m-5 rounded-full bg-gray-200"></h1>
        <h1 className="w-28 h-9 m-5 rounded-full bg-gray-200"></h1>
        <h1 className="w-28 h-9 m-5 rounded-full bg-gray-200"></h1>
      </div>
      <div className="flex wrap ml-20 justify-center">
        <h1 className="w-52 h-60 m-9 rounded-xl bg-gray-200"></h1>
        <h1 className="w-52 h-60 m-9 rounded-xl bg-gray-200"></h1>
        <h1 className="w-52 h-60 m-9 rounded-xl bg-gray-200"></h1>
        <h1 className="w-52 h-60 m-9 rounded-xl bg-gray-200"></h1>
      </div>
    </div>
  );
};

export default Shimmer;
