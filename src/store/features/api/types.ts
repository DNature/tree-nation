export interface ITree {
	image?: string;
	name: string;
	description: string;
	id: number;
	slug: string;
	status: string;
	location: string;
	lat: number;
	long: number;
}

export interface ISpecie extends Pick<ITree, 'id' | 'name'> {
	project_id: number;
	life_time_CO2: number;
	price: number;
	stock: number;
}
