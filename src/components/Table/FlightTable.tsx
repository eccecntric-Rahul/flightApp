import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface Flight {
  flightCode: string;
  price: number;
}

interface FlightTableProps {
  flights: Flight[];
}

const FlightTable: React.FC<FlightTableProps> = ({ flights }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead style={{position:"sticky",top:0,backgroundColor:"#19A7CE"}}>
          <TableRow>
            <TableCell>Flight Code</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flights.map((flight, index) => (
            <TableRow key={index}>
              <TableCell>{flight.flightCode}</TableCell>
              <TableCell>{flight.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FlightTable;
