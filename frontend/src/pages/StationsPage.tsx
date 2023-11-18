import {useQuery} from 'react-query'
import { StationResponse, stations } from '../api/Api';
import { AxiosError } from 'axios';
import { Stack, Card, CardContent, Typography, CardActions, Button, CircularProgress } from '@mui/material';
import StationsList from '../components/StationsList';
export default function StationsPage(){
    const stationsQuery = useQuery<StationResponse[], AxiosError>(
        'stations',
        async () => {
          return stations();
        },
      );
    if(stationsQuery.isFetching){
        return <CircularProgress/>
    }
    //return <div>{JSON.stringify(stationsQuery.data as StationResponse[])}</div>
    const stationsList = stationsQuery.data as StationResponse[]
    return <StationsList stationsList={stationsList}/>
    
}
//                    <Button size="small" href={`/stations/${station.id}`}>Share</Button>
