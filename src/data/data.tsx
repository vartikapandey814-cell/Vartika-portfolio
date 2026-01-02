import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Vartika Pandey Portfolio',
  description: "Portfolio site of Vartika Pandey, Marketing & Brand Professional",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Vartika Pandey.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Mumbai-based <strong className="text-stone-100">Marketing & Brand Professional</strong>, passionate about
        creating impactful campaigns and building brand stories.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I love <strong className="text-stone-100">traveling</strong>, exploring <strong className="text-stone-100">new cuisines</strong>, and
        learning about <strong className="text-stone-100">digital marketing trends</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Passionate marketing and brand professional with experience in creating impactful campaigns, influencer collaborations, and digital content strategies.`,
  aboutItems: [
    { label: 'Location', text: 'Mumbai, India', Icon: MapIcon },
    { label: 'Age', text: '23', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Indian', Icon: FlagIcon },
    { label: 'Interests', text: 'Traveling, Culinary Arts, Reading', Icon: SparklesIcon },
    { label: 'Study', text: 'Islamia College of Commerce', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Ampro Marketing', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section (you can customize these later)
 */
export const skills: SkillGroup[] = [
  {
    name: 'Marketing & Branding',
    skills: [
      { name: 'Influencer Marketing', level: 9 },
      { name: 'Social Media Campaigns', level: 9 },
      { name: 'Content Strategy', level: 8 },
    ],
  },
  {
    name: 'Digital Skills',
    skills: [
      { name: 'SEO & Analytics', level: 7 },
      { name: 'Email Marketing', level: 8 },
      { name: 'Paid Ads (FB/Google/LinkedIn)', level: 7 },
    ],
  },
];

/**
 * Portfolio section (placeholder projects)
 */
export const portfolioItems: PortfolioItem[] = [
  { title: 'Project 1', description: 'Short description here.', url: '#', image: porfolioImage1 },
  { title: 'Project 2', description: 'Short description here.', url: '#', image: porfolioImage2 },
  { title: 'Project 3', description: 'Short description here.', url: '#', image: porfolioImage3 },
  { title: 'Project 4', description: 'Short description here.', url: '#', image: porfolioImage4 },
  { title: 'Project 5', description: 'Short description here.', url: '#', image: porfolioImage5 },
];

/**
 * Resume section (education & experience placeholders)
 */
export const education: TimelineItem[] = [
  { date: '2020', location: 'Islamia College of Commerce', title: 'B.Com', content: <p>Graduated with commerce degree.</p> },
];

export const experience: TimelineItem[] = [
  { date: '2023 - Present', location: 'Ampro Marketing', title: 'Marketing Coordinator', content: <p>Managing campaigns, content, and brand strategies.</p> },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    { name: 'John Doe', text: 'Vartika is amazing at managing campaigns.', image: 'https://via.placeholder.com/150' },
    { name: 'Jane Doe', text: 'Creative, professional, and dedicated.', image: 'https://via.placeholder.com/150' },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out via email or social media.',
  items: [
    { type: ContactType.Email, text: 'vartika@example.com', href: 'mailto:vartika@example.com' },
    { type: ContactType.Location, text: 'Mumbai, India', href: 'https://www.google.com/maps' },
    { type: ContactType.Instagram, text: '@vartika', href: 'https://www.instagram.com/' },
    { type: ContactType.Github, text: 'vartika', href: 'https://github.com/' },
  ],
};

/**
 * Social links
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/' },
];
