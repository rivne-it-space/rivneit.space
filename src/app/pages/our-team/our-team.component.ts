import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@wawjs/ngx-translate';

type SocialLink = {
	label: string;
	icon: 'linkedin' | 'github' | 'email' | 'instagram';
	href: string;
	external?: boolean;
};

type TeamMember = {
	name: string;
	role: string;
	period: string;
	company: string;
	image: string;
	socials: SocialLink[];
};

type TeamSection = {
	title: string;
	members: TeamMember[];
};

const DENYS_HONCHAR = {
	name: 'Denys Honchar',
	period: '2016 - Present',
	company: 'Rivne IT Space',
	image: 'profile/honchar-denys.jpg',
	socials: [
		{
			label: 'LinkedIn',
			icon: 'linkedin',
			href: 'https://example.com/denys-honchar/linkedin',
			external: true,
		},
		{
			label: 'GitHub',
			icon: 'github',
			href: 'https://example.com/denys-honchar/github',
			external: true,
		},
		{
			label: 'Email',
			icon: 'email',
			href: 'mailto:hello@rivneit.space',
		},
	],
} satisfies Omit<TeamMember, 'role'>;

const createMembers = (count: number, role: string): TeamMember[] =>
	Array.from({ length: count }, () => ({
		...DENYS_HONCHAR,
		role,
	}));

@Component({
	imports: [NgOptimizedImage, TranslateDirective, TranslatePipe],
	templateUrl: './our-team.component.html',
	styleUrl: './our-team.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurTeamComponent {
	protected readonly teamSections: TeamSection[] = [
		{
			title: 'Founders',
			members: createMembers(1, 'Founder / CEO / Full-stack developer'),
		},
		{
			title: 'Product developers',
			members: createMembers(6, 'Product developer'),
		},
		{
			title: 'SMM specialists',
			members: createMembers(3, 'SMM specialist'),
		},
		{
			title: 'Client managers',
			members: createMembers(3, 'Client manager'),
		},
	];
}
