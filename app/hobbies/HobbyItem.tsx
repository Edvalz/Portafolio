import * as React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grow,
  Stack,
  Typography,
} from "@mui/material";

interface Hobby {
  image: string;
  img_title: string;
  title: string;
  text: string;
}

interface HobbyItemProps {
  hobbies: Hobby[];
}

export default function HobbyItem({ hobbies }: HobbyItemProps) {
  const [grow, setGrow] = useState<boolean>(false);

  useEffect(() => {
    setGrow(true);
  }, []);

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems="center"
      justifyContent="center"
      sx={{ flexWrap: "wrap", gap: 1, width: "100%" }}
    >
      {hobbies.map((hobby, index) => (
        <Grow
          in={grow}
          style={{ transformOrigin: "0 0 0" }}
          {...(grow ? { timeout: 3000 } : {})}
          key={index}
        >
          <Card
            key={index}
            sx={{
              maxWidth: 300,
              bgcolor: "#111111ff",
              color: "primary.contrastText",
            }}
          >
            <CardMedia
              sx={{ height: 225 }}
              image={hobby.image}
              title={hobby.img_title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hobby.title}
              </Typography>
              <Typography variant="body2">{hobby.text}</Typography>
            </CardContent>
          </Card>
        </Grow>
      ))}
    </Stack>
  );
}
