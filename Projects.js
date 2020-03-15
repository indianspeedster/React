import React from "react";
import { List, Header } from "semantic-ui-react";
export const Projects = ({ Pro }) => {
  return (
    <List>
      {Pro.map(pro => {
        return (
          <List.Item key={pro.prjid}>
            <Header>{pro.userids}</Header>
            <Header>{pro.prjid}</Header>
            <Header>{pro.prjtitle}</Header>
          </List.Item>
        );
      })}
    </List>
  );
};
