export default class Stock {
    id: number;
    name: string;
    price: number;
    minimum: number;
    exclusiveMinimium: boolean;
    variation: number;
    date: string;
}

/* 
id	integer($int64)
name*	string
price*	number($double)
minimum: 0
exclusiveMinimum: false
date*	string($date)
variation*	number($double)
 */