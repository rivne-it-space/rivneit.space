import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@wawjs/ngx-translate';
import projects from './projects.json';

@Component({
	imports: [TranslateDirective, TranslatePipe],
	templateUrl: './our-work.component.html',
	styleUrl: './our-work.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurWorkComponent {
	protected readonly projects = projects;
}
