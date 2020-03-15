import React from "react";
import { List, Header } from "semantic-ui-react";
export const User = ({ users }) => {
  return (
    <List>
      {users.map(user => {
        return (
          <List.Item key={user.id}>
            <Header>{user.name}</Header>
            <Header>{user.id}</Header>
            <Header>{user.email}</Header>
          </List.Item>
        );
      })}
    </List>
  );
};
