import ProjectFlow from "../components/ProjectFlow/ProjectFlow";
import UserRoute from "../components/UI/UserRoute";
export default function ProjectLayout({ children }) {
  return (
    <div className="flex md:flex-row flex-col">
      <ProjectFlow />
      <div>
        <UserRoute />
        {children}
      </div>
    </div>
  );
}
