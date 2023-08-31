const SecondaryButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-1 px-4 border-2  hover:border-purple-700  hover:bg-purple-100 shadow-lg rounded-lg transition-all duration-150">
      {label}
    </button>
  );
};
export default SecondaryButton;
