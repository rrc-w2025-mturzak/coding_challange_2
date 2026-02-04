export const getAllEvents = () => {
    return {
        count: events.length,
        events: events
    }
};

export const getOneEvent = (id: number) => {
    return events.find(event => event.id === id);
};

export const createNewEvent = (id: number, name: string, date: string, capacity: number, registrationCount: number): string => {
    return `Created a new Event. The Id is ${id}, Name of the event: ${name}, Date: ${date}, Max capacity ${capacity}, Registration count ${registrationCount}`;
};

export const updateEventById = (id: number, name: string, date: string, capacity: number, registrationCount: number): string => {
    return `Updated an Event. The Id is ${id}, Name of the event: ${name}, Date: ${date}, Max capacity ${capacity}, Registration count ${registrationCount}`;
};

export const deleteEventById = (id: number): string => {
    return `Deleted Event: ${id}`;
};

export interface Event {
    id: number;
    name: string;
    date: string;
    capacity: number;
    registrationCount: number;
}

export interface Attendee {
    id: number;
    name: string;
    email: string;
}

export interface HealthCheckResponse {
    status: any;
    uptime: number;
    timestamp: string;
    version: string;
}

 export const events: Event[] = [
    { 
        id: 1, 
        name: "Tech Conference 2025", 
        date: "2025-03-15T09:00:00.000Z", 
        capacity: 200, 
        registrationCount: 185 
    },
    { 
        id: 2, 
        name: "Startup Pitch Night", 
        date: "2025-02-20T18:00:00.000Z", 
        capacity: 50, 
        registrationCount: 12 
    },
    { 
        id: 3, 
        name: "Web Dev Workshop", 
        date: "2025-02-10T10:00:00.000Z", 
        capacity: 30, 
        registrationCount: 30
    }
];

let attendee: Attendee[] = [
    { 
        id: 1, 
        name: "Jordan Smith", 
        email: "jordan.smith@email.com"
    },
    { 
        id: 2, 
        name: "Alex Chen", 
        email: "alex.chen@email.com"
    }
];

export function calculatePopularity(event: Event): any {
    let id = event.id;
    let name = event.name
    let date = event.date
    let registrationCount = event.registrationCount;
    let capacity = event.capacity;
    let popularityTier;

    const spotsRemaining = capacity - registrationCount

    const popularityScore = (registrationCount / capacity) * 100

    switch (true) {
        case popularityScore >= 90:
            popularityTier = "Hot."
            break
        case popularityScore >= 70:
            popularityTier = "Popular."
            break
        case popularityScore >= 50:
            popularityTier = "Moderate."
            break
        case popularityScore >= 25:
            popularityTier = "Building."
            break
        case popularityScore < 25:
            popularityTier = "New."
            break
    }

    return {
        id,
        name,
        date,
        capacity,
        registrationCount,
        spotsRemaining,
        popularityScore,
        popularityTier
    };
}