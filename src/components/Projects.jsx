import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { projects } from "../assets/data/projects";
import Proj from "./Proj";

const Projects = () => {
  return (
    <React.Fragment>
        <section className="project section" >
          <div className="reveal" >
            <div className="section__title"
              style={{
                marginBottom:"5rem"
              }}
            >Projects</div>
              <div className="row "
                style={{display:"flex",
                        flexWrap:"wrap",
                        gap:"60px",
                        justifyContent:"center",
                        margin:"auto",
                        width:"70%",
                }}    
                >
                { projects.map((project,i)=>{
                  return (
                    <div
                      key={i} 
                      className="col-md-4 my-2 " style={{height:"395px"}}  >
                        <Proj
                          thumbnail={project.thumbnail}
                          title={project.title}
                          desc={project.desc}
                          live={project.live}
                          repo={project.github}
                        />
                    </div>
                  )
                })}
              </div>
          </div>
        </section>
    </React.Fragment>
  );
};
export default Projects;
