"use client";

import Upload from "../components/Upload/Upload";
import TranscriptList from "../components/Transcript/TranscriptList";
import { useSearchParams } from "next/navigation";
import Configuration from "../components/WidgetConfig/Configuration";

const ProjectPage = () => {
  const params = useSearchParams();
  const state = params.get("state");
  let body = (
    <>
      <Upload />
      <TranscriptList />
    </>
  );

  if (state === "widget-configuration") {
    body = <Configuration />;
  }
  return (
    <section className="w-full flex justify-center">
      <div className="p-8 flex flex-col gap-5 items-center">{body}</div>
    </section>
  );
};

export default ProjectPage;
