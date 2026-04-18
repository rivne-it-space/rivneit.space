import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@wawjs/ngx-translate';

interface NavigationItem {
	readonly title: string;
	readonly icon: string;
	readonly route: string;
}

@Component({
	imports: [RouterLink, TranslatePipe],
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
	protected readonly navigationItems: readonly NavigationItem[] = [
		{ title: 'Sales', icon: 'local_offer', route: '/sales' },
		{ title: 'FAQ', icon: 'help', route: '/faq' },
		{ title: 'Jobs', icon: 'badge', route: '/jobs' },
		{ title: 'Events', icon: 'event', route: '/events' },
		{ title: 'Articles', icon: 'article', route: '/articles' },
		{ title: 'Reviews', icon: 'rate_review', route: '/reviews' },
	];
}
