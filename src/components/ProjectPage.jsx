import React , {useState} from 'react';
import ReactDom from "react-dom";
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCarousel from "./ProjectCarousel";


function ProjectPage() {
AOS.init();
  return (
    <div id="ProjectPage" className="project-section">
      <h2 className="project-title title-heading"> My Projects</h2>
      <hr className="title-hr"/>

      <table id="table1">
        <tr className="project-table">
          <td className="project-table-cells">
            <a className="project-button-hover" href="/stephens-website/cs181research.html">
              <div className="project-hover">
                <img class="project-pictures" src="images/cs181img.png" onClick="window.open(https://wonnykwak.github.io/stephens-website/ethicsresearch.html)"/>
                <div className="middle">
                  <div className="hover-heading">
                    <h2 className="project-sub-heading"> Pwd Manager Study</h2>
                    <hr className="project-hr" />
                  </div>
                  <div class="project-text">
                    <p className="project-sub-info"> The Effects of Password Manager Interface Variations on Usability  </p>
                  </div>
                </div>
              </div>
            </a>
          </td>
          <td className="project-table-cells">
            <a className="project-button-hover" href="/stephens-website/curesearch.html">
              <div className="project-hover">
                <img className="project-pictures" src="images/cuboulderimg.jpg" onClick="window.open(https://wonnykwak.github.io/stephens-website/curesearch.html)"/>
                <div class="middle">
                  <div className="hover-heading-cu">
                    <h2 className="project-sub-heading"> CU AI Research</h2>
                    <hr className="project-hr" />
                  </div>
                  <div class="project-text">
                    <p className="project-sub-info"> The Human Perception of AI : Literature Review + Survery Results</p>
                  </div>
                </div>
              </div>
            </a>
          </td>
        </tr>
        <tr>
        <td className="project-table-cells">
          <a className="project-button-hover" href="/stephens-website/ethicsresearch.html">
            <div className="project-hover">
              <img class="project-pictures" src="images/airesearchpaper.png" onClick="window.open(https://wonnykwak.github.io/stephens-website/ethicsresearch.html)"/>
              <div className="middle">
                <div className="hover-heading">
                  <h2 className="project-sub-heading"> AI Research Paper</h2>
                  <hr className="project-hr" />
                </div>
                <div class="project-text">
                  <p className="project-sub-info"> Ethical Dilemmas in AI Vehicles : Literature Review + Survery Results</p>
                </div>
              </div>
            </div>
          </a>
        </td>
          <td className="project-table-cells">
          <a className="project-button-hover" href="/stephens-website/snpresearch.html">
            <div className="project-hover">

                <img className="project-pictures" src="images/stanfordneurodiversity.jpeg" onClick="window.open(https://wonnykwak.github.io/stephens-website/snpresearch.html)"/>

              <div class="middle">
                <div className="hover-heading">
                  <h2 className="project-sub-heading"> SNP Reach Project</h2>
                  <hr className="project-hr" />
                </div>
                <div class="project-text">
                  <p className="project-sub-info"> Stanford SNP Reach: Focsuing on Neurodiversity Awareness</p>
                </div>
              </div>
            </div>
            </a>
          </td>
        </tr>
      </table>
    <ProjectCarousel />
    </div>
)
}

export default ProjectPage;
