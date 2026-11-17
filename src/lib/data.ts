import type { IconName } from './icons.ts';

export const profile = {
	name: 'Juned Setiawan',
	fullName: 'Juned Setiawan Suyadi',
	email: 'junedhayko502@gmail.com',
	whatsapp: { display: '+62 823-6526-5904', url: 'https://wa.me/6282365265904' },
	location: 'Indonesia',
	photo: '/profile.png'
};

export const navItems = [
	{ id: 'about', label: 'About' },
	{ id: 'education', label: 'Journey' },
	{ id: 'skill', label: 'Skills' },
	{ id: 'portfolio', label: 'Work' },
	{ id: 'contact', label: 'Contact' }
];

export const socials: { label: string; href: string; icon: IconName }[] = [
	{ label: 'GitHub', href: 'https://github.com/JunedSetiawan', icon: 'github' },
	{ label: 'LinkedIn', href: 'https://linkedin.com/in/juned-setiawan', icon: 'linkedin' },
	{ label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' }
];

export const roles = [
	'web applications',
	'company profiles & CMS',
	'admin dashboards',
	'REST APIs'
];

export const stats = [
	{ value: 2, suffix: '+', label: 'Years of experience' },
	{ value: 7, suffix: '+', label: 'Projects completed' },
	{ value: 18, suffix: '', label: 'Technologies used' },
	{ value: 2, suffix: '', label: 'Certifications' }
];

export const values: { title: string; text: string; icon: IconName }[] = [
	{
		title: 'Innovation',
		text: 'Continuously learning and staying up-to-date with the latest technology.',
		icon: 'lightbulb'
	},
	{
		title: 'Collaboration',
		text: 'Thriving in diverse teams and fostering innovation through shared knowledge.',
		icon: 'users'
	},
	{
		title: 'Excellence',
		text: 'Committed to delivering high-quality solutions and efficient code.',
		icon: 'zap'
	}
];

export type TimelineItem = {
	title: string;
	org: string;
	period: string;
	current?: boolean;
	description: string;
	bulletsTitle?: string;
	bullets?: string[];
	tags: string[];
};

export const education: TimelineItem[] = [
	{
		title: 'Politeknik Elektronika Negeri Surabaya',
		org: 'Associate Degree (D3) — Informatics Engineering · GPA 3.65 / 4.00',
		period: 'Aug 2022 — Aug 2025',
		description:
			'Graduated with a GPA of 3.65. Completed a comprehensive program in software development, database management, web technologies, and system analysis, with a strong focus on the practical application of programming languages and modern development frameworks.',
		tags: [
			'Graduated',
			'Software Engineering',
			'Database Design',
			'Web Development',
			'System Analysis'
		]
	},
	{
		title: 'SMK Negeri 1 Jenangan Ponorogo',
		org: 'Vocational High School — Software Engineering',
		period: 'Jul 2019 — Jun 2022',
		description:
			'Specialized in software engineering with focus on programming fundamentals, software development lifecycle, and basic web technologies. Built strong foundation in problem-solving and logical thinking.',
		tags: ['Programming Fundamentals', 'Software Development', 'Web Basics', 'Problem Solving']
	}
];

export const experience: TimelineItem[] = [
	{
		title: 'Iconix Software',
		org: 'Full-Stack Developer — Laravel · Server & Database',
		period: 'Aug 2025 — Present',
		current: true,
		description:
			'Building and maintaining web applications end-to-end with Laravel — from database design and back-end logic to responsive front-end interfaces. Beyond the application code, I also handle the infrastructure behind it, including server setup and maintenance, database administration, and deployments.',
		bulletsTitle: 'Key responsibilities',
		bullets: [
			'Full-stack web application development with Laravel',
			'Server setup, configuration, and maintenance',
			'Database design, administration, and optimization',
			'Deployment and keeping production systems running reliably'
		],
		tags: ['Laravel', 'PHP', 'MySQL', 'PostgreSQL', 'Linux Server', 'Deployment', 'Tailwind CSS']
	},
	{
		title: 'Freelance Web Developer',
		org: 'Laravel Web Developer',
		period: 'May 2024 — Jul 2025',
		description:
			'Create a Company Profile website with CMS using Laravel framework. Developing modern, responsive web applications with focus on performance, user experience, and maintainable code architecture with my friend.',
		bulletsTitle: 'Key responsibilities',
		bullets: [
			'Full-stack web development using Laravel framework',
			'Content Management System (CMS) development',
			'Database design and optimization',
			'Responsive design implementation'
		],
		tags: ['Laravel', 'PHP', 'PostgreSQL', 'HTML/CSS', 'JavaScript', 'Tailwind CSS', 'Node.js']
	},
	{
		title: 'PKL / Vocational School Internship',
		org: 'Web PHP Developer — Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu',
		period: 'Jan 2021 — Jun 2021',
		description:
			'Create a survey information system web application, as a replacement for surveys carried out on Google Forms by registrants at the Office. Gained hands-on experience in government sector web development and user requirement analysis.',
		bulletsTitle: 'Key achievements',
		bullets: [
			'Developed complete survey information system from scratch',
			'Replaced manual Google Forms process with automated web system',
			'Collaborated with government office staff for requirements gathering',
			'Improved office efficiency through digital transformation'
		],
		tags: ['PHP', 'Web Development', 'Survey System', 'Database Design', 'Government Sector']
	}
];

export const achievements: TimelineItem[] = [
	{
		title: 'KKSI Smart School 2021',
		org: 'Data Science Competition',
		period: '2021',
		description:
			'Participated in the 2021 KKSI (Kamp Kreatif SMK Indonesia) Smart School competition in the Data Science field, demonstrating analytical skills and data processing capabilities.',
		tags: ['Data Science', 'Analytics', 'Problem Solving', 'Competition']
	}
];

export const achievementHighlights: { title: string; text: string; icon: IconName }[] = [
	{
		title: 'Innovation',
		text: 'Demonstrated innovative thinking in data science competitions and academic projects.',
		icon: 'lightbulb'
	},
	{
		title: 'Leadership',
		text: 'Active participation in team-based competitions and collaborative projects.',
		icon: 'users'
	},
	{
		title: 'Performance',
		text: 'Consistently achieving high standards in academic and professional pursuits.',
		icon: 'zap'
	}
];

export const certificates = [
	{
		title: 'Competency Test Certificate 2022',
		text: 'Achieved "Very Competent" certification demonstrating excellence in software engineering competencies and practical skills.',
		href: 'https://drive.google.com/drive/folders/1ReMLP1LAa3V2hc1PEaTqRGm6YdPkFvrv'
	},
	{
		title: 'KKSI Certificate 2021',
		text: 'Certificate from Kamp Kreatif SMK Indonesia (KKSI) 2021 with a "good reputation" achievement.',
		href: 'https://drive.google.com/drive/folders/1ReMLP1LAa3V2hc1PEaTqRGm6YdPkFvrv'
	}
];

export type SkillCategory = 'Frontend' | 'Backend' | 'Framework' | 'Database' | 'Tools';
export type SkillLevel = 'Basic' | 'Intermediate' | 'Advanced' | 'Expert';

export type Skill = {
	name: string;
	icon: string;
	category: SkillCategory;
	level: SkillLevel;
	/** Monochrome logos that are dark and need inverting on a dark background. */
	invertDark?: boolean;
};

export const skillCategories: ('All' | SkillCategory)[] = [
	'All',
	'Frontend',
	'Backend',
	'Framework',
	'Database',
	'Tools'
];

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export const skills: Skill[] = [
	{
		name: 'HTML5',
		icon: devicon('html5/html5-original.svg'),
		category: 'Frontend',
		level: 'Expert'
	},
	{ name: 'CSS3', icon: devicon('css3/css3-original.svg'), category: 'Frontend', level: 'Expert' },
	{
		name: 'JavaScript',
		icon: devicon('javascript/javascript-original.svg'),
		category: 'Frontend',
		level: 'Intermediate'
	},
	{
		name: 'jQuery',
		icon: devicon('jquery/jquery-original.svg'),
		category: 'Frontend',
		level: 'Intermediate'
	},
	{
		name: 'Bootstrap',
		icon: devicon('bootstrap/bootstrap-original.svg'),
		category: 'Framework',
		level: 'Advanced'
	},
	{
		name: 'Tailwind CSS',
		icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
		category: 'Framework',
		level: 'Advanced'
	},
	{
		name: 'Laravel',
		icon: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg',
		category: 'Backend',
		level: 'Advanced'
	},
	{
		name: 'Node.js',
		icon: devicon('nodejs/nodejs-original.svg'),
		category: 'Backend',
		level: 'Intermediate'
	},
	{
		name: 'Express.js',
		icon: devicon('express/express-original.svg'),
		category: 'Backend',
		level: 'Basic',
		invertDark: true
	},
	{
		name: 'AdonisJS',
		icon: 'https://www.vectorlogo.zone/logos/adonisjs/adonisjs-icon.svg',
		category: 'Backend',
		level: 'Intermediate'
	},
	{
		name: 'Next.js',
		icon: devicon('nextjs/nextjs-original.svg'),
		category: 'Frontend',
		level: 'Intermediate',
		invertDark: true
	},
	{
		name: 'Refine.dev',
		icon: 'https://avatars.githubusercontent.com/u/58008469?s=200&v=4',
		category: 'Tools',
		level: 'Intermediate'
	},
	{
		name: 'MySQL',
		icon: devicon('mysql/mysql-original.svg'),
		category: 'Database',
		level: 'Advanced'
	},
	{
		name: 'PostgreSQL',
		icon: devicon('postgresql/postgresql-original.svg'),
		category: 'Database',
		level: 'Intermediate'
	},
	{
		name: 'Prisma',
		icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/prisma/prisma-original.svg',
		category: 'Database',
		level: 'Basic',
		invertDark: true
	},
	{ name: 'Git', icon: devicon('git/git-original.svg'), category: 'Tools', level: 'Advanced' },
	{
		name: 'Postman',
		icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
		category: 'Tools',
		level: 'Advanced'
	},
	{
		name: 'Insomnia',
		icon: 'https://raw.githubusercontent.com/gilbarbara/logos/refs/heads/main/logos/insomnia.svg',
		category: 'Tools',
		level: 'Intermediate'
	}
];

export const expertise: { title: string; icon: IconName; items: string[] }[] = [
	{
		title: 'Development',
		icon: 'code',
		items: [
			'Full Stack Development',
			'Database Design & Optimization',
			'Version Control (Git)',
			'Responsive Web Design'
		]
	},
	{
		title: 'Tools & Workflow',
		icon: 'wrench',
		items: ['VS Code & PhpStorm', 'Postman API Testing', 'DataGrip', 'Figma & Whimsical']
	},
	{
		title: 'Methodologies',
		icon: 'compass',
		items: [
			'Agile Development',
			'Test-Driven Development',
			'Clean Code Principles',
			'MVC Architecture'
		]
	}
];

export type Project = {
	title: string;
	subtitle: string;
	image: string;
	category: string;
	tech: string[];
	status: 'Completed' | 'Live';
	description: string;
	screenshots?: { image: string; title: string }[];
	links: { github?: string; demo?: string };
};

export const projects: Project[] = [
	{
		title: 'Zera Dashboard Laravel',
		subtitle: 'Starter Template Dashboard Laravel',
		image: '/media/pr-image/zeralight.png',
		category: 'Web Application',
		tech: ['Laravel', 'Splade', 'DaisyUI', 'MySQL'],
		status: 'Completed',
		description:
			'The Open Source Starter Template Dashboard for Laravel uses the splade package and the Daisy UI Component. This template has several components and an attractive dashboard design with several helpers to make it easier to develop applications and documentation to make it easier to use with the help of my colleagues.',
		screenshots: [
			{ image: '/media/pr-image/zeralogin.png', title: 'Login Page' },
			{ image: '/media/pr-image/zeralight.png', title: 'Light Mode' },
			{ image: '/media/pr-image/zeradark.png', title: 'Dark Mode' },
			{ image: '/media/pr-image/zeraprofile.png', title: 'Profile Page' },
			{ image: '/media/pr-image/zerafitur.png', title: 'Components & Helper' }
		],
		links: { github: 'https://github.com/JunedSetiawan/zera-dashboard' }
	},
	{
		title: 'Survey Information System',
		subtitle: 'Survey Management System Web',
		image: '/media/pr-image/dashsurvei.png',
		category: 'Information System',
		tech: ['PHP', 'MySQL', 'Bootstrap', 'Chart.js'],
		status: 'Completed',
		description:
			'This web information system is to facilitate the management of surveys that have been filled in by applicants who go to the investment office, who previously used the Google form to fill out surveys. In this information system there are filters to handle surveys in the form of date ranges, checkboxes for answers from applicants, etc. and also has an export feature for daily or weekly reports.',
		screenshots: [
			{ image: '/media/pr-image/formsurvei.png', title: 'Form Survey' },
			{ image: '/media/pr-image/loginsurvei.png', title: 'Login Page' },
			{ image: '/media/pr-image/dashsurvei.png', title: 'Dashboard Page' },
			{ image: '/media/pr-image/fitursurvei.png', title: 'User Management' },
			{ image: '/media/pr-image/fitur2survei.png', title: 'Summary Count Survey Page' },
			{ image: '/media/pr-image/fitur3survei.png', title: 'Report Filter Page' }
		],
		links: { github: 'https://github.com/JunedSetiawan/si-survei' }
	},
	{
		title: 'Blog Post Web Splade',
		subtitle: 'News & Blog Platform',
		image: '/media/blog-splade/homepage.png',
		category: 'Content Management',
		tech: ['Laravel', 'Splade', 'MySQL', 'Tailwind CSS'],
		status: 'Completed',
		description:
			'A SPA website to publish news posts or blogs with various features by slicing designs from several website references. The features are search post filters, post category filters, post likes and comments, post reports. All features work well with good RBAC.',
		screenshots: [
			{ image: '/media/blog-splade/homepage.png', title: 'Home Page' },
			{ image: '/media/blog-splade/postpage.png', title: 'Post Page' },
			{ image: '/media/blog-splade/categorypage.png', title: 'Category Page' },
			{ image: '/media/blog-splade/personalpage.png', title: 'Personal Page' },
			{ image: '/media/blog-splade/savedpost.png', title: 'Saved Post Page' },
			{ image: '/media/blog-splade/showpage1.png', title: 'Show Page 1' },
			{ image: '/media/blog-splade/showpage2.png', title: 'Show Page 2' },
			{ image: '/media/blog-splade/dashboardposts.png', title: 'Dashboard Posts' },
			{ image: '/media/blog-splade/dashboarduser.png', title: 'Dashboard User' },
			{ image: '/media/blog-splade/dashboardreport.png', title: 'Dashboard Report' },
			{ image: '/media/blog-splade/dashboardaccept.png', title: 'Accept takedown post' }
		],
		links: { github: 'https://github.com/JunedSetiawan/blog-splade' }
	},
	{
		title: 'System Inventory Web',
		subtitle: 'System Inventory App',
		image: '/media/pr-image/zeralogin.png',
		category: 'Business Application',
		tech: ['Laravel', 'MySQL', 'Bootstrap', 'Chart.js'],
		status: 'Completed',
		description:
			'Website for inventory management, purchasing, sales, and manager with RBAC running well',
		links: { github: 'https://github.com/JunedSetiawan/inventori-app' }
	},
	{
		title: 'Abacanto Holding Company Profile',
		subtitle: 'Corporate Website with CMS',
		image: '/media/freelance/abacanto.png',
		category: 'Corporate Website',
		tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'CMS'],
		status: 'Live',
		description:
			'Freelance project developing a complete company profile website with custom CMS. I was responsible for front-end development, creating all pages and form controls for the CMS. Also provided bug fixes and improvements to the CMS dashboard created by my colleague.',
		links: { demo: 'https://abacantoholding.com/' }
	},
	{
		title: 'Gallimard Advisory Company Profile',
		subtitle: 'Professional Services Website',
		image: '/media/freelance/gallimard.png',
		category: 'Corporate Website',
		tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'CMS'],
		status: 'Live',
		description:
			'Another freelance company profile project with integrated CMS solution. Handled complete front-end development including responsive design, form controls, and user interface for content management. Collaborated with backend developer to ensure seamless CMS functionality.',
		links: { demo: 'https://gallimardadvisory.com/' }
	},
	{
		title: 'Counseling Guidance Recording Information System',
		subtitle: 'Student Counseling Management System',
		image: '/media/freelance/counseling.png',
		category: 'Information System',
		tech: ['Next.js', 'Refine.dev', 'AdonisJS', 'RBAC', 'PWA', 'PostgreSQL'],
		status: 'Completed',
		description:
			"Website that manages information sources on Regulations, Violations, Order Awards, Counselling, Home Visits and Student Calls. On this website there is also a recap of violations and awards, lots of filters and a beautiful and optimal dashboard. For the frontend system, use NextJS from refine.dev. Backend uses AdonisJS with RBAC and JWT http-cookie which is safe from both the client and server sides. And it's also equipped with PWA so it's easy to access.",
		links: { github: 'https://github.com/JunedSetiawan/fe-simbah-bk' }
	}
];
