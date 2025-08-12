import * as React from "react";
import { Chip, Stack } from "@mui/material";
import { WorkspacePremiumSharp as WorkspacePremiumSharpIcon } from "@mui/icons-material";

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
        <Chip label={skill} sx={{ bgcolor: "primary.main" }} />
      ))}
    </Stack>
  );
}
