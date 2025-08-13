import * as React from "react";
import { Typography, List, ListItem } from "@mui/material";
import { WorkspacePremiumSharp as WorkspacePremiumSharpIcon } from "@mui/icons-material";

interface CertificationsItemProps {
  certifications: string[];
}

export default function CertificationItem({
  certifications,
}: CertificationsItemProps) {
  return (
    <List sx={{ alignSelf: "flex-start", textAlign: "left" }}>
      {certifications.map((certification, index) => (
        <ListItem key={index}>
          <WorkspacePremiumSharpIcon sx={{ mr: 1 }} color="primary" />
          <Typography>{certification}</Typography>
        </ListItem>
      ))}
    </List>
  );
}
