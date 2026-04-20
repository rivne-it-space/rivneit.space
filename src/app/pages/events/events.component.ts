import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { EventService } from '../../feature/event/event.service';

@Component({
	imports: [TranslateDirective],
	templateUrl: './events.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {
	protected readonly events = inject(EventService).events;
}
