import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";
import { StationResponse } from "../api/Api";
import { Link } from "react-router-dom";
export interface StationsListProps{
    stationsList: StationResponse[]
}
export default function StationsList({stationsList}: StationsListProps){
    return(
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Station id</TableCell>
            <TableCell align="left">Station name</TableCell>
            <TableCell align="left">Station address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stationsList.map((station) => (
            <TableRow
                component={Link}
                to={`/stations/${station.id}`}
                key={station.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {station.id}
              </TableCell>
              <TableCell align="left">{station.station_name}</TableCell>
              <TableCell align="left">{station.station_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}