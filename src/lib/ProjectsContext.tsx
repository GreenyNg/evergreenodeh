"use client";

import { createContext, useContext, useState } from "react";

type ProjectsContextType = {
  projectsActive: boolean;
  setProjectsActive: (active: boolean) => void;
};

const ProjectsContext = createContext<ProjectsContextType>({
  projectsActive: false,
  setProjectsActive: () => {},
});

export function ProjectsProvider({ children }: { children: React.ReactNode }) {
  const [projectsActive, setProjectsActive] = useState(false);
  return (
    <ProjectsContext.Provider value={{ projectsActive, setProjectsActive }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export const useProjects = () => useContext(ProjectsContext);