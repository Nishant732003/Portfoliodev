"use client";

import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme } from "@/app/utils/Theme";
import Projects from "./project/index";
import ProjectDetails from "./projectDetails/index";
import styled from "styled-components";

const Body = styled.div`
  overflow-x: hidden;
`;

function ProjectCard() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Body>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />

          {openModal?.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </ThemeProvider>
    </>
  );
}

export default ProjectCard;
