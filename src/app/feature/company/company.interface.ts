export interface Company {
	_id: string;
	name: string;
	description: string;
	email: string;
	phone: string;
	address: string;
	region: string;
	country: string;
	logo: string;
	info: CompanyInfo;
	socials: CompanyLink[];
	messengers: CompanyLink[];
	listings: CompanyLink[];
}

export interface CompanyInfo {
	eyebrow: string;
	title: string;
	lead: string;
	focus: string;
	highlights: string[];
	services: string[];
	businessCategories: CompanyInfoItem[];
	benefits: string[];
}

export interface CompanyInfoItem {
	title: string;
	description: string;
}

export interface CompanyLink {
	label: string;
	value: string;
	href: string;
	type: string;
}
