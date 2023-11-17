"use client";
import {
  Container,
  Typography,
} from "@mui/material";

import React from "react";

const AboutPage = () => {
  return (
    <Container maxWidth="lg" disableGutters sx={{ py: 4, px: 2 }}>
      <Typography
        variant="h1"
        textAlign="center"
        sx={{ color: "custom.orange", py: 2, fontWeight: "600" }}>
        About
      </Typography>
      <Typography
        textAlign={"center"}
        lineHeight="28px"
        variant="h3"
        sx={{ color: "custom.orange", py: 2, fontWeight: "600" }}>
        Introducing Hunger Bites
      </Typography>
      <Typography variant="body2" sx={{ py: 2 }}>
      Welcome to Hunger Bites, your ultimate destination for quick and convenient food delivery services across Pakistan. Our mission is to bring delicious meals from your favorite restaurants directly to your doorstep, making dining at home an extraordinary experience.
      </Typography>
      <Typography variant="body2" sx={{ py: 2 }}>
      At Hunger Bites, we believe that food has the power to bring joy, comfort, and connection to people's lives. Our journey began with the vision of creating a seamless platform that connects food enthusiasts with the vibrant culinary scene in Pakistan. We understand that busy schedules and the desire for variety often make it challenging to enjoy restaurant-quality meals. That's why we decided to bridge the gap by introducing a user-friendly app that brings the best of Pakistani cuisine to your table.
      </Typography>
      <Typography variant="body2" sx={{ py: 2 }}>
      Behind Hunger Bites is a dedicated team of food enthusiasts, tech experts, and customer service professionals who are passionate about enhancing your dining experience. We're constantly working to improve our services, gather feedback, and adapt to your preferences.
      </Typography>

      <Typography variant="body2" sx={{ py: 2 }}>
      We're here to serve you, and your feedback matters. Have a question, suggestion, or concern? Reach out to our friendly customer support team, available to assist you around the clock.
      </Typography>
      <Typography variant="body2" sx={{ py: 2 }}>
      Thank you for choosing Hunger Bites for your culinary journey. Join us in exploring the flavors of Pakistan and beyond, one delightful meal at a time.
      </Typography>
      <Typography variant="body2" sx={{ py: 2 }}>
      Savor the convenience, embrace the flavors!
      </Typography>
    </Container>
  );
};

export default AboutPage;
