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
import Hadding from "../../Components/Hadding";



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

  const rows2 = [
    createData('Rituals in Mecca', 'Hajj involves a series of prescribed rituals performed in and around the holy city of Mecca, including entering a state of Ihram, circumambulating the Kaaba, and walking between Safa and Marwah.', 'Symbolizes devotion, unity, and obedience to Allah.'),
    createData('Day at Arafat', 'Pilgrims spend a significant part of Hajj at the plain of Arafat, engaging in supplication and reflection, which is considered the climax of the pilgrimage.', 'Represents repentance, forgiveness, and spiritual purification.'),
    createData('Other Practices', 'The journey also includes symbolic acts like the stoning of the devil in Mina and the sacrifice of an animal, reinforcing the themes of sacrifice and renewal.', 'Teaches self-discipline, submission, and detachment from material desires.'),
    createData('Completion and Celebration', 'After completing Hajj, pilgrims perform Tawaf al-Ifadah and celebrate Eid al-Adha, marking the end of their spiritual journey.', 'Signifies fulfillment of a religious duty and a fresh spiritual beginning.')
];


const features = [
  { name: 'Spiritual Renewal', description: 'Hajj offers a unique opportunity to leave behind worldly concerns and focus on one\'s spiritual journey, deepening the connection with Allah.' },
  { name: 'Global Unity', description: 'The pilgrimage brings together Muslims from diverse backgrounds, fostering a sense of brotherhood, equality, and shared purpose.' },
  { name: 'Personal Transformation', description: 'Through the challenges and rituals of Hajj, participants experience personal growth, enhanced self-discipline, and a renewed commitment to their faith.' },
  { name: 'Forgiveness and Mercy', description: 'Hajj serves as a means of seeking Allah’s forgiveness, allowing pilgrims to return with a cleansed soul and a fresh start in life.' }
];



// import React from 'react'

const Hajj = () => {
  return (
    <Layout>
        
        <section
      className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('../../../public/hajj.jpeg')" }}
    >
      <div className="absolute inset-0  bg-opacity-50"></div>
      <div className="relative z-10 max-w-2xl p-6">
        <h1 className="text-4xl md:text-6xl font-bold">Hajj (Pilgrimage) </h1>
        <p className="mt-4 text-lg md:text-xl">
        Deepen your connection with Allah and experience profound transformation through the sacred journey of Hajj (Pilgrimage).
        </p>
      </div>
    </section>


    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Importance Hajj (Pilgrimage)  </h2>
          <p className="mt-4 text-gray-500">
          Hajj is one of the Five Pillars of Islam and represents a profound journey of spiritual renewal. It is a once-in-a-lifetime obligation for Muslims who are physically and financially able, symbolizing submission to Allah and unity among the global Muslim community.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              src="../../../public/newHajj1.jpeg"
              className="h-56 w-full object-cover rounded-lg bg-gray-100"
            />
            <img
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              src="../../../public/newHajj2.jpeg"
              className="h-56 w-full object-cover rounded-lg bg-gray-100"
            />
            <img
              alt="Side of walnut card tray with card groove and recessed card area."
              src="../../../public/newHajj3.jpeg"
              className="h-56 w-full object-cover rounded-lg bg-gray-100"
            />
            <img
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              src="../../../public/newHajj4.jpeg"
              className="h-56 w-full object-cover rounded-lg bg-gray-100"
            />
          </div>
      </div>
    </div>


    
    <Hadding text='Components of Hajj (Pilgrimage) '/>
    <div className='container mx-auto pt-16 pb-6'>
  <TableContainer className='' component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Ritual</StyledTableCell>
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

export default Hajj