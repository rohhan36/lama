const EditButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:text-white hover:bg-blue-600 transition-all duration-100 rounded-l-md border-[1px] active:scale-90">
      Edit
    </button>
  );
};
export default EditButton;
