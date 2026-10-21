export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const site = {
  name: 'Signý Kristín Sigurjónsdóttir',
  initials: 'SKS',
  photoPosition: 'center 35%',
  url: 'https://signykristin.is',
  role: 'PhD student',
  affiliation: 'University of Iceland',
  description: 'PhD student and computational engineer',
  bio: [
    'I work on operations research problems in healthcare, with a focus on optimization and simulation. My current work focuses on optimizing surgical schedules for the National University Hospital of Iceland, using data-driven methods.',
    'I also like to build open source web apps for various purposes related to my hobbies, that may be useful to others as well.',
  ],
  authorNames: ['Signý Kristín Sigurjónsdóttir', 'S. K. Sigurjónsdóttir'],
  email: 'signyk@hi.is',
  socials: [
    { label: 'GitHub', href: 'https://github.com/signyk', icon: 'simple-icons:github' },
    { label: 'ORCID', href: 'https://orcid.org/0009-0000-1970-2633', icon: 'simple-icons:orcid' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/signy-kristin/',
      icon: 'lucide:linkedin',
    },
  ] satisfies SocialLink[],
  nav: [
    { label: 'About', href: '/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Research', href: '/research/' },
    { label: 'CV', href: '/cv.pdf' },
  ],
};
