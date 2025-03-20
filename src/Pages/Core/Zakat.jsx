// import React from 'react'
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
    createData('Obligatory Contribution', 'Muslims are required to donate a fixed percentage (usually 2.5%) of their accumulated wealth each year, provided they exceed a certain threshold (nisab).', 'Ensures wealth circulation and prevents hoarding.'),
    createData('Eligible Recipients', 'The funds collected are designated for the poor, needy, and other specific categories outlined in Islamic teachings.', 'Ensures financial support reaches those in need as per Islamic principles.'),
    createData('Regular Practice', 'Zakat is not a one-time donation but an ongoing commitment to support community welfare and social justice.', 'Encourages long-term responsibility and compassion towards society.'),
    createData('Spiritual and Social Impact', 'Giving Zakat purifies wealth, strengthens faith, and fosters unity within the Muslim community.', 'Develops empathy, gratitude, and a sense of collective responsibility.')
];

  

const features = [
  { name: 'Wealth Purification', description: 'By giving Zakat, individuals cleanse their wealth, ensuring it is used ethically and responsibly.' },
  { name: 'Social Equality', description: 'It helps bridge the gap between different socio-economic groups, promoting fairness and reducing inequality.' },
  { name: 'Community Support', description: 'Zakat fosters a spirit of solidarity and mutual care, reinforcing the bonds within the Muslim community.' },
  { name: 'Spiritual Growth', description: 'Encourages selflessness and gratitude, strengthening faith and reliance on Allah.' }
];

const Zakat = () => {
  return (
    <Layout>
     <section
      className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('../../../public/zakat.jpeg')" }}
    >
      <div className="absolute inset-0  bg-opacity-50"></div>
      <div className="relative z-10 max-w-2xl p-6">
        <h1 className="text-4xl md:text-6xl font-bold">Zakat (Charity)  </h1>
        <p className="mt-4 text-lg md:text-xl">
        Enrich your soul and purify your wealth through the sacred act of Zakat (Charity).
        </p>
      </div>
    </section>


    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Zakat (Charity) </h2>
          <p className="mt-4 text-gray-500">
          Zakat is one of the Five Pillars of Islam, emphasizing the moral obligation of sharing one&apos;s wealth with those in need. It purifies both the giver&apos;s wealth and soul by removing greed and selfishness, and it serves as a reminder that all blessings come from Allah.
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
              src="../../../public/newZakat1.jpeg"
              className="h-56 w-full object-cover rounded-lg bg-gray-100"
            />
            <img
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              src="../../../public/newZakat2.jpeg"
              className="h-56 w-full object-cover rounded-lg bg-gray-100"
            />
            <img
              alt="Side of walnut card tray with card groove and recessed card area."
              src="../../../public/newZakat3.jpeg"
              className="h-56 w-full object-cover rounded-lg bg-gray-100"
            />
            <img
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              src="../../../public/newZakat4.jpeg"
              className="h-56 w-full object-cover rounded-lg bg-gray-100"
            />
          </div>
      </div>
    </div>


    
    <Hadding text='Zakat '/>
    <div className='container mx-auto pt-16 pb-6'>
  <TableContainer className='' component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Aspect</StyledTableCell>
          <StyledTableCell align="left">Description</StyledTableCell>
          <StyledTableCell align="left">Importance</StyledTableCell>
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

export default Zakat