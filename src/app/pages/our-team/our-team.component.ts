import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Profile } from '../../feature/profile/profile.interface';
import { ProfileService } from '../../feature/profile/profile.service';

type TeamSection = {
	title: string;
	members: Profile[];
};

const sectionTitles: Record<string, string> = {
	'Founder / CEO / Full-stack developer': 'Founders',
	'Product developer': 'Product developers',
	'SMM specialist': 'SMM specialists',
	'Client manager': 'Client managers',
};

@Component({
	imports: [NgOptimizedImage, TranslateDirective],
	templateUrl: './our-team.component.html',
	styleUrl: './our-team.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurTeamComponent {
	private readonly _profileService = inject(ProfileService);

	protected readonly teamSections = computed<TeamSection[]>(() => {
		const sections = new Map<string, Profile[]>();

		for (const profile of this._profileService.profiles()) {
			const title = sectionTitles[profile.role] ?? profile.role;
			sections.set(title, [...(sections.get(title) ?? []), profile]);
		}

		return Array.from(sections, ([title, members]) => ({ title, members }));
	});
}
