// import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Link } from 'react-router';


const accordionData = [
    { id: 1, title: "The Early Life of Prophet Muhammad (PBUH)", content: "In this section, you will discover the humble beginnings of Prophet Muhammad (PBUH), his upbringing as an orphan, and how his early life shaped him into the most honest and trustworthy person in Makkah. Learn about his challenges, struggles, and the wisdom he gained before prophethood." },
    { id: 2, title: "Prophet Muhammad's (PBUH) Character and Moral Conduct", content: "Explore how Prophet Muhammad (PBUH) embodied truthfulness, patience, and kindness, setting an unparalleled example of integrity and humility. Discover how he treated both friends and enemies with compassion, and why he remains the greatest role model for ethical behavior." },
    { id: 3, title: "Prophet Muhammad's (PBUH) Relationships and Social Life", content: "Delve into the Prophet’s (PBUH) deep bonds with family, companions, and even strangers. Learn how he balanced his roles as a husband, father, friend, and leader, always emphasizing love, respect, and justice in his interactions with others." },
    { id: 4, title: "Prophet Muhammad's (PBUH) Contributions to Law and Society", content: "Discover how Prophet Muhammad (PBUH) transformed an unjust society into one based on equality, fairness, and human rights. Learn how his teachings established justice, women’s rights, and social welfare, leaving an everlasting impact on the world." },
    { id: 5, title: "Lessons from Prophet Muhammad's (PBUH) Life", content: "This section reveals timeless lessons from the life of Prophet Muhammad (PBUH) that can inspire and guide us today. Whether it’s facing challenges with patience, leading with wisdom, or showing kindness to all, his life teaches us how to live with purpose, faith, and excellence." },
  ];

const EarlyLife = () => {


    return (
    <>
       <div className='mx-auto container'>
      {accordionData.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${item.id}-content`} id={`panel${item.id}-header`}>
            <Typography component="span">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.content}</AccordionDetails>
          <AccordionActions>
            
            <Button> <Link to='/earlylife'> Learn More </Link></Button>
          </AccordionActions>
        </Accordion>
      ))}
    </div>
    </>
  )
}

export default EarlyLife