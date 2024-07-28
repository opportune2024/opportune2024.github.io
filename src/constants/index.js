
const navLinks = [
    {
      id: 'internships',
      title: 'Internships',
      icon: 'WorkIcon',
      path: '/internships',
    },
    {
      id: 'externships',
      title: 'Externships',
      icon: 'SchoolIcon',
      path: '/externships',
    },
    {
      id: 'bootcamps',
      title: 'Bootcamps',
      icon: 'ComputerIcon',
      path: '/bootcamps',
    },
    {
      id: 'certifications',
      title: 'Certifications',
      icon: 'VerifiedIcon',
      path: '/certifications',
    },
    {
      id: 'jobs',
      title: 'Jobs',
      icon: 'BusinessCenterIcon',
      path: '/jobs',
    },
];

const internships = [
    {
        id: 1,
        title: 'JPMorgan Chase - Software Engineer Summer',
        url: 'https://careers.jpmorgan.com/us/en/students/programs/software-engineer-summer?search=&tags=location__Americas__UnitedStatesofAmerica',
    },
    {
        id: 2,
        title: 'IXL Learning - Various Positions',
        url: 'https://www.ixl.com/company/careers?gh_jid=7535510002&utm_source=skillsire&utm_medium=skillsire&utm_campaign=skillsire&source=skillsire&ref=skillsire',
    },
    {
        id: 3,
        title: 'Snowflake - Data Scientist Intern Fall 2024',
        url: 'https://careers.snowflake.com/us/en/job/SNCOUS7559273002EXTERNALENUS/Data-Scientist-Intern-Fall-2024?utm_source=skillsire&utm_medium=skillsire&utm_campaign=skillsire&source=skillsire&ref=skillsire',
    },
    {
        id: 4,
        title: 'Amazon - Software Development Engineer 2024',
        url: 'https://amazon.jobs/en/jobs/2644301/software-development-engineer-2024-us',
    },
    {
        id: 5,
        title: 'Amazon - Hardware Development Engineer Fall Internship 2024',
        url: 'https://amazon.jobs/en/jobs/2620668/hardware-development-engineer-fall-internship-2024-us',
    },
    {
        id: 6,
        title: 'Netflix - Various Positions',
        url: 'https://netflix.eightfold.ai/careers?query=intern&location=united%20states&pid=790298013546&domain=netflix.com&sort_by=relevance&triggerGoButton=false&show_multiple=false#apply',
    },
    {
        id: 7,
        title: 'Microsoft - Research Intern - AI Infrastructure',
        url: 'https://jobs.careers.microsoft.com/global/en/job/1695161/Research-Intern---AI-Infrastructure',
    },
    {
        id: 8,
        title: 'Microsoft - Research Intern - AI-driven System and Database Design',
        url: 'https://jobs.careers.microsoft.com/global/en/job/1695206/Research-Intern---AI-driven-System-and-Database-Design',
    },
    {
        id: 9,
        title: 'TikTok - Various Positions',
        url: 'https://careers.tiktok.com/position/7394666581098039602/detail?utm_source=skillsire&utm_medium=skillsire&utm_campaign=skillsire&source=skillsire&ref=skillsire',
    },
    {
        id: 10,
        title: 'Google - Software Engineering Intern Summer 2025',
        url: 'https://www.google.com/about/careers/applications/jobs/results/83484176157680326-software-engineering-intern-summer-2025?target_level=INTERN_AND_APPRENTICE',
    },
    {
        id: 11,
        title: 'Citadel - Quantitative Research Analyst 2025 Intern',
        url: 'https://www.citadel.com/careers/details/quantitative-research-analyst-2025-intern-us-2/',
    },
    {
        id: 12,
        title: 'Citadel - Software Engineer 2025 Intern',
        url: 'https://www.citadel.com/careers/details/software-engineer-2025-intern-us-2/',
    },
    {
        id: 13,
        title: 'Tesla - Android Developer Mobile Software Fall 2024',
        url: 'https://www.tesla.com/careers/search/job/internship-android-developer-mobile-software-fall-2024-224329',
    },
    {
        id: 14,
        title: 'Tesla - Energy Optimization Software Fall 2024',
        url: 'https://www.tesla.com/careers/search/job/internship-energy-optimization-software-fall-2024-223929',
    },
    {
        id: 15,
        title: 'Tesla - Embedded Systems Software Engineer Vehicle Firmware Fall 2024',
        url: 'https://www.tesla.com/careers/search/job/internship-embedded-systems-software-engineer-vehicle-firmware-fall-2024-222189',
    },
    {
        id: 16,
        title: 'JPMorgan Chase - Software Engineer Summer',
        url: 'https://careers.jpmorgan.com/us/en/students/programs/software-engineer-summer?search=&tags=location__Americas__UnitedStatesofAmerica',
    },
    {
        id: 17,
        title: 'IXL Learning - Various Positions',
        url: 'https://www.ixl.com/company/careers?gh_jid=7535510002&utm_source=skillsire&utm_medium=skillsire&utm_campaign=skillsire&source=skillsire&ref=skillsire',
    },
    {
        id: 18,
        title: 'Snowflake - Data Scientist Intern Fall 2024',
        url: 'https://careers.snowflake.com/us/en/job/SNCOUS7559273002EXTERNALENUS/Data-Scientist-Intern-Fall-2024?utm_source=skillsire&utm_medium=skillsire&utm_campaign=skillsire&source=skillsire&ref=skillsire',
    },
    {
        id: 19,
        title: 'Amazon - Software Development Engineer 2024',
        url: 'https://amazon.jobs/en/jobs/2644301/software-development-engineer-2024-us',
    },
    {
        id: 20,
        title: 'Amazon - Hardware Development Engineer Fall Internship 2024',
        url: 'https://amazon.jobs/en/jobs/2620668/hardware-development-engineer-fall-internship-2024-us',
    },
    {
        id: 21,
        title: 'Netflix - Various Positions',
        url: 'https://netflix.eightfold.ai/careers?query=intern&location=united%20states&pid=790298013546&domain=netflix.com&sort_by=relevance&triggerGoButton=false&show_multiple=false#apply',
    },
    {
        id: 22,
        title: 'Microsoft - Research Intern - AI Infrastructure',
        url: 'https://jobs.careers.microsoft.com/global/en/job/1695161/Research-Intern---AI-Infrastructure',
    },
    {
        id: 23,
        title: 'Microsoft - Research Intern - AI-driven System and Database Design',
        url: 'https://jobs.careers.microsoft.com/global/en/job/1695206/Research-Intern---AI-driven-System-and-Database-Design',
    },
    {
        id: 24,
        title: 'TikTok - Various Positions',
        url: 'https://careers.tiktok.com/position/7394666581098039602/detail?utm_source=skillsire&utm_medium=skillsire&utm_campaign=skillsire&source=skillsire&ref=skillsire',
    },
    {
        id: 25,
        title: 'Google - Software Engineering Intern Summer 2025',
        url: 'https://www.google.com/about/careers/applications/jobs/results/83484176157680326-software-engineering-intern-summer-2025?target_level=INTERN_AND_APPRENTICE',
    },
    {
        id: 26,
        title: 'Citadel - Quantitative Research Analyst 2025 Intern',
        url: 'https://www.citadel.com/careers/details/quantitative-research-analyst-2025-intern-us-2/',
    },
    {
        id: 27,
        title: 'Citadel - Software Engineer 2025 Intern',
        url: 'https://www.citadel.com/careers/details/software-engineer-2025-intern-us-2/',
    },
    {
        id: 28,
        title: 'Tesla - Android Developer Mobile Software Fall 2024',
        url: 'https://www.tesla.com/careers/search/job/internship-android-developer-mobile-software-fall-2024-224329',
    },
    {
        id: 29,
        title: 'Tesla - Energy Optimization Software Fall 2024',
        url: 'https://www.tesla.com/careers/search/job/internship-energy-optimization-software-fall-2024-223929',
    },
    {
        id: 30,
        title: 'Tesla - Embedded Systems Software Engineer Vehicle Firmware Fall 2024',
        url: 'https://www.tesla.com/careers/search/job/internship-embedded-systems-software-engineer-vehicle-firmware-fall-2024-222189',
    }
];
    

const externships = [
    {
        id: 1,
        title: 'The Forage - Virtual Work Experiences',
        url: 'https://www.theforage.com/',
    },
    {
        id: 2,
        title: 'The Forage - Virtual Work Experiences',
        url: 'https://www.theforage.com/',
    },
];

const bootcamps = [
    {
        id: 1,
        title: 'The Odin Project - Full Stack JavaScript',
        url: 'https://www.theodinproject.com/',
    },
    {
        id: 2,
        title: 'CS50 Harvard - Introduction to Computer Science Fall 2024',
        url: 'https://cs50.harvard.edu/college/2024/fall/',
    },
    {
        id: 3,
        title: 'freeCodeCamp - Learn to Code for Free',
        url: 'https://www.freecodecamp.org/',
    },
    {
        id: 4,
        title: 'DataCamp - Learn Data Science Online',
        url: 'https://www.datacamp.com/',
    },
];

const certificates = [
    {
        id: 1,
        title: 'Coursera - Online Courses & Credentials',
        url: 'https://www.coursera.org/',
    },
    {
        id: 2,
        title: 'Udemy - Online Courses & Training',
        url: 'https://www.udemy.com/',
    },
];


export {navLinks, internships, externships, bootcamps, certificates};