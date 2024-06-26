export type Shop = {
	id: string;
	location: number;
	label: string;
};

export type ShopItem = {
	name: string;
	label: string;
	price: number;
	weight: number;
	count: number;
	imagePath: string;
	type?: string;
	category?: string;
	license?: string;
	jobs?: Record<string, number>;
};

export type CartItem = {
	name: string;
	quantity: number;
};
