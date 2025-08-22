export interface WeatherProps {
    location: Location;
}

export interface Location {
    coordinates: string;
    label: string;
}