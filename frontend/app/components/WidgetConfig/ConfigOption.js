const ConfigOption = ({ label, option, id, onClick }) => {
  const isActive = option === id;
  return (
    <div
      onClick={() => {
        onClick(id);
      }}
      className="relative px-2 flex justify-center cursor-pointer">
      <div className={`${isActive && "text-purple-700 font-bold"}`}>{label}</div>
      <div
        className={`absolute -bottom-1 bg-purple-700 rounded-full transition-all duration-150 h-1
        ${isActive ? "w-full" : "w-0"}`}></div>
    </div>
  );
};
export default ConfigOption;
