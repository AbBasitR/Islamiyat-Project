// import React from 'react'

// import Salat from "./Salat"

import { Grid, Card, CardMedia, CardContent, Typography,  Box } from "@mui/material";
import Button from '@mui/material/Button';

// import { Link } from "react-router-dom";

import { Link } from "react-router";

const articles = [
    {
        category: "Islamic Worship",
        title: "Namaz: The Key to Spiritual Discipline",
        description: "Namaz (Salah) is the most essential act of worship in Islam, strengthening faith, discipline, and connection with Allah. It serves as a constant reminder of our purpose and spiritual duties.",
        image: "../../../public/namaz.jpeg",
  
      }
    ,
      {
        category: "Islamic Practices",
        title: "The Spiritual Benefits of Roza (Fasting)",
        description: "Fasting during Ramadan is an act of devotion that purifies the soul and strengthens self-discipline. It teaches patience, gratitude, and empathy for the less fortunate.",
        image: "../../../public/roza.jpeg",
        
      },
      {
        category: "Islamic Charity",
        title: "Zakat: The Duty of Giving in Islam",
        description: "Zakat is a fundamental pillar of Islam, ensuring wealth distribution to support the needy. It fosters social equality and purifies one's earnings by sharing blessings with others.",
        image: "../../../public/zakat.jpeg",

      },
      {
        category: "Islamic Pilgrimage",
        title: "Hajj: A Journey of Faith and Unity",
        description: "Hajj is the ultimate pilgrimage, a once-in-a-lifetime journey for Muslims. It symbolizes unity, humility, and devotion to Allah, bringing people from all backgrounds together in worship.",
        image: "../../../public/hajj.jpeg",
      
      }
  ];
// 
const CorePrincipals = () => {
    return (
        <div className="container mx-auto py-14">
        <Grid container spacing={2} sx={{ padding: 2 }}>
          {articles.map((article, index) => {
            // Define dynamic route based on article title
            let routePath = "/";
            if (article.title === "Namaz: The Key to Spiritual Discipline") routePath = "/namaz";
            else if (article.title === "The Spiritual Benefits of Roza (Fasting)") routePath = "/roza";
            else if (article.title === "Zakat: The Duty of Giving in Islam") routePath = "/zakat";
            else if (article.title === "Hajj: A Journey of Faith and Unity") routePath = "/hajj";
      
            return (
              <Grid item xs={12} sm={6} md={6} lg={6} key={index}> 
                <Card variant="outlined" sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  {article.image && (
                    <CardMedia
                      component="img"
                      image={article.image}
                      alt={article.category}
                      sx={{ height: 350, objectFit: "cover" }}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Typography variant="caption" color="text.secondary" gutterBottom>
                      {article.category}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {article.description}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "end", marginTop: "20px" }}>
                      <Link to={routePath} style={{ textDecoration: "none" }}>
                        <Button variant="outlined">Learn More</Button>
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
      
      
      

      
        //   <div
        //     style={{
        //         border:"2px solid red"
        //     }}
        //  className="px-6 py-14 mx-auto container">
        //     <Salat />
        //     </div>
    )
}

export default CorePrincipals