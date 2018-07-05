export interface Location {
  name: string;
  locationString: string;
}

export interface Room {
  id: string;
  name: string;
  locations: Location[];
}

export interface Config {
  authOptions: {
    url: string;
    client_id: string;
    redirect_uri: string;
  };
  rooms: Room[];
}
