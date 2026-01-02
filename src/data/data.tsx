export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Vartika Pandey.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Gurgaon-based <strong className="text-stone-100">Marketing & Brand Professional</strong>, passionate about
        executing creative campaigns, influencer collaborations, and digital content strategies for brands.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I love <strong className="text-stone-100">traveling</strong>, exploring <strong className="text-stone-100">culinary experiences</strong>, and learning about <strong className="text-stone-100">emerging marketing trends</strong>.
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
