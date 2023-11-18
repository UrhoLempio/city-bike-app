import axios from 'axios'
export interface StationResponse {
    id:number,
    station_name:string,
    station_address:string,
    coordinate_x:number,
    coordinate_y:number
}

export interface Journey {
    id:number,
    departure_date_time:string,
    return_date_time:string,
    departure_station_id:number,
    return_station_id:number,
    distance:number,
    duration:number
}
export async function stations(): Promise<StationResponse[]>{
    const response = await axios.get('http://localhost:3000/stations')
    return response.data
}

export async function station(stationId: number): Promise<StationResponse[]>{
    const response = await axios.get(`http://localhost:3000/stations/${stationId}`)
    return response.data
}

export async function departures(stationId: number): Promise<Journey[]>{
    const response = await axios.get(`http://localhost:3000/stations/${stationId}/departures`)
    return response.data
}

export async function returns(stationId: number): Promise<Journey[]>{
    const response = await axios.get(`http://localhost:3000/stations/${stationId}/returns`)
    return response.data
}
