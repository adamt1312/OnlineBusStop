import { BusStop } from './types';

export const filterBusStops = (busStops: BusStop[], query: string) => {
    if (!query) return busStops;

    const formattedQuery = query.toLowerCase().trim();
    return busStops.filter(busStop => busStop.stop_name.toLowerCase().trim().includes(formattedQuery));
};
