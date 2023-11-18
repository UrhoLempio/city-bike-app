import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";
import { Journey } from "../api/Api";
export interface JourneyListProps{
    journeyList: Journey[]
    listType: 'Departure'|'Return';
}
export default function JourneyList({journeyList, listType}: JourneyListProps){
  return(
    <TableContainer component={Paper} style={{ maxHeight: 500 }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="left">Journey id</TableCell>
            <TableCell align="left">Departure time</TableCell>
            <TableCell align="left">Return time</TableCell>
            <TableCell align="left">{listType == 'Return' ? 'Departure station id' : 'Return station id'}</TableCell>
            <TableCell align="left">Distance</TableCell>
            <TableCell align="left">Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {journeyList.map((journey) => (
            <TableRow
                key={journey.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{journey.id}</TableCell>
              <TableCell align="left">{new Date(journey.departure_date_time).toLocaleString()}</TableCell>
              <TableCell align="left">{new Date(journey.return_date_time).toLocaleString()}</TableCell>
              <TableCell align="left">{listType == 'Return' ? journey.departure_station_id : journey.return_station_id}</TableCell>
              <TableCell align="left">{journey.distance}</TableCell>
              <TableCell align="left">{journey.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}