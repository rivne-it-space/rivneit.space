export interface Profile {
	name: string;
	role: string;
	period: string;
	company: string;
	image: string;
	socials: ProfileSocialLink[];
}

export interface ProfileSocialLink {
	label: string;
	icon: 'linkedin' | 'github' | 'email' | 'instagram';
	href: string;
	external?: boolean;
}
