import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

type Props = {
    onClick : () => void;
}

const stlyeIcon : React.CSSProperties = {
    color : "#E5E7EB",
    fontSize : 24
}

const BtnMenuMobile = ({onClick} : Props) => {
    return (
        <Button className="navlist-mobile-button"
                type="text"
                icon = {<MenuOutlined style={stlyeIcon} />}
                onClick={onClick}
        ></Button>
    )
}

export default BtnMenuMobile