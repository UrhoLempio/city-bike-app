import {useQuery} from 'react-query'
import { StationResponse, stations } from '../api/Api';
import { AxiosError } from 'axios';
import { CircularProgress } from '@mui/material';
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
  const stationsList = stationsQuery.data as StationResponse[]
  return <StationsList stationsList={stationsList}/>
    
}
