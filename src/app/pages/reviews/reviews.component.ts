import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ReviewService } from '../../feature/review/review.service';

@Component({
	imports: [TranslateDirective],
	templateUrl: './reviews.component.html',
	styleUrl: './reviews.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {
	protected readonly reviews = inject(ReviewService).reviews;
}
