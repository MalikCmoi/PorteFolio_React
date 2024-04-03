import React, { useState, useEffect } from "react";
import ProjectBox from "../../Components/ProjectBox/ProjectBox";
import "./Projects.css";


export default function Projects() {
    const [projectBoxTab, setProjectBoxTab] = useState({
        finish: false,
        data: [],
      });
    
      useEffect(() => {
        getApi()
          .then((data) => {
            setProjectBoxTab({ finish: true, data: data });
          })
          .catch((error) => {
            console.log("Error fetching data from API:", error);
          });
      }, []);
    
      let content;
      if (projectBoxTab.data.length > 0 && projectBoxTab.finish) {
        content = <div className="card-project-list" style={{gap:"15px"}}>
            {
              projectBoxTab.data.map((item) => {
                return <ProjectBox key={item.id} title={item.title} descr={item.descr} photo={item.image} tech={item.tech}  />
              })
            }
        </div>
        console.log(content);
      }
    
      function getApi() {
        return fetch("http://127.0.0.1/PorteFolioApi/Api.php?project")
          .then((response) => response.json())
          .catch((error) => {
            console.log("Error fetching data from API:", error);
            throw error;
          });
      }
    
      return (<div className="home-container">{content}</div>);
}
