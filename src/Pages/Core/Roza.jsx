// import React from 'react'
import Hadding from "../../Components/Hadding";
import Layout from "../../Components/Layout"

// import {  } from "../../../public/roza.jpeg";



import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  

const benefits = [
  { name: 'Self-discipline', description: 'Fasting builds personal resilience and a strong sense of self-control.' },
  { name: 'Gratitude', description: 'Experiencing hunger and thirst fosters gratitude for everyday blessings and sustenance.' },
  { name: 'Charity and Empathy', description: 'Sawm nurtures compassion, encouraging Muslims to support charitable causes and aid those in need.' },
  { name: 'Spiritual Purification', description: 'Fasting purifies the soul, increases piety, and strengthens one’s relationship with Allah.' }
];


const rows2 = [
  createData('Timing', 'Fasting occurs during the holy month of Ramadan.', 'It is observed as an obligation upon all eligible Muslims and is one of the Five Pillars of Islam.'),
  createData('Daily Practice', 'From dawn (Suhoor) until sunset (Iftar), Muslims abstain from food, drink, smoking, and other physical needs.', 'Teaches self-restraint, patience, and devotion to Allah.'),
  createData('Preparatory and Concluding Meals', 'The pre-dawn meal (Suhoor) prepares the body for the day of fasting, and the evening meal (Iftar) breaks the fast at sunset.', 'Ensures physical well-being and strengthens the sense of gratitude.'),
  createData('Spiritual Focus', 'Fasting is not just about abstaining from food but also about increasing prayers, Quran recitation, and avoiding sinful behavior.', 'Enhances spiritual growth, piety, and connection with Allah.')
];



const Roza = () => {
  return (
    <Layout>
          <section
      className="relative w-full h-[75vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('../../../public/roza.jpeg')" }}
    >
      <div className="absolute inset-0  bg-opacity-50"></div>
      <div className="relative z-10 max-w-2xl p-6">
        <h1 className="text-4xl md:text-6xl font-bold">Sawm (Fasting)</h1>
        <p className="mt-4 text-lg md:text-xl">
        Establish a Strong Bond with Allah Through Salat.
        </p>
      </div>
    </section>



    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 pt-24 pb-6 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Importance of Fasting</h2>
          <p className="mt-4 text-gray-500">
          Sawm is one of the Five Pillars of Islam and serves as a period of spiritual reflection, self-improvement, and heightened devotion. By abstaining from food and drink during the daylight hours of Ramadan, Muslims develop empathy for the less fortunate and gain a deeper understanding of the hardships others face.
          </p>


          <h2 className="text-3xl pt-14 font-bold tracking-tight text-gray-900 sm:text-2xl">Benefits</h2>
          <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        {benefits.map((benefit) => (
    <div key={benefit.name} className="border-t border-gray-200 pt-4">
      <dt className="font-medium text-gray-900">{benefit.name}</dt>
      <dd className="mt-2 text-sm text-gray-500">{benefit.description}</dd>
    </div>
  ))}
</dl>
          {/* <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl> */}
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              src="../../../public/newFasting1.jpeg"
              className="h-56 w-full object-cover rounded-lg bg-gray-100"
            />
            <img
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              src="../../../public/newFasting2.jpeg"
              className="h-56 w-full object-cover rounded-lg bg-gray-100"
            />
            <img
              alt="Side of walnut card tray with card groove and recessed card area."
              src="../../../public/newFasting3.jpeg"
              className="h-56 w-full object-cover rounded-lg bg-gray-100"
            />
            <img
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              src="../../../public/newFasting5.jpeg"
              className="h-56 w-full object-cover rounded-lg bg-gray-100"
            />
          </div>

      </div>
    </div>


    <Hadding text='Components of Swam'/>
    <div className='container mx-auto pt-16 pb-6'>
  <TableContainer className='' component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Component</StyledTableCell>
          <StyledTableCell align="left">Description</StyledTableCell>
          <StyledTableCell align="left">Significance</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows2.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.name}
            </StyledTableCell>
            <StyledTableCell align="left">{row.calories}</StyledTableCell>
            <StyledTableCell align="left">{row.fat}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</div>


    </Layout>
  )
}

export default Roza