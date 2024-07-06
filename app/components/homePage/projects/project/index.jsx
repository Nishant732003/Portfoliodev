"use client";

import { useState } from "react";
import {
  Container,
  Wrapper,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./projectStyles";
import ProjectCard from "../card/ProjectCard";
import { projects } from "@/app/utils/data/projects-data";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("Frontend");

  return (
    <Container id="projects">
      <Wrapper>
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Projects
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <ToggleButtonGroup>
          <ToggleButton
            $active={toggle === "Frontend"}
            value="Frontend"
            onClick={() => setToggle("Frontend")}
          >
            Frontend
          </ToggleButton>
          <Divider />
          <ToggleButton
            $active={toggle === "FullStack"}
            value="FullStack"
            onClick={() => setToggle("FullStack")}
          >
            FullStack
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
          {projects
            .filter((project) => project?.category === toggle)
            .map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
