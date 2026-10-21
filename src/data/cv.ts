interface Entry {
  title: string;
  organization: string;
  location?: string;
  start: string;
  end?: string;
  details?: string[];
}

interface Award {
  title: string;
  year: string;
  details?: string;
}

export const cv: {
  education: Entry[];
  experience: Entry[];
  teaching: Entry[];
  awards: Award[];
} = {
  education: [
    {
      title: 'PhD in Industrial Engineering',
      organization: 'University of Iceland',
      location: 'Reykjavík, Iceland',
      start: '2024',
    },
    {
      title: 'M.Sc.Eng in Mathematical Modelling and Computation',
      organization: 'Technical University of Denmark (DTU)',
      location: 'Lyngby, Denmark',
      start: '2022',
      end: '2024',
    },
    {
      title: 'B.Sc. in Computer Science',
      organization: 'University of Iceland',
      location: 'Reykjavík, Iceland',
      start: '2018',
      end: '2022',
    },
    {
      title: 'B.Sc. in Applied Mathematics',
      organization: 'University of Iceland',
      location: 'Reykjavík, Iceland',
      start: '2018',
      end: '2021',
    },
  ],
  experience: [
    {
      title: 'Research Assistant',
      organization: 'University of Iceland',
      location: 'Reykjavík, Iceland',
      start: 'January 2024',
      end: 'July 2024',
      details: [
        'Developed a simulation model for product development processes. Python',
        'Text and graph analysis of a collection of PhD theses. Python.',
      ],
    },
    {
      title: 'Data Analyst and Programmer',
      organization: 'Heilsugreind ehf.',
      location: 'Reykjavík, Iceland',
      start: 'August 2020',
      end: 'December 2023',
      details: [
        'Projects in collaboration with the National University Hospital of Iceland',
        'Data processing and analysis, data visualization, optimization and simulation modeling, web app development. Python, R, SQL.',
      ],
    },
    {
      title: 'Data Analyst and Programmer',
      organization:
        'The Science Institute of the University of Iceland, The Icelandic Centre for Research (Rannís)',
      location: 'Reykjavík, Iceland',
      start: 'May 2020',
      end: 'August 2020',
      details: [
        'Developed a simulation model for the flow of Covid 19 patients in the National University Hospital of Iceland',
        'Developed a dashboard for the hospital to access the simulation results and visualize the data. R (Shiny).',
      ],
    },
  ],
  teaching: [
    {
      title: 'Sessional Lecturer, Operations Research 2',
      organization: 'University of Iceland',
      start: 'Fall 2025',
    },
    {
      title: 'Sessional Lecturer, Simulation',
      organization: 'University of Iceland',
      start: 'Spring 2025',
    },
  ],
  awards: [
    {
      title: 'The Innovation Award of the President of Iceland',
      year: '2022',
      details:
        'Awarded for the project "Better ICU care with data visualization", through the Icelandic Student Innovation Fund.',
    },
  ],
};
