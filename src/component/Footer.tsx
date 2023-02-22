import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import "../App.css";
import Home from "../assets/Menu.svg";
import Kie from "../assets/Kie.svg";
import Setting from "../assets/Setting.svg";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      className={"Footer"}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="HOME"
        value="recents"
        icon={<img src={Home} />}
      />
      <BottomNavigationAction
        label="KIE-VERSE"
        value="favorites"
        style={{ fontSize: "0.5rem" }}
        icon={
          <img
            src={Kie}
            style={{
              marginBottom: "-20px",
              paddingRight: "3px",
              marginTop: "-4px",
            }}
          />
        }
      />
      <BottomNavigationAction
        label="SETTING"
        value="nearby"
        icon={<img src={Setting} />}
      />
    </BottomNavigation>
  );
}
