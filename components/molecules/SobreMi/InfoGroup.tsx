import React from "react";
import InfoItem from "components/atoms/SobreMi/InfoItem";
import { EnvironmentOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";

const contenedorStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    marginTop: 20,
};

const InfoGroup = () => {
    return (
        <div style={contenedorStyle}>
            <InfoItem icon={<EnvironmentOutlined />} texto="Chile" />
            <div style={{display : 'flex', gap : 20, flexWrap : "wrap"}}>
                <InfoItem icon={<MailOutlined />} texto="vicen.ramirezg@duoc.cl"/>
                <InfoItem icon={<GithubOutlined />} texto="github.com/ViceAsd18" href="https://github.com/ViceAsd18"/>
                <InfoItem icon={<LinkedinOutlined />} texto="in/vicente-ramírez-garay" href="https://www.linkedin.com/in/vicente-ram%C3%ADrez-garay/"/>
            </div>
        </div>
    );
};

export default InfoGroup;
