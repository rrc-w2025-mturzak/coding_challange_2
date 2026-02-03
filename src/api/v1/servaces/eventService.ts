export const getAllItem = (): string[] => {
    return ["Item 1", "Item 2"];
};
export const createNewItem = (name: string, price: number): string => {
    return `Create a new item. The name is ${name} and a price of ${price}`;
};
export const updateItemById = (name: string, price: number): string => {
    return `Update item. The name is ${name} and a price of ${price}`;
};
export const deleteItemById = (id: number): string => {
    return `Deleted item: ${id}`;
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

let events: Event[] = [
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

// export function calculatePortfolioPerformance(event: Event): any {
//     let initialInvestment = event.initialInvestment;
//     let currentValue = event.currentValue;

//     const profitOrLoss = currentValue - initialInvestment;
//     const percentageChange = (profitOrLoss / initialInvestment) * 100;

//     let performanceSummary;
//     switch (true) {
//         case percentageChange >= 30:
//             performanceSummary = "Excellent Performance! Your investments are doing great."
//             break

//         case percentageChange >= 10:
//             performanceSummary = "Solid gain. Keep monitoring your investments."
//             break

//         case percentageChange > 0:
//             performanceSummary = "Modest gain. Your portfolio is growing slowly."
//             break

//         case percentageChange == 0:
//             performanceSummary = "No Change. Your portfolio is holding steady."
//             break

//         case percentageChange < 0 && percentageChange >= -10:
//             performanceSummary = "Minor loss. Stay calm and review your options."
//             break

//         case percentageChange < -10:
//             performanceSummary = "Signifigant loss. Review your portfolio strategy."
//             break

//     }

//     return {
//         initialInvestment,
//         currentValue,
//         profitOrLoss,
//         percentageChange,
//         performanceSummary,
//     };
// }