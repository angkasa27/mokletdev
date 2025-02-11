"use client";
import React from "react";
import { Sync } from "./sync";
import { useAtomValue } from "jotai";
import { listProjectAtom } from "@/lib/jotai";

export const Projects = () => {
  const listProjects = useAtomValue(listProjectAtom);

  return (
    <section id="projects">
      <h1>All project</h1>
      <Sync />
      {listProjects.state === "hasData" &&
        listProjects.data.map((project) => (
          <div key={project.githubId}>
            <a
              href={project.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline cursor-pointer"
            >
              {project.name}
            </a>
          </div>
        ))}
    </section>
  );
};
