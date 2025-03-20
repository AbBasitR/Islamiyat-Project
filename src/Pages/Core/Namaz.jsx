// import React from 'react'
import Hadding from "../../Components/Hadding";
import Layout from "../../Components/Layout"








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

const rows = [
  createData('Intention (Niyyah)', 'A conscious and sincere intention to perform Salat for the sake of Allah.', 'It is a prerequisite for the validity of the prayer.'),
  createData('Takbir (Takbirat-ul-Ihram)', 'The opening declaration "Allahu Akbar" to begin the prayer.', 'Marks the formal start of the prayer and transition into a state of devotion.'),
  createData('Recitation (Qira’ah)', 'Reciting Surah Al-Fatiha followed by another Surah or verses from the Quran.', 'Essential in every unit (Rak’ah) of the prayer for spiritual connection.'),
  createData('Ruku (Bowing)', 'Bowing with hands on the knees while glorifying Allah.', 'Demonstrates humility and submission before Allah.'),
  createData('Sujood (Prostration)', 'Prostrating with the forehead, nose, hands, knees, and toes touching the ground.', 'A moment of ultimate submission and closeness to Allah.'),
  createData('Tashahhud', 'Sitting after the second prostration to recite the testimony of faith.', 'Includes sending peace upon the Prophet Muhammad (PBUH).'),
  createData('Tasleem', 'Ending the prayer by saying "Assalamu Alaikum wa Rahmatullah" to the right and left.', 'Marks the conclusion of Salat and returning to the normal state.')
];

const rows2 = [
  createData('Fajr', 'The early morning prayer performed before sunrise.', 'Consists of 2 Rak’ahs (units) and brings blessings and protection throughout the day.'),
  createData('Dhuhr', 'The midday prayer performed after the sun passes its zenith.', 'Consists of 4 Rak’ahs and serves as a break to reconnect with Allah.'),
  createData('Asr', 'The afternoon prayer performed in the late afternoon.', 'Consists of 4 Rak’ahs and helps maintain mindfulness of faith during daily activities.'),
  createData('Maghrib', 'The evening prayer performed just after sunset.', 'Consists of 3 Rak’ahs and marks the end of the daytime.'),
  createData('Isha', 'The night prayer performed after complete darkness has fallen.', 'Consists of 4 Rak’ahs and provides spiritual peace before sleep.')
];







// const features = [
//     { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
//     { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
//     { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
//     { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
//     { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
//     { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
//   ]
const benefits = [
  { name: 'Discipline', description: 'Performing Salat at set times instills a strong sense of discipline in daily life.' },
  { name: 'Focus', description: 'Helps in developing concentration, patience, and mental clarity.' },
  { name: 'Unity', description: 'When performed in congregation, Salat strengthens the sense of brotherhood and unity among Muslims. It reinforces equality, as all worshipers stand shoulder to shoulder regardless of status or background.' },
  { name: 'Spiritual Connection', description: 'Salat strengthens the bond between the worshiper and Allah, fostering inner peace and spiritual growth.' }
];

//   import moduleName from '../../../public/namaz.jpeg';

const Namaz = () => {

  // const [openSection, setOpenSection] = useState(null);
  return (
    <Layout>

      <section
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('../../../public/namaz.jpeg')" }}
      >
        <div className="absolute inset-0  bg-opacity-50"></div>
        <div className="relative z-10 max-w-2xl p-6">
          <h1 className="text-4xl md:text-6xl font-bold">Salat (Prayer)</h1>
          <p className="mt-4 text-lg md:text-xl">
            Establish a Strong Bond with Allah Through Salat.
          </p>
        </div>
      </section>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Importance of Salat</h2>
            <p className="mt-4 text-gray-500">
              Salat is one of the Five Pillars of Islam, serving as a means of spiritual purification and a direct connection with Allah. It fosters mindfulness, humility, and gratitude, reminding Muslims of their purpose and devotion to God.
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
              src="../../../public/newNamaz1.jpg"
              className="h-56 w-full object-cover rounded-lg bg-gray-100"
            />
            <img
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              src="../../../public/newNamaz2.jpg"
              className="h-56 w-full object-cover rounded-lg bg-gray-100"
            />
            <img
              alt="Side of walnut card tray with card groove and recessed card area."
              src="../../../public/newNamaz3.jpg"
              className="h-56 w-full object-cover rounded-lg bg-gray-100"
            />
            <img
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              src="../../../public/newNamaz4.jpg"
              className="h-56 w-full object-cover rounded-lg bg-gray-100"
            />
          </div>

        </div>
      </div>



      <Hadding text='Salat (Prayer) ' />


      <div className='container mx-auto pt-16'>
        <TableContainer className='' component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Prayer Name</StyledTableCell>
                <StyledTableCell align="left">Description</StyledTableCell>
                <StyledTableCell align="left">Componetns</StyledTableCell>
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








      <Hadding text='Components of Salat (Prayer)' />
      <div className='container mx-auto pt-16'>
        <TableContainer className='' component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Components of Salat</StyledTableCell>
                <StyledTableCell align="left">Description</StyledTableCell>
                <StyledTableCell align="left">Significance</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
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

export default Namaz