import { Injectable, signal } from '@angular/core';

import type { Review } from './review.interface';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	reviews = signal<Review[]>([]);
}
