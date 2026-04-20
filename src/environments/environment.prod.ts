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
	apiUrl: 'https://it.webart.work',
	onApiFall: 'app',
	appVersion: '1.0.0',
	production: true,
	defaultLanguage: 'ua',
	companyId: 'demo',
	company: {
		_id: '',
		name: 'Volyn IT Space',
		description:
			'Ready-made websites, GPT and online discoverability, launch support, and ongoing developer care for Volyn businesses.',
		email: 'hello@volynit.space',
		phone: '+380 332 000 000',
		address: 'Lutsk, Volyn, Ukraine',
		region: 'Volyn',
		country: 'Ukraine',
		logo: 'logo.png',
		info: {
			eyebrow: 'Ready-made websites for Volyn businesses',
			title: 'Help your business stand out in Volyn, on GPT, and online',
			lead: 'We prepare a ready website solution, present it clearly, connect your business, and support it every month.',
			focus: 'Volyn region businesses',
			highlights: [
				'Ready solution',
				'Fast launch',
				'Monthly support',
				'Built by real developers',
			],
			services: [
				'Modern website',
				'Mobile-ready pages',
				'Visibility on GPT and online',
				'Admin panel if needed',
				'Multi-language support',
				'Hosting and maintenance',
				'Bug fixes within agreement',
				'Future feature development',
			],
			businessCategories: [
				{
					title: 'Restaurants & cafes',
					description:
						'Menus, bookings, offers, delivery links, and a polished first impression.',
				},
				{
					title: 'Beauty & wellness',
					description:
						'Services, treatments, trust signals, and simple ways for clients to book.',
				},
				{
					title: 'Clinics & professional services',
					description:
						'Clear service pages, credibility, contact details, and practical local visibility.',
				},
				{
					title: 'Education & training',
					description:
						'Courses, enrolment paths, schedules, and clear information for parents or learners.',
				},
				{
					title: 'Shops & local brands',
					description:
						'Brand story, products, store details, and online trust for local buyers.',
				},
				{
					title: 'Service businesses',
					description:
						'A strong fit for businesses that need a polished online presence without slow custom delivery.',
				},
			],
			benefits: [
				'Volyn-focused business approach',
				'Ready-made launch model',
				'Real developers behind the work',
				'Clear support structure',
				'Flexible paid improvements',
				'Transferable project ownership',
			],
		},
		socials: [
			{
				label: 'Instagram',
				value: '@volynitspace.demo',
				href: 'https://example.com/volyn-it-space/instagram',
				type: 'instagram',
			},
			{
				label: 'Facebook',
				value: '/volynitspace.demo',
				href: 'https://example.com/volyn-it-space/facebook',
				type: 'facebook',
			},
			{
				label: 'TikTok',
				value: '@volynitspace.demo',
				href: 'https://example.com/volyn-it-space/tiktok',
				type: 'tiktok',
			},
			{
				label: 'YouTube',
				value: '@volynitspace-demo',
				href: 'https://example.com/volyn-it-space/youtube',
				type: 'youtube',
			},
			{
				label: 'Threads',
				value: '@volynitspace.demo',
				href: 'https://example.com/volyn-it-space/threads',
				type: 'threads',
			},
			{
				label: 'X',
				value: '@volynitspace_demo',
				href: 'https://example.com/volyn-it-space/x',
				type: 'x',
			},
			{
				label: 'LinkedIn',
				value: 'Volyn IT Space Demo',
				href: 'https://example.com/volyn-it-space/linkedin',
				type: 'linkedin',
			},
			{
				label: 'Pinterest',
				value: 'volynitspace-demo',
				href: 'https://example.com/volyn-it-space/pinterest',
				type: 'pinterest',
			},
		],
		messengers: [
			{
				label: 'Telegram',
				value: '@volynitspace_demo',
				href: 'https://example.com/volyn-it-space/telegram',
				type: 'telegram',
			},
			{
				label: 'Viber',
				value: '+380 332 000 000',
				href: 'https://example.com/volyn-it-space/viber',
				type: 'viber',
			},
			{
				label: 'WhatsApp',
				value: '+380 332 000 000',
				href: 'https://example.com/volyn-it-space/whatsapp',
				type: 'whatsapp',
			},
		],
		listings: [
			{
				label: 'Google Business',
				value: 'Volyn IT Space Demo',
				href: 'https://example.com/volyn-it-space/google-business',
				type: 'google-business',
			},
			{
				label: 'Tripadvisor',
				value: 'Volyn IT Space Demo',
				href: 'https://example.com/volyn-it-space/tripadvisor',
				type: 'tripadvisor',
			},
			{
				label: 'Bolt Food',
				value: 'Delivery',
				href: 'https://example.com/volyn-it-space/bolt-food',
				type: 'bolt-food',
			},
			{
				label: 'Glovo',
				value: 'Delivery',
				href: 'https://example.com/volyn-it-space/glovo',
				type: 'glovo',
			},
		],
	},
};
