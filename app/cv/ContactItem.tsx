import * as React from "react";
import Link from "next/link";
import { Typography, Stack } from "@mui/material";

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

export default function ContactItem({ icon, text, href }: ContactItemProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      {icon}
      <Typography variant="body1">
        {href ? <Link href={href}>{text}</Link> : text}
      </Typography>
    </Stack>
  );
}
