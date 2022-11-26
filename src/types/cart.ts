interface CartType{
    _id: string;
    items: [{
        itemId: string;
        quantity: number;
    }];
    quantity: number;
}