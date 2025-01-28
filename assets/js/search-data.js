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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-tutorials",
          title: "tutorials",
          description: "Coding tutorials and lessons",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Some projects I have been working on my own.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "CV still being updated.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "projects-glossary",
          title: 'Glossary',
          description: "Definitions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_Glossary/";
            },},{id: "projects-introduction-to-programming",
          title: 'Introduction to programming',
          description: "Tutorial 1",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_Introduction_to_programming/";
            },},{id: "projects-adding-system-arguments",
          title: 'Adding system arguments',
          description: "Tutorial 2",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_Adding_system_arguments/";
            },},{id: "projects-adding-more-output-formats",
          title: 'Adding More Output Formats',
          description: "Tutorial 3",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_Adding_More_Output_Formats/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%61%72%6C%6F%73%64.%64%63.%6D%78@%67%6D%61%69%6C.%63%6F%6D", "_blank");
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
