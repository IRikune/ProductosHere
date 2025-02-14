export interface User {
	id: string;
	name: string;
	lastName: string;
	email: string;
	password: string;
	phone: string;
	directions: string[];
	contracts: Contract[];
	orders: Order[];
}

export interface Contract {
	id: string;
	details: string;
	amount: number;
	status: string;
}

export interface Product {
	id: string;
	producer: "AVON" | "ESIKA" | "LBEL";
	name: string;
	category: string;
	aproxPrice: number;
}

export interface Order {
	id: string;
	series: string;
	createdAt: number;
	expectedDate: number;
	expectedProducts: Product[];
	expectedAmount: number;
	deliveredDate?: number;
	deliveredProducts?: Product[];
	deliveredAmount?: number;
	status: "pending" | "delivered" | "cancelled";
}
