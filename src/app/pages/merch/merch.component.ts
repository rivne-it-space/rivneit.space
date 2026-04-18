import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@wawjs/ngx-translate';

import products from './products.json';

type MerchItem = {
	name: string;
	description: string;
	price: string;
	label: string;
};

@Component({
	imports: [TranslateDirective, TranslatePipe],
	templateUrl: './merch.component.html',
	styleUrl: './merch.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MerchComponent {
	protected readonly merchItems: MerchItem[] = products;
}
