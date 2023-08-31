const Icon = ({ bg, icon }) => {
  return (
    <div className={`h-12 w-12 rounded-full flex justify-center items-center ${bg}`}>{icon}</div>
  );
};
export default Icon;
