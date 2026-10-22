import { Suspense } from "react";
import ProjectsView from "./projects-view";

export default function ProjectsPage() {
  return (
    <Suspense fallback={null}>
      <ProjectsView />
    </Suspense>
  );
}
