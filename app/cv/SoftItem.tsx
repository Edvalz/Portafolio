import * as React from "react";
import { Chip, Stack } from "@mui/material";

interface SoftItemProps {
  skills: string[];
}

export default function SoftItem({ skills }: SoftItemProps) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={1}
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 2, flexWrap: "wrap", gap: 2 }}
    >
      {skills.map((skill, index) => (
        <Chip key={index} label={skill} sx={{ bgcolor: "primary.light" }} />
      ))}
    </Stack>
  );
}
