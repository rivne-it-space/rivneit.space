import { Injectable, signal } from '@angular/core';

import type { Job } from './job.interface';

@Injectable({
	providedIn: 'root',
})
export class JobService {
	jobs = signal<Job[]>([]);
}
