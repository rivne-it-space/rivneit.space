import { Injectable, signal } from '@angular/core';

import type { Event } from './event.interface';

@Injectable({
	providedIn: 'root',
})
export class EventService {
	events = signal<Event[]>([]);
}
