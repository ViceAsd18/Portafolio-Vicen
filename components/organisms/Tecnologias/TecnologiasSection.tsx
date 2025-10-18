import SectionContenedor from "components/atoms/General/SectionContenedor";
import Titulo from "components/atoms/General/Titulo";
import { Row, Col } from "antd";

const IconoSpring = "assets/iconos/spring.svg";
const IconoHtml = "assets/iconos/html.png";
const IconoCss = "assets/iconos/css.png";
const IconoJs = "assets/iconos/js.png";
const IconoReact = "assets/iconos/react.png";
const IconoBootstrap = "assets/iconos/bootstrap.png";
const IconoJava = "assets/iconos/java.png";
const IconoMySql = "assets/iconos/mysql.svg";
const IconoPython = "assets/iconos/python.png";
const IconoOracleDB = "assets/iconos/oracle-database.png";
const IconoVscode = "assets/iconos/vscode.png";
const IconoGitHub = "assets/iconos/github.png";
const IconoPostman = "assets/iconos/postman.svg";
const IconoIntellijIdea = "assets/iconos/intellij-idea.png";
const IconoInteFigma = "assets/iconos/figma.png";
const IconoTypeScript = "assets/iconos/typescript.png";
const IconoGit = "assets/iconos/git.png";
const IconoAws = "assets/iconos/aws.svg";

import GrupoTecnologias from "components/molecules/Tecnologias/GrupoTecnologias";

const TecnologiasSection = () => {
  return (
    <SectionContenedor className="tecnologias-section">
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
