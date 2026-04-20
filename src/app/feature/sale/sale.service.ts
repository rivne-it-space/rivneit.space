import { Injectable, signal } from '@angular/core';

import type { Sale } from './sale.interface';

@Injectable({
	providedIn: 'root',
})
export class SaleService {
	sales = signal<Sale[]>([]);
}
