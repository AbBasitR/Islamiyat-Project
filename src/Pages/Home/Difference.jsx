// import React from 'react'

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
    createData('Focus',' Emphasizes moral and ethical lessons from the life of Prophet Muhammad (PBUH).', 'Primarily deals with legal rules and their application.'),
    createData('Nature', 'A comprehensive study of the Prophet’s life, character, and teachings.', 'Law-focused and structured, following a systematic legal framework.' ),
    createData('Guidance Type', 'Offers practical examples of how to live by Islamic principles.', 'Provides legal rulings on various aspects of life.', ),
    createData('Scope', 'Encompasses all aspects of the Prophet’s life, including personal, social, and spiritual dimensions.', '	Covers judicial, legislative, and legal matters in Islam.', ),
    createData('Objective', 'Serves as a source of inspiration and moral guidance for individuals and communities.', 'Ensures justice, legal compliance, and societal order.',),
  ];

const Difference = () => {
  return (
    <>
    
    < div className='container mx-auto pt-16'>
     <TableContainer className='' component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Differences</StyledTableCell>
            <StyledTableCell align="left">Seerat (Life of Prophet Muhammad PBUH)</StyledTableCell>
            <StyledTableCell align="left">Jurisprudence (Fiqh)</StyledTableCell>
            
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
    </>
  )
}

export default Difference