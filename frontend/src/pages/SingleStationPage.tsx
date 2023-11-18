import {useQuery} from 'react-query'
import { StationResponse, station } from '../api/Api';
import { AxiosError } from 'axios';
import { Stack, Card, CardContent, Typography, CardActions, Button, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import JourneyView from '../components/JourneyView';
export default function StationsPage(){
  const { id } = useParams();
    const singleStationQuery = useQuery<StationResponse[], AxiosError>(
        'station',
        async () => {
          return station(Number(id));
        },
      );
    if(singleStationQuery.isFetching){
        return <CircularProgress/>
    }
    //return <div>{JSON.stringify(stationsQuery.data as StationResponse[])}</div>
    const stationResponse = singleStationQuery.data as StationResponse[]
    return(
        <Stack>
                <Card>
                  <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {stationResponse[0].station_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {stationResponse[0].station_address}
        </Typography>
        <Stack direction={{md: 'column', lg: 'row'}}>
                <JourneyView stationId={stationResponse[0].id} listType='Departure'/>
                <JourneyView stationId={stationResponse[0].id} listType='Return'/>
                </Stack>
      </CardContent>
                </Card>
                
        </Stack>
    )
}