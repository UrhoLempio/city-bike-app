import {useQuery} from 'react-query'
import { Journey, departures, returns } from '../api/Api';
import { AxiosError } from 'axios';
import { Stack, Typography, CircularProgress } from '@mui/material';
import JourneyList from './JourneyList';
export interface JourneyViewProps{
    listType: 'Departure'|'Return';
    stationId: number;
}
export default function JourneyView({listType, stationId}: JourneyViewProps){
    const journeyQuery = useQuery<Journey[], AxiosError>(
        listType,
        async () => {
            if (listType === 'Departure') {
                return departures(stationId)
            }
            return returns(stationId)
        },
      );
    if(journeyQuery.isFetching){
        return <CircularProgress/>
    }
    const journeyResponse = journeyQuery.data as Journey[]
    let durationSum = 0
    let distanceSum = 0
    journeyResponse.forEach(journey => {durationSum += journey.duration;
                                        distanceSum += journey.distance})
    return(
    <Stack>
        <Typography gutterBottom variant="h5" component="div">
            {listType == 'Departure' ? 'Departures' : 'Returns'}
        </Typography>
        <Typography align="left" gutterBottom variant="h5" component="div">
            {`Amount: ${journeyResponse.length}`}
        </Typography>
        <Typography align="left" gutterBottom variant="h5" component="div">
            {`Average duration: ${(durationSum/journeyResponse.length/60).toFixed(2)} minutes`}
        </Typography>
        <Typography align="left" gutterBottom variant="h5" component="div">
            {`Average distance: ${(distanceSum/journeyResponse.length/1000).toFixed(2)} kilometers`}
        </Typography>
        <JourneyList journeyList={journeyResponse} listType={listType}/>
    </Stack>
    )
}