import { Company } from '../app/feature/company/company.interface';

export const environment: {
	apiUrl: string;
	onApiFall: 'spinner' | 'app reload' | 'app';
	appVersion: string;
	production: boolean;
	defaultLanguage: string;
	companyId: string;
	company: Company;
} = {
	apiUrl: 'https://api.webart.work',
	onApiFall: 'app',
	appVersion: '1.0.0',
	production: true,
	defaultLanguage: 'ua',
	companyId: 'demo',
	company: {
		_id: '',
		name: '',
	},
};
