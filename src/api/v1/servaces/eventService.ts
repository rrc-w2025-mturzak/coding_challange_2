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