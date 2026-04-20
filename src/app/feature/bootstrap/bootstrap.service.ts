import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, TransferState } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ArticleService } from '../article/article.service';
import { CompanyService } from '../company/company.service';
import { EventService } from '../event/event.service';
import { FaqService } from '../faq/faq.service';
import { JobService } from '../job/job.service';
import { MerchService } from '../merch/merch.service';
import { ProfileService } from '../profile/profile.service';
import { ProjectService } from '../project/project.service';
import { ReviewService } from '../review/review.service';
import { SaleService } from '../sale/sale.service';
import { BOOTSTRAP_STATE_KEY } from './bootstrap.const';
import type { BootstrapData } from './bootstrap.interface';

@Injectable({
	providedIn: 'root',
})
export class BootstrapService {
	private _platformId = inject(PLATFORM_ID);
	private _transferState = inject(TransferState);
	private _companyService = inject(CompanyService);
	private _projectService = inject(ProjectService);
	private _profileService = inject(ProfileService);
	private _merchService = inject(MerchService);
	private _saleService = inject(SaleService);
	private _faqService = inject(FaqService);
	private _jobService = inject(JobService);
	private _eventService = inject(EventService);
	private _articleService = inject(ArticleService);
	private _reviewService = inject(ReviewService);

	async initialize() {
		const transferData = this._transferState.get<BootstrapData | null>(
			BOOTSTRAP_STATE_KEY,
			null,
		);

		if (transferData) {
			this._apply(transferData);

			if (isPlatformBrowser(this._platformId)) {
				this._transferState.remove(BOOTSTRAP_STATE_KEY);
				void this._refreshInBrowser();
			}

			return;
		}

		if (isPlatformServer(this._platformId)) {
			const data = await this._load();

			if (data) {
				this._transferState.set(BOOTSTRAP_STATE_KEY, data);
				this._apply(data);
			}

			return;
		}

		void this._refreshInBrowser();
	}

	private _apply(data: BootstrapData) {
		if (data.company) {
			this._companyService.company.set(data.company);
		}

		if (data.projects) {
			this._projectService.projects.set(data.projects);
		}

		if (data.profiles) {
			this._profileService.profiles.set(data.profiles);
		}

		if (data.products) {
			this._merchService.products.set(data.products);
		}

		if (data.sales) {
			this._saleService.sales.set(data.sales);
		}

		if (data.faqs) {
			this._faqService.faqs.set(data.faqs);
		}

		if (data.jobs) {
			this._jobService.jobs.set(data.jobs);
		}

		if (data.events) {
			this._eventService.events.set(data.events);
		}

		if (data.articles) {
			this._articleService.articles.set(data.articles);
		}

		if (data.reviews) {
			this._reviewService.reviews.set(data.reviews);
		}
	}

	private async _refreshInBrowser() {
		const data = await this._load();

		if (data) {
			this._apply(data);
			return;
		}

		if (environment.onApiFall !== 'app') {
			this._waitForApiAndReload();
		}
	}

	private async _load() {
		try {
			const response = await fetch(
				`${environment.apiUrl}/api/bootstrap/${environment.companyId}`,
			);

			if (!response.ok) {
				return null;
			}

			return (await response.json()) as BootstrapData;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	private _waitForApiAndReload() {
		let isChecking = false;

		const intervalId = window.setInterval(async () => {
			if (isChecking) {
				return;
			}

			isChecking = true;

			try {
				const response = await fetch(`${environment.apiUrl}/status`);

				if (response.ok) {
					window.clearInterval(intervalId);
					window.location.reload();
				}
			} catch {
				// Keep polling until the API responds successfully.
			} finally {
				isChecking = false;
			}
		}, 1000);
	}
}
