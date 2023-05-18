import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import "./FlightTable.css"
interface Flight {
  flightCode: string;
  price: number;
}

interface FlightTableProps {
  flights: Flight[];
}

const FlightTable: React.FC<FlightTableProps> = ({ flights }) => {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table>
        <TableHead className="table-head">
          <TableRow>
            <TableCell style={{ fontSize: "1.5rem",fontWeight:'bold' }}>Flight Code</TableCell>
            <TableCell style={{ fontSize: "1.5rem",fontWeight:'bold' }}>Price(&#8377;)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flights.map((flight, index) => (
            <TableRow key={index} className="table-row">
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
