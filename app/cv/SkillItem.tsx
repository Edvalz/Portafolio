import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

interface Skill {
  icon: React.ReactNode;
  title: string;
  text: string;
}
interface CertificationsItemProps {
  skills: Skill[];
}

export default function SkillItem({ skills }: CertificationsItemProps) {
  return (
    <List sx={{ alignSelf: "flex-start", textAlign: "left" }}>
      {skills.map((skill, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "primary.main" }}>{skill.icon}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={skill.title}
            secondary={skill.text}
            slotProps={{
              primary: {
                sx: { fontWeight: "bold" },
              },
              secondary: {
                sx: { color: "text.primary" },
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}
