import React from "react";
import { useTheme } from "@mui/material/styles";
import { usePageHeaderStyles } from "./PageHeaderStyles";
import Avatar from "@mui/material/Avatar";

function PageHeader(props) {
  const theme = useTheme();
  const styles = usePageHeaderStyles(theme);

  return (
    <div className={styles.headerCon}>
      <span className={styles.title}>{props.title}</span>
      <div className={styles.profCon}>
        <span className={styles.name}>Jones Ferdinand</span>
        <Avatar
          className={styles.avatar}
          alt="Jones Ferdinand"
          src="/static/images/avatar/1.jpg"
        />
      </div>
    </div>
  );
}

export default PageHeader;
