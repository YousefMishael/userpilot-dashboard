import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { useSideBarStyles } from "./SideBarStyles";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import PersonIcon from "@mui/icons-material/Person";
import { sideItems } from "./Utils/SideBarUtils";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

function SideBar() {
  const theme = useTheme();
  const styles = useSideBarStyles(theme);
  const [items, setItems] = useState(sideItems);
  const [openMenu, setOpenMenu] = useState(false);
  const path = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let _items = items.map((item) => {
      const _item = { ...item };
      _item.isActive = item.to === path.pathname;
      if (typeof item.icon === "string") _item.icon = getIcon(item.icon); //get icon component at initialization
      return _item;
    });

    setItems(_items);
  }, [path.pathname]);

  //this function added to add class name to icon
  function getIcon(icon) {
    switch (icon) {
      case "overview":
        return <DonutSmallIcon className={styles.icon} />;
      case "tickets":
        return <ConfirmationNumberIcon className={styles.icon} />;
      case "ideas":
        return <EmojiObjectsIcon className={styles.icon} />;
      case "users":
        return <PersonIcon className={styles.icon} />;
      default:
        return;
    }
  }

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  function onNavigate(to) {
    if (openMenu) handleOpenMenu();
    navigate(to);
  }

  return (
    <>
      <div
        className={`${styles.sidebarContainer} ${openMenu && styles.menuOpen}`}
      >
        <div className={styles.logo} />
        <div>
          <ul className={styles.sideList}>
            {items.map((item) => (
              <li key={item.id} onClick={onNavigate.bind(null, item.to)}>
                <span className={`${item.isActive && styles.active}`} />
                {item.icon}
                <span className={styles.title}>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button
        variant="contained"
        className={styles.menuBtn}
        onClick={handleOpenMenu}
      >
        <MenuIcon />
      </Button>
    </>
  );
}

export default SideBar;
