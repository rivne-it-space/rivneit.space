import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./pages/landing/landing.component').then((m) => m.LandingComponent),
	},
	{
		path: 'our-work',
		loadComponent: () =>
			import('./pages/our-work/our-work.component').then((m) => m.OurWorkComponent),
	},
	{
		path: 'our-team',
		loadComponent: () =>
			import('./pages/our-team/our-team.component').then((m) => m.OurTeamComponent),
	},
	{
		path: 'merch',
		loadComponent: () => import('./pages/merch/merch.component').then((m) => m.MerchComponent),
	},
	{
		path: 'sales',
		loadComponent: () => import('./pages/sales/sales.component').then((m) => m.SalesComponent),
	},
	{
		path: 'articles',
		loadComponent: () =>
			import('./pages/articles/articles.component').then((m) => m.ArticlesComponent),
	},
	{
		path: 'reviews',
		loadComponent: () =>
			import('./pages/reviews/reviews.component').then((m) => m.ReviewsComponent),
	},
	{
		path: 'events',
		loadComponent: () =>
			import('./pages/events/events.component').then((m) => m.EventsComponent),
	},
	{
		path: 'jobs',
		loadComponent: () => import('./pages/jobs/jobs.component').then((m) => m.JobsComponent),
	},
	{
		path: 'faq',
		loadComponent: () =>
			import('./pages/faq/public-faq.component').then((m) => m.PublicFaqComponent),
	},
	{
		path: 'faq/agent',
		loadComponent: () =>
			import('./pages/faq/agent-faq.component').then((m) => m.AgentFaqComponent),
	},
	{
		path: 'faq/developer',
		loadComponent: () =>
			import('./pages/faq/developer-faq.component').then((m) => m.DeveloperFaqComponent),
	},
	{
		path: 'navigation',
		loadComponent: () =>
			import('./pages/navigation/navigation.component').then((m) => m.NavigationComponent),
	},
	{
		path: 'socials',
		loadComponent: () =>
			import('./pages/socials/socials.component').then((m) => m.SocialsComponent),
	},
	{
		path: 'aktsii',
		redirectTo: 'sales',
		pathMatch: 'full',
	},
	{
		path: 'promotions',
		redirectTo: 'sales',
		pathMatch: 'full',
	},
	{
		path: 'statti',
		redirectTo: 'articles',
		pathMatch: 'full',
	},
	{
		path: 'podii',
		redirectTo: 'events',
		pathMatch: 'full',
	},
	{
		path: 'vakansii',
		redirectTo: 'jobs',
		pathMatch: 'full',
	},
	{
		path: 'careers',
		redirectTo: 'jobs',
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: '/',
	},
];
