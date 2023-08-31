import { useSearchParams, useRouter } from "next/navigation";

const ProjectFlowItem = ({ label, number, route }) => {
  const params = useSearchParams();
  const router = useRouter();
  const state = params.get("state");
  const isActive = state === route;
  return (
    <div
      onClick={() => {
        router.push(`/projects/?state=${route}`);
      }}
      className={`flex p-3 gap-2 rounded-full text-white items-center hover:bg-neutral-500/10 cursor-pointer
      ${isActive && "bg-purple-700 pointer-events-none"}
       `}>
      <div
        className={` h-5 w-5 flex justify-center items-center rounded-full text-xs
        ${isActive ? "bg-purple-950 text-white" : " bg-neutral-500/30  text-black"}
        `}>
        {number}
      </div>
      <div
        className={`text-sm md:w-[150px] w-auto
        ${isActive ? "text-white" : "text-black"}`}>
        {label}
      </div>
    </div>
  );
};
export default ProjectFlowItem;
