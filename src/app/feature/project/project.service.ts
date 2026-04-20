import { Injectable, signal } from '@angular/core';

import type { Project } from './project.interface';

@Injectable({
	providedIn: 'root',
})
export class ProjectService {
	projects = signal<Project[]>([]);
}
