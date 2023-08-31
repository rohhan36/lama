const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 text-rose-500  hover:text-white hover:bg-rose-600 transition-all duration-200 rounded-r-md border-[1px] border-l-0 active:scale-90">
      Delete
    </button>
  );
};
export default DeleteButton;
