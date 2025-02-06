// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-presented-my-internship-project-to-200-scientists-at-the-duke-cfar-retreat-2024-sparkles-smile",
          title: 'Presented my internship project to 200+ scientists at the Duke CFAR Retreat 2024!...',
          description: "",
          section: "News",},{id: "news-participating-as-a-panelist-at-statfest-2024-to-share-my-experiences-in-data-science-and-statistics",
          title: 'Participating as a panelist at StatFest 2024 to share my experiences in data...',
          description: "",
          section: "News",},{id: "news-had-a-great-time-building-peakplanner-at-duke-generative-ai-hackathon-2024",
          title: 'Had a great time building PeakPlanner at Duke Generative AI Hackathon 2024.',
          description: "",
          section: "News",},{id: "news-finally-got-my-official-semester-score-4-0-4-0-early-christmas-gift",
          title: 'Finally got my official semester score: 4.0/4.0. Early Christmas gift! 🎄✨',
          description: "",
          section: "News",},{id: "news-my-graduation-commencement",
          title: 'My graduation commencement! 🎓',
          description: "",
          section: "News",},{id: "projects-nucls",
          title: 'NuCLS',
          description: "Hugging Face Integration and Nuclei detection in breast cancer images using YOLOv8.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-hierarchical-modeling-of-song-sparrows",
          title: 'Hierarchical Modeling of Song Sparrows',
          description: "Linear mixed-effects models with time correlation for analyzing avian reproduction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-peakplanner",
          title: 'PeakPlanner',
          description: "An AI-powered scheduler that plans your work and study tasks around your health for peak performance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-text-to-image-synthesis-using-conditional-vae",
          title: 'Text-to-Image Synthesis Using Conditional-VAE',
          description: "Exploring how Conditional Variational Autoencoders generate images from textual descriptions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-unconfoundedness-vs-synthetic-control-in-panel-data-analysis",
          title: 'Unconfoundedness vs Synthetic Control in Panel Data Analysis',
          description: "Exploring time-series and cross-sectional methods to enhance causal inference in panel data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%6E%68%61%6E%68.%74%6F@%64%75%6B%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/minhanhto09", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/minhanhto", "_blank");
        },
      },{
        id: 'social-whatsapp',
        title: 'whatsapp',
        section: 'Socials',
        handler: () => {
          window.open("https://wa.me/19194758485", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
