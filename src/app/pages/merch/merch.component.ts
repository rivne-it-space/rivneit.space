import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { MerchService } from '../../feature/merch/merch.service';

@Component({
	imports: [TranslateDirective],
	templateUrl: './merch.component.html',
	styleUrl: './merch.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MerchComponent {
	protected readonly merchItems = inject(MerchService).products;
}
