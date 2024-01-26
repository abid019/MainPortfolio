import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import SkillDetail from "./SkillDetail";
import { row1, row2, row3, tech } from "../assets/data/data";
import SkillIcons from "./SkillIcons";


const Skills = () => {
    return <React.Fragment>
        <section className="skills section" id="skills">
            <div className="reveal">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <div className="skills__container container grid">
                <div className="skills__content">
                    <Accordion sx={{backgroundColor: "hsl(var(--hue-color), 60%, 99%)"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1-header">
        
                                <div className="skills__header">
                                        <i className="uil uil-arrow skills__icon"><CodeIcon /></i>
                                        <h1 className="skills__title">Frontend Developer</h1>
                                </div>
                            
                        </AccordionSummary>
                        <AccordionDetails>
                        
                            <div className="skills__list grid">
                                {tech.map((t, idx) => {
                                    if (t.flag  && t.end === "frontend") {
                                        return <SkillDetail key={idx} title={t.name} number={t.percentage} img={t.img}/>
                                    }
                                    return "";
                                })}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="skills__content">
                    <Accordion sx={{backgroundColor: "hsl(var(--hue-color), 60%, 99%)"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1-header">
                            <div className="skills__header">
                                <i className="uil uil-server-network skills__icon"><StorageIcon /></i>

                                <div>
                                    <h1 className="skills__title">Backend Developer</h1>
                                </div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="skills__list grid">
                            {tech.map((t, idx) => {
                                if (t.flag && t.end === "backend") {
                                    return <SkillDetail key={idx} title={t.name} number={t.percentage} img={t.img}/>
                                }
                                return "";
                            })}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="skills__content">
                    <Accordion sx={{backgroundColor: "hsl(var(--hue-color), 60%, 99%)"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                            <div className="skills__header">
                                <i className="uil uil-brackets-curly skills__icon"><DataObjectIcon /></i>

                                <div>
                                    <h1 className="skills__title">Problem Solver</h1>
                                </div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="skills__list grid">
                             {tech.map((t, idx) => {
                                if (t.end === "problemsolver") {
                                    return <SkillDetail key={idx} title={t.name} number={t.percentage} img={t.img}/>
                                }
                                return "";
                             })}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>


            </div>
            <div className="skills-img-container container grid reveal">
                <table>
                    <tbody>
                        <tr>{row1.map((it, idx) => <SkillIcons key={idx} img={it.img} />)}</tr>
                        <tr>{row2.map((it, idx) => <SkillIcons key={idx} img={it.img} />)}</tr>
                        <tr>{row3.map((it, idx) => <SkillIcons key={idx} img={it.img} />)}</tr>
                    </tbody>
                </table>

                
            </div>
        </section>
    </React.Fragment>
}

export default Skills;