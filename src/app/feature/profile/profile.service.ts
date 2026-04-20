import { Injectable, signal } from '@angular/core';

import type { Profile } from './profile.interface';

@Injectable({
	providedIn: 'root',
})
export class ProfileService {
	profiles = signal<Profile[]>([]);
}
