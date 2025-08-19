import * as React from "react";
import Link from "next/link";
import { Typography, Stack, Tooltip } from "@mui/material";

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
  tool?: string;
}

export default function ContactItem({
  icon,
  text,
  href,
  tool,
}: ContactItemProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      {icon}
      <Tooltip title={tool} arrow>
        <Typography variant="body1">
          {href ? <Link href={href}>{text}</Link> : text}
        </Typography>
      </Tooltip>
    </Stack>
  );
}
