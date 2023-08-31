const FormInput = ({ label, note, type, onChange, value }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="chatbot-name" className="font-bold">
        {label}
      </label>
      <input
        onChange={onChange}
        id="chatbot-name"
        type={type}
        className="border-2 focus:outline-purple-700 p-1  rounded-lg"
        value={value}
      />
      <div className="text-sm text-neutral-500">{note}</div>
    </div>
  );
};
export default FormInput;
