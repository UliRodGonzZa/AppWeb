import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { ContactCard } from "../components/ContactCard";
import { cards } from "../constants/ContactCards";

export const ContactSection = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mt: 0 }}>
        <Typography variant="h5" align="center" gutterBottom color="primary">
          Social Media
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {cards.map((card, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <ContactCard
                icon={card.icon}
                label={card.label}
                url={card.url}
                hoverColor={card.hoverColor}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
