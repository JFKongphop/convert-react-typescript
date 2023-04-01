export type Item = {
    id: string;
    name: string;
    amount: number;
    price: number;
}

export type CartType = {
    items: Item[];
    totalAmount: number;
}

export type CartItem = {
    name: string;
    price: number;
    amount: number
    onRemove: () => void;
    onAdd: () => void;
}

export type Cart = {
    onClose: () => void;
}