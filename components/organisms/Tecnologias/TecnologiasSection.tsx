import SectionContenedor from "components/atoms/General/SectionContenedor";
import Titulo from "components/atoms/General/Titulo";
import { Row, Col } from "antd";

import IconoSpring from "assets/iconos/spring.svg";
import IconoHtml from "assets/iconos/html.png";
import IconoCss from "assets/iconos/css.png";
import IconoJs from "assets/iconos/js.png";
import IconoReact from "assets/iconos/react.png";
import IconoBootstrap from "assets/iconos/bootstrap.png";
import IconoJava from "assets/iconos/java.png";
import IconoMySql from "assets/iconos/mysql.svg";
import IconoPython from "assets/iconos/python.png";
import IconoOracleDB from "assets/iconos/oracle-database.png";
import IconoVscode from "assets/iconos/vscode.png";
import IconoGitHub from "assets/iconos/github.png";
import IconoPostman from "assets/iconos/postman.svg";
import IconoIntellijIdea from "assets/iconos/intellij-idea.png";
import IconoInteFigma from "assets/iconos/figma.png";
import IconoTypeScript from "assets/iconos/typescript.png";
import IconoGit from "assets/iconos/git.png";
import IconoAws from "assets/iconos/aws.svg";

import GrupoTecnologias from "components/molecules/Tecnologias/GrupoTecnologias";

const TecnologiasSection = () => {
  return (
    <SectionContenedor>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <Titulo texto="Tecnologías" variante="tituloSecondary"  size={40}/>

            <Row gutter={[32, 32]}>
                <Col xs={24} md={12}>
                    <GrupoTecnologias
                    titulo="Frontend"
                    tecnologias={[
                        { src: IconoHtml, name: "HTML" },
                        { src: IconoCss, name: "CSS" },
                        { src: IconoJs, name: "JavaScript" },
                        { src: IconoReact, name: "React" },
                        { src: IconoBootstrap, name: "Bootstrap" },
                    ]}
                    />
                </Col>

                <Col xs={24} md={12}>
                    <GrupoTecnologias
                    titulo="Backend"
                    tecnologias={[
                        { src: IconoJava, name: "Java" },
                        { src: IconoSpring, name: "Spring" },
                        { src: IconoMySql, name: "MySQL" },
                        { src: IconoPython, name: "Python" },
                        { src: IconoOracleDB, name: "Oracle DB" },
                    ]}
                    />
                </Col>

                <Col xs={24} md={12}>
                    <GrupoTecnologias
                    titulo="Herramientas"
                    tecnologias={[
                        { src: IconoVscode, name: "VS Code" },
                        { src: IconoGitHub, name: "GitHub" },
                        { src: IconoPostman, name: "Postman" },
                        { src: IconoIntellijIdea, name: "IntelliJ IDEA" },
                        { src: IconoInteFigma, name: "Figma" },
                    ]}
                    />
                </Col>

                <Col xs={24} md={12}>
                    <GrupoTecnologias
                    titulo="Aprendiendo"
                    tecnologias={[
                        { src: IconoTypeScript, name: "TypeScript" },
                        { src: IconoGit, name: "Git" },
                        { src: IconoAws, name: "AWS" },
                    ]}
                    />
                </Col>
            </Row>
        </div>
    </SectionContenedor>
  );
};

export default TecnologiasSection;
