"use client";
import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import useSWR from "swr";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { API_URL } from "@/configuration";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());
const Categories = ({gri}) => {
  const { data } = useSWR(`${API_URL}/category`, fetcher);
  const [expanded, setExpanded] = useState([]);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log({data})

  return (
    <Grid
      item
      xs={gri}
      display={{ xs: "none", md: "flex" }}
      container
      justifyContent={"center"}
      direction="column"
      padding={"15px"}
      bgcolor="custom.grayLight"
    >
      <Typography
        variant="h6"
        color="primary"
        fontWeight={700}
        letterSpacing="0.8px"
        textTransform={"uppercase"}
        lineHeight="38px"
      >
        Categories
      </Typography>
      <Box px={2}>
        {data?.categories?.map((user) => (
          <Accordion
            key={user?.id}
            expanded={expanded === user?.id}
          >
            <Link href={`/category/${user?.id}`} style={{textDecoration: 'none'}}>
            <AccordionSummary
                  expandIcon={
                    expanded === user?.id ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore color="primary" />
                    )
                  }
            >
              <div
              >
                <Typography color="primary" fontWeight={"bold"}>
                  {user?.name?.toUpperCase()}
                </Typography>
              </div>
            </AccordionSummary>
            </Link>
          </Accordion>
        ))}
      </Box>
    </Grid>
  );
};

export default Categories;