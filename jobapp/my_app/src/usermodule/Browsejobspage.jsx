import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Button } from '@mui/material';
import Usernavbar from './Usernavbar';

const BrowsejobsPage = () => {
  return (
    <>
      <Usernavbar />
      <div style={{ marginLeft: 240, padding: 20 }}>
        <h1 style={{color:"white"}} >Browse Jobs</h1>
        <Grid container spacing={3}>
          {/* Job 1 - Company A */}
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: '16px', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Software Engineer at Company A
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Vacancy: 5 Positions
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Location: India, kerala
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Salary: $90,000 - $120,000 per year
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Qualification: Bachelor’s Degree in Computer Science or related field
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Experience: 3+ years in software development
                </Typography>
                <Box display="flex" justifyContent="space-between" marginTop="16px">
                  <Button variant="contained" color="primary">
                    Apply Now
                  </Button>
                  <Button variant="outlined" color="secondary">
                    More Details
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Job 2 - Company B */}
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: '16px', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Marketing Manager at Company B
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Vacancy: 2 Positions
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Location: India , kerala
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Salary: $70,000 - $100,000 per year
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Qualification: Bachelor's Degree in Marketing or Business
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Experience: 5+ years in marketing management
                </Typography>
                <Box display="flex" justifyContent="space-between" marginTop="16px">
                  <Button variant="contained" color="primary">
                    Apply Now
                  </Button>
                  <Button variant="outlined" color="secondary">
                    More Details
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default BrowsejobsPage;
