import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ProjectService } from '../../feature/project/project.service';

@Component({
	imports: [TranslateDirective],
	templateUrl: './our-work.component.html',
	styleUrl: './our-work.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurWorkComponent {
	protected readonly projects = inject(ProjectService).projects;
}
