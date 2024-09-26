// Projects.tsx
'use client';
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";
import AnimatedButton from "./AnimatedButton";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);
  // Filter projects by category
  const reels = projectsData.filter(project => project.category === "Reel");
  const longVideos = projectsData.filter(project => project.category === "Long Video");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>
        My Reels
      </SectionHeading>
      <div className="flex flex-row flex-wrap justify-center gap-8 mb-28">
        {reels.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            videoUrl={project.videoUrl}
            thumbnailUrl={project.thumbnailUrl}
            category={project.category} // <--- Include category here
          />
        ))}
      </div>
      <SectionHeading>
        S E R V I C E S
        
      </SectionHeading>
      {/* /* <p className="flex justify-center text-left text-lg mb-8">
    Video Editing<br />
    Motion Graphics Artist<br />
    Photo Editing<br />
    3D Animation/Designing(Blender)<br />
    Social Media Handler<br />
    Copyright Responsible for Youtube<br />
    <br />
  // </p> */ }
<div className="flex justify-center">
  <ul className="text-left text-lg mb-8 list-disc" style={{ maxWidth: '500px', paddingLeft: '4rem' }}>
    <li>Video Editing</li>
    <li>Motion Graphics Artist</li>
    <li>Photo Editing</li>
    <li>3D Animation/Designing (Blender)</li>
    <li>Social Media Handler</li>
    <li>Copyright Responsible for Youtube</li>
  </ul>
</div>

 
      <div className="flex flex-row flex-wrap justify-center gap-8 mb-16">
        {longVideos.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            videoUrl={project.videoUrl}
            thumbnailUrl={project.thumbnailUrl}
            category={project.category} // <--- Include category here
          />
        ))}
      </div>
      <div className="flex justify-center">
        <AnimatedButton link="https://drive.google.com/drive/folders/1Jqp7KxGHz3isegSzQmwHJfKVnq-O0GgB" />
      </div>
    </section>
  );
}
