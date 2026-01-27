import { MetadataRoute } from 'next';
import { artist } from '@/data/artist';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/private/',
		},
		sitemap: `${artist.seo.siteUrl}/sitemap.xml`,
	};
}
