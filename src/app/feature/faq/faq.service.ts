import { Injectable, signal } from '@angular/core';

import type { Faq } from './faq.interface';

@Injectable({
	providedIn: 'root',
})
export class FaqService {
	faqs = signal<Faq[]>([]);
}
