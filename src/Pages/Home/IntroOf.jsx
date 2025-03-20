// import React from 'react'


// import * as React from 'react';
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
    createData('Justice, Fairness, and Morality',' Demonstrates justice and fairness through the actions and teachings of the Prophet (PBUH).', 'Establishes laws to ensure justice and fairness in society.'),
    createData('Guidance for Ethical Living', 'Offers a practical example of ethical behavior through the Prophets life', 'Provides legal frameworks and rulings for ethical conduct.' ),
    createData('Human Rights and Duties', 'Emphasizes human dignity, compassion, and duty through real-life examples.', 'Defines rights and responsibilities through legal principles.', ),
    createData('Conflict Resolution', 'Uses legal procedures to settle disputes.', 'Encourages reconciliation, patience, and wisdom in resolving conflicts.', ),
    createData('Community Welfare', '	Focuses on societal rules for maintaining order and justice.', 'Promotes social harmony, charity, and caring for the less fortunate',),
  ];
  
const IntroOf = () => {
  return (
    < div className='container mx-auto pt-16'>
     <TableContainer className='' component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Common Principles</StyledTableCell>
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
  )
}

export default IntroOf