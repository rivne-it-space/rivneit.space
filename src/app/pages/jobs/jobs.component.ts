import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	imports: [RouterLink, TranslateDirective],
	templateUrl: './jobs.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobsComponent {}
