import { Injectable, signal } from '@angular/core';

import type { Product } from './merch.interface';

@Injectable({
	providedIn: 'root',
})
export class MerchService {
	products = signal<Product[]>([]);
}
