import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { TranslatePipe } from '@wawjs/ngx-translate';
import faqData from '../../../assets/data/faq.json';
import faqTranslationsData from '../../../assets/data/faq.translations.json';
import { LanguageCode } from '../../feature/language/language.type';
import { LanguageService } from '../../feature/language/language.service';
import { FaqAudience, FaqItem } from './faq-item.interface';

interface FaqPageContent {
	readonly eyebrow: string;
	readonly title: string;
	readonly intro: string;
}

interface FaqTranslation {
	readonly question: Partial<Record<LanguageCode, string>>;
	readonly answer: Partial<Record<LanguageCode, readonly string[]>>;
}

const faqItems = faqData as readonly FaqItem[];
const faqTranslations = faqTranslationsData as Record<string, FaqTranslation | undefined>;

const pageContent: Record<FaqAudience, FaqPageContent> = {
	public: {
		eyebrow: 'FAQ',
		title: 'Frequently asked questions',
		intro: 'Common questions for clients, partners, and visitors.',
	},
	agent: {
		eyebrow: 'INTERNAL FAQ',
		title: 'Agent FAQ',
		intro: 'Internal guidance for presenting products, handling clients, and managing communication.',
	},
	developer: {
		eyebrow: 'INTERNAL FAQ',
		title: 'Developer FAQ',
		intro: 'Internal guidance for implementation, scope changes, approvals, and technical responsibility.',
	},
};

@Component({
	selector: 'app-faq',
	imports: [TranslatePipe],
	templateUrl: './faq.component.html',
	styleUrl: './faq.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
	private readonly _languageService = inject(LanguageService);

	readonly audience = input<FaqAudience>('public');
	protected readonly openItemId = signal<string | null>(null);
	protected readonly content = computed(() => pageContent[this.audience()]);
	protected readonly language = this._languageService.language;
	protected readonly items = computed(() =>
		faqItems
			.filter((item) => item.audience === this.audience())
			.map((item) => this._translateItem(item, this.language())),
	);

	protected isOpen(item: FaqItem) {
		return this.openItemId() === item.id;
	}

	protected toggleItem(item: FaqItem) {
		this.openItemId.update((id) => (id === item.id ? null : item.id));
	}

	private _translateItem(item: FaqItem, language: LanguageCode): FaqItem {
		const translation = faqTranslations[item.id];
		const question = translation?.question[language]?.trim();
		const answer = translation?.answer[language]?.filter((paragraph) => paragraph.trim());

		return {
			...item,
			question: question || item.question,
			answer: answer?.length ? answer : item.answer,
		};
	}
}
