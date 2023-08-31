const PrimaryButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-1 bg-purple-700 hover:bg-purple-900 text-white px-6 border-[1px] shadow-lg rounded-lg transition-all duration-150">
      {label}
    </button>
  );
};
export default PrimaryButton;
