import * as React from "react";
import {
  Typography,
  Stack,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  List,
  ListItem,
} from "@mui/material";

import {
  ArrowDropDown as ArrowDropDownIcon,
  DateRange as DateRangeIcon,
  Check as CheckIcon,
} from "@mui/icons-material";

interface ExperienceItemProps {
  icon: React.ReactNode;
  title: string;
  date_range: string;
  tasks: string[];
}

export default function ExperienceItem({
  icon,
  title,
  date_range,
  tasks,
}: ExperienceItemProps) {
  return (
    <Accordion sx={{ width: "100%" }}>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Stack
          direction="row"
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "primary.main" }}
            />
          }
          spacing={2}
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Typography variant="body1" sx={{ textAlign: "left", width: "30%" }}>
            {icon}
            {title}
          </Typography>
          <Typography variant="body1">
            <DateRangeIcon
              color="primary"
              sx={{ verticalAlign: "middle", mr: 1 }}
            />
            {date_range}
          </Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {tasks.map((task, index) => (
            <ListItem key={index}>
              <CheckIcon sx={{ mr: 1 }} />
              <Typography>{task}</Typography>
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
