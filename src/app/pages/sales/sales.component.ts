import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { SaleService } from '../../feature/sale/sale.service';

@Component({
	imports: [TranslateDirective],
	templateUrl: './sales.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesComponent {
	protected readonly sales = inject(SaleService).sales;
}
