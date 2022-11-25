import {ItemType} from './item';


interface CartType{
    _id: string;
    items: ItemType[];
    quantity: number;
    created_at: Date;
    updated_at: Date;
}