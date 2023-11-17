import React from 'react'
import DineInForm from './DineInForm'
import { Box, Grid } from '@mui/material'
import { MainCard } from '@/components'

function Dine() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
    <Grid container direction="column" justifyContent="flex-end">
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: { xs: "calc(100vh - 134px)", md: "calc(100vh - 112px)" },
          }}
        >
          <Grid item>
          <MainCard
    sx={{
      maxWidth: { xs: 400, md: 600 },
      margin: { xs: 2.5, md: 3 },
      "& > *": {
        flexGrow: 1,
        flexBasis: "50%",
      },
    }}
    content={false}
    // {...other}
    border={false}
  >
    <Box sx={{ p: { xs: 2, sm: 3, md: 5, xl: 5 } }}><DineInForm/></Box>
  </MainCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Dine