import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { ScrollService } from './services/scroll.service';

@Component({
	selector: 'app-root',
	imports: [RouterLink, RouterLinkActive, RouterOutlet, TopbarComponent],
	template: `
		<app-topbar />

		<div class="pb-24">
			<router-outlet />
		</div>

		<nav
			aria-label="Bottom navigation"
			class="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--c-border)] bg-[var(--c-bg-secondary)]/95 px-2 py-2 backdrop-blur supports-[backdrop-filter]:bg-[var(--c-bg-secondary)]/88"
		>
			<div class="mx-auto grid max-w-[var(--container)] grid-cols-5 gap-1">
				@for (item of navItems; track item.label) {
					@if (item.route) {
						<a
							class="flex min-w-0 flex-col items-center justify-center gap-1 rounded-[0.9rem] px-1 py-2 text-[11px] font-medium text-[var(--c-text-muted)] transition-colors duration-200 hover:bg-[var(--c-bg-primary)]"
							[routerLink]="item.route"
							[routerLinkActiveOptions]="{ exact: item.exact }"
							routerLinkActive="bg-[var(--c-bg-soft)] text-[var(--c-secondary)]"
						>
							<span class="material-symbols-outlined text-[21px]" aria-hidden="true">
								{{ item.icon }}
							</span>
							<span class="truncate">{{ item.label }}</span>
						</a>
					} @else {
						<button
							class="flex min-w-0 flex-col items-center justify-center gap-1 rounded-[0.9rem] px-1 py-2 text-[11px] font-medium text-[var(--c-text-muted)] transition-colors duration-200 hover:bg-[var(--c-bg-primary)]"
							type="button"
						>
							<span class="material-symbols-outlined text-[21px]" aria-hidden="true">
								{{ item.icon }}
							</span>
							<span class="truncate">{{ item.label }}</span>
						</button>
					}
				}
			</div>
		</nav>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
	private readonly _scrollService = inject(ScrollService);

	protected readonly navItems = [
		{ label: 'Nav', icon: 'navigation', route: '/navigation', exact: true },
		{ label: 'Merch', icon: 'storefront', route: '/merch', exact: true },
		{ label: 'Socials', icon: 'share', route: '/socials', exact: true },
		{ label: 'Our Team', icon: 'groups', route: '/our-team', exact: true },
		{ label: 'Our Work', icon: 'workspaces', route: '/our-work', exact: true },
	];

	constructor() {
		this._scrollService.initialize();
	}
}
