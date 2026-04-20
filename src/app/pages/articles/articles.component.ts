import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ArticleService } from '../../feature/article/article.service';

@Component({
	imports: [TranslateDirective],
	templateUrl: './articles.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesComponent {
	protected readonly articles = inject(ArticleService).articles;
}
