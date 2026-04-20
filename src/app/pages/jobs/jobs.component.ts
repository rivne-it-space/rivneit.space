import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { JobService } from '../../feature/job/job.service';

@Component({
	imports: [RouterLink, TranslateDirective],
	templateUrl: './jobs.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobsComponent {
	protected readonly jobs = inject(JobService).jobs;
}
