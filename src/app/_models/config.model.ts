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

// // TODO(egeldenhuys): Indexable interfaces or class
// export interface Config {
//     authOptions: {
//         url: string;
//         client_id: string;
//         redirect_uri: string;
//     };
//     rooms: [{
//         id: string;
//         name: string;
//         locations: [{
//             name: string;
//             locationString: string;
//         }];
//     }];
// }
