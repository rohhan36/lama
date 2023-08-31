"use client";

import Logo from "../UI/Logo";
import ProjectFlowItem from "./ProjectFlowItem";

const ProjectFlow = () => {
  return (
    <div className="md:w-[250px] w-full">
      <div className="flex md:flex-col flex-row gap-3 py-3 px-2 bg-purple-100 md:h-[98vh] h-20 overflow-y-auto sticky top-0">
        <Logo />
        <ProjectFlowItem label="Projects" route="project" number="1" />
        <ProjectFlowItem label="Widget Configurations" route="widget-configuration" number="2" />
        <ProjectFlowItem label="Deployment" route="deployment" number="3" />
        <ProjectFlowItem label="Pricing" route="pricing" number="4" />
      </div>
    </div>
  );
};
export default ProjectFlow;
