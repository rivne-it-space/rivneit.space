import { Injectable, signal } from '@angular/core';

import type { Article } from './article.interface';

@Injectable({
	providedIn: 'root',
})
export class ArticleService {
	articles = signal<Article[]>([]);
}
