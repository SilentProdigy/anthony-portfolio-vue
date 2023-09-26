// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Cuadito',
		category: 'Web Application | Laravel',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'Cyrel P. Nicolas',
		category: 'Portfolio | Wordpress',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'David Daniel',
		category: 'Portfolio | Vue JS',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'Inlight Connect',
		category: 'Blog Site | Wordpress',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
	{
		id: 5,
		title: 'Hope Johnson',
		category: 'Blog Site | Wordpress',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	{
		id: 6,
		title: '1MC Digital Inc.',
		category: 'Company Website | Wordpress',
		img: require('@/assets/images/web-project-1.jpg'),
	},
	{
		id: 7,
		title: 'Push Trees',
		category: 'E-Commerce | Shopify',
		img: require('@/assets/images/web-project-1.jpg'),
	},
];

export default projects;
