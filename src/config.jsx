//photo should be 3:4 aspect ratio
//remove title for members without a title
//committees is an array with 0 to 2 committees in it
//motion is for long titles that need scroll animations
//motion alt is a shortened version of long titles for reduce-motion users
export const members = [
  { name: "Name", 
    title: "President",
    committees: [],
    bio: "Bio",
    image: "/images/bobPic.png"
  },
  { name: "Name",
    title: "Vice President",
    committees: [],
    bio: "Bio",
    image: ""
  },
  { name: "Name",
    title: "Secretary",
    committees: [],
    bio: "Bio",
    image: ""
  },
  { name: "Name",
    title: "Treasurer",
    committees: [],
    bio: "Bio",
    image: ""
  },
  { name: "Name",
    title: "Mentor & Coach",
    committees: [], 
    bio: "Bio",
    image: ""
  },
  { name: "Name",
    title: "Mentor & Coach",
    committees: [], 
    bio: "Bio",
    image: ""
  },
  { name: "Name",
    title: "Foreman (Build Leader)",
    committees: [],
    bio: "Bio",
    image: ""
  },
  { name: "Name",
    title: "Architect (CAD Leader)",
    committees: [],
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, perferendis ad aspernatur nisi ipsum quasi amet laboriosam esse, illo inventore consequatur vero corrupti soluta ullam! Quidem iusto illum in dolores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate obcaecati molestiae iste quis omnis sequi laborum tempore voluptatibus quaerat illo voluptatem quod unde, explicabo quas veritatis. Nam harum ad cupiditate? Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, perferendis ad aspernatur nisi ipsum quasi amet laboriosam esse, illo inventore consequatur vero corrupti soluta ullam! Quidem iusto illum in dolores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate obcaecati molestiae iste quis omnis sequi laborum tempore voluptatibus quaerat illo voluptatem quod unde, explicabo quas veritatis. Nam harum ad cupiditate? Lorem",
    image: "/images/joe.png"
  },
  { name: "Name",
    title: "Code Leader",
    committees: ["committee_name"],
    bio:"Bio",
    image: ""
  },
  { name: "Name",
    title: "Manufacturer",
    committees: [],
    bio: "Bio",
    image: ""
  },
  { name: "Name",
    title: "SITCOM (Sponsership, Industry, Technology & Corporate Outreach Manager)",
    committees: [""],
    bio:"Bio",
    image: "",
    motion:true,
    altTitle: "SITCOM",
  },
  { name: "Name",
    title: "Fundraising Leader",
    committees: [],
    bio: "Bio",
    image: ""
  },
  { name: "Name",
    title: "Outreach Coordinater",
    committees: [],
    bio: "Bio",
    image: ""
  },
  { name: "Name",
    title: "Equipment Manager",
    committees: [],
    bio:"Bio",
    image: ""
    },
  { name: "Name",
    title: "Branding Leader",
    committees: [],
    bio: "Bio",
    image: ""
  },
  { name: "Name",
  title: "Media Manager",
  committees: [],
  bio: "Bio",
  image: ""
  },
  { name: "Name",
    title: "Game Master",
    committees: [],
    bio: "Bio",
    image: ""
  },
  { name: "Name",
    committees: ["committee_name", "committee_name"],
    bio: "Bio",
    image: "/images/jeff.png"
  },
  { name: "Name",
    committees: ["committee_name"],
    bio: "Bio",
    image: "/images/emily.png"
  },
]

export const alumni = [
  { name: "Adriana", 
    title: ["Member"],
    bio: "Adriana was a senior at John Jay High School. She spent a year with the robotics team, helping out with documentation and wherever else she could. In her free time she enjoys learning about history and geography. She was part of Science Olympiad, FBLA, the National and Math Honor Societies, and was a co-captain of the Girls Varsity Swim Team. She now attends Dartmouth College.",
    image: "https://cdn.jaybots.org/team/adriana2.png"
  },
  { name: "Ashish", 
    title: ["Vice President", "Documentation Leader"],
    bio: "Ashish is a senior at John Jay High School. He enjoys robotics and working through problems with his FTC team. This is his fourth year on the team, and he has been Vice President in 10th, 11th, and 12th grade. He works on different parts of the team as an officer: he helps out in CAD, code, and build. Outside of school he enjoys playing video games such as Apex Legends and Battlefront. He is part of the Math Honor Society, Symphonic Band, and Science Olympiad. He loves working with the team to solve problems through engineering and programming. He also serves the team as a driver during competitions and is the current head of the drive team. Ashish has committed to Northeastern University with a major in Computer Science for the 2022-2023 school year.",
    image: "https://jaybots.org/img/ashish.jpeg",
    motion: true,
    altTitle: ["VP", "Doc Leader"]
  },
  { name: "Darren", 
    title: ["President"],
    bio: "Darren Wang is a senior at John Jay Senior High School. This is his fourth year on the robotics team. He plans to go to college for biology and mechanical engineering after high school. He enjoys cooking, reading, and sleeping in his spare time. Robotics is his only scholastic club, but outside of robotics, he attends a fiddle group, is part of a fencing team, and attends a research mentorship program. He joined the robotics team because he wants to help create a fun and welcoming place for people who enjoy tinkering and brainstorming. He aims to make everyone in the team feel like they belong and lead the team to success in the competition season.",
    image: "https://jaybots.org/img/darren.jpeg",
  },
  { name: "David", 
    title: ["Member"],
    bio: "David has been on the Jaybots for the first time this year. Last year, he was part of the JV team and part of the DTC project group before moving up to Jaybots this year. He is currently a Senior, and this will be his second year as part of the robotics club at John Jay Senior High School. He’s a Hispanic student who plans to major in Civil engineering at Columbia University. David participates in various STEM-based clubs offered at the school. Other than being the President of the Spanish Honor Society, he enjoys being a part of and helping out with our robotics team.",
    image: "https://cdn.jaybots.org/team/david.png",
  },
  { name: "Kevin", 
    title: ["Builder"],
    bio: "Kevin Thomas is a senior at John Jay High School. This is his third year in FTC, and he is a member of the build team for Jaybots. He is also part of various other clubs and societies in school, such as the Math Honor Society, History Honor Society, National Honor Society and Interact Club. During his free time, Kevin enjoys playing video games on his Xbox and pc, such as FIFA, UFC, Valorant, and Minecraft. He also enjoys reading, riding his bicycle, and building small projects at home. After high school, Kevin plans to go to college and major in Mechanical Engineering, with interests in Aerospace/Aeronautical Engineering as well. Kevin joined FTC since he loves both building and robots, and he has loved every part of it since joining in his freshman year.",
    image: "https://jaybots.org/img/kevin.jpeg",
  },
  { name: "Matt", 
    title: ["Member"],
    bio: "Matthew Laverde is a senior at John Jay High School. He has no experience regarding robotics other than this team, and has learned a lot in the past few years. Matt was the leader of the build team for 3 previous years, and still puts what time he can into helping the team.",
    image: "https://jaybots.org/img/mattl.png",
  },
  { name: "Mili", 
    title: ["Secretary", "Outreach Coordinator"],
    bio: "Mili is a senior at John Jay High School. This her third year in Robotics. She also is a part of the Science Olympiad, Math Honor Society, and French Honor Society. She plans to attend college after high school. Mili enjoys reading books. She assists with the Engineering Notebook team and is outreach coordinator as well as the secretary for the team. She arranged the Lego Robotics Summer Workshop that was held this summer.",
    image: "https://jaybots.org/img/mili.jpg",
    motion: true,
    altTitle: ["Sec.", "Outreach"]
  },
  { name: "Robert", 
    title: ["Code Leader"],
    bio: "Robert is a Senior at John Jay High School. He has done LEGO robotics in middle school for 1 year and participated in both building and coding. Robert plans to go to college after high school and enjoys simply being at school, but definitely robotics. He is a member of the Math team, FBLA, and SciOly. Robert joined FTC 3 year to help new members learn. He hopes to learn and work with the new, growing team.",
    image: "https://jaybots.org/img/robert.jpeg",
  },
  { name: "Jared", 
    title: ["Secretary"],
    bio: "Jared Yeung was a senior at John Jay High School. He has done Project Lead The Way Program (PLTW): Introduction to Engineering and Design, Principles of Engineering and now taking Digital Electronics. He plans to go to Rochester Institute of Technology (RIT) and go into a field of computer hardware engineering after high school. He enjoys playing video games in his free time such as Apex Legends and Overwatch. He has done Robotics for 3 years now, although the first season started in the offseason. He has done other clubs such as Science Olympiad, Interact Club, Math Team, and Proscenium, however could only do two of them (Science Olympiad and Math Team) due to the Pandemic. He also does 3 Honor Societies: Math Honor Society, History Honor Society, and National Honor Society. He originally joined FTC because he loves to be part of a team and hang out with friends while also building a cool robot. He was the club's secretary for 3 years. Jared is now at Rochester Institute of Technology.",
    image: "https://cdn.jaybots.org/alumni/jared.png",
  },
  { name: "Jian", 
    title: ["Member"],
    bio: "Jian was a senior at John Jay Senior High School when he was on the team. He prefered to be called Jason. Other than FTC, he was not in any other robotics team. Jason wanted to join the robotics club because he was very interested in building a robot and learning how to code. He aimed to learn leadership skills that he could bring with him to college. He was the treasurer of the club and in charge of fundraising. He also worked on the engineering notebook. He enjoys mathematics, statistics, economics and of course robotics. Other interests he has are basketball and League of Legends. After high school, he planned to go on to college, and was interested in majoring in biochemistry or biomedical engineering - he is now at Stony Brook University.",
    image: "https://cdn.jaybots.org/alumni/jian.jpeg",
  },
  { name: "Youssef", 
    title: ["Member"],
    bio: "Youssef was a Junior and then Senior at John Jay High School when he was on the robotics team. This was his first involvement in a robotics team. He hadn’t set concrete plans for his life after high school, but was thinking about majoring in two different subjects and hadn’t decided yet on one. His interests included cooking, engineering, computers, and management. He joined FTC to learn more about engineering as well as to communicate.",
    image: "https://cdn.jaybots.org/alumni/youssef.jpeg",
  },
  { name: "Eric", 
    title: ["Build Leader"],
    bio: "Eric was a junior and then senior at John Jay High School when he was on the robotics team. Prior to this, he had never been on a robotics team. On the team as a senior, he was the build leader, contributing much of his time to the robot’s construction and troubleshooting build problems. At school, he enjoyed science classes and math classes. Of course, he also loved robotics. Eric went to Binghamton University after high school and his time on the team.",
    image: "https://cdn.jaybots.org/alumni/eric.jpg",
  },
  { name: "Maximus", 
    title: ["Member"],
    bio: "Maximus was a junior and then senior at John Jay High School when he was on the robotics team. He was known for his creativity and design for many things, machinery, sketches, art etc. Though he was the photographer of the group, he sketched and spent time with his group hoping to make use of robotics as a sport to “make a future for humanity.” Maximus has a creative mind and a talented perspective while noted to seek out knowledge of technological marvels, mathematics etc.",
    image: "https://cdn.jaybots.org/alumni/max.jpeg",
  },
]

//add games here and their years
//most recent games on top
//Jcomps = jaybot competeitions
//Pcomps = pheonix competitions
//Bcomps = blue bird competitions (Freight Frenzy only)
//more info in README.md
export const games = [
  {name: "Power Play",
    year: "2022-2023",
    logo: "/images/PowerplayWhite.png",
    logowidth: 700,
    allComps: [
      {team: "Jaybots",
        images: "https://cdn.jaybots.org/bot/2023-snow2-crop.jpeg",
        comps: [
      {type: "Qualifier",
        date: "January 14, 2023",
        awards: {
          advanced: true,
          first: ["Inspire", "Control"],
        }},
      {type: "Qualifier",
        date: "January 29, 2023",
        awards: {
          first: ["Motivate"],
        }},
      {type: "Qualifier",
        date: "February 18, 2023",
        awards: {
          second: ["Innovate"],
        }},
      {type: "Regional",
        date: "March 5, 2023",
        awards: {
          deansList: "Finalist",
          third: ["Innovate"],
        }},
      {type: "Inventational",
        date: "June 17, 2023",
        upcoming: true,
        awards: [],
      },
      ]},
      {team: "Phoenix",
        images: "https://cdn.jaybots.org/bot/p-2023.jpeg",
        comps: [
      {type: "Qualifier",
        date: "January 14, 2023",
        awards: {
          second: ["Connect"],
        }},
      {type: "Qualifier",
        date: "January 14, 2023",
        awards: {
          judgesChoice: true,
        }},
      {type: "Qualifier",
        date: "February 18, 2023",
        awards: {
          second: ["Motivate"]
        }}
      ]},
    ]
  },
  {name: "Freight Frenzy",
    year: "2021-2022",
    logo: "/images/freight-frenzy.png",
    logowidth: 1000,
    allComps: [
      {team: "Jaybots",
      images: "https://cdn.jaybots.org/bot/2022.jpeg",
        comps: [
          {type: "Qualifier",
            date: "January 23 - 29, 2022",
            awards: {
              first: ["Connect"],
              third: ["Motivate"],
            }},
          {type: "Qualifier",
            date: "January 13, 2023",
            awards: {
              third: ["Think"],
            }},
          {type: "Qualifier",
            date: "February 18, 2023",
            awards: {
              advanced: true,
              first: ["Inspire"],
              otherGold: ["Highest Scoring Team"]
            }},
          {type: "Regional",
            date: "March 6, 2022",
            awards: {
              judgesChoice: true,
              deansList: "Finalist",
              third: ["Innovate"],
            }},
        ]},
      {team: "Bluebirds",
        images: "https://cdn.jaybots.org/bot/b-2022.jpeg",
        comps: [
          {type: "Qualifier",
          date: "January 23 - 29, 2022",
          awards: {
            second: ["Connect"]
          }},
          {type: "Qualifier",
            date: "February 13, 2022",
            awards: {
              advanced: true,
              first: ["Inspire"],
              winningAlliance: "Captain",
              second: ["Connect", "Design"],
            }},
          { type: "Regional",
            date: "March 6, 2022",
            awards: {
              first: ["Promote"],
              promotehref: "https://drive.google.com/file/d/1Llqi59oZkiCmdPhwEei0jK7LW5Rhygec/view"
            }},
        ]}
    ], 
  },
  {name: "Ultimate Goal",
    year: "2020-2021",
    logo: "/images/ultimategoal.png",
    logowidth: 500,
    allComps: [
      {team: "Jaybots",
        images: "https://cdn.jaybots.org/bot/2021.jpg",
        comps: [ 
          {type: "Qualifier",
            date: "March 21 - 27, 2021",
            awards: {
              first: ["Connect"],
              third: ["Think", "Innovate"]
            }},
          {type: "Qualifier",
            date: "May 2 - 8, 2021",
            awards: {
              advanced: true,
              first: ["Inspire"],
              second: ["Innovate",]
            }},
          {type: "Qualifier",
            date: "May 16 - 2, 2021",
            awards: {
              first: ["Connect"],
            }},
          {type: "Regional",
            date: "May 30 - June 5, 2021",
            awards: {
              third: ["Collins Aerospace Innovate", "Think", "Promote",],
              promotehref: "https://drive.google.com/file/d/1-Sj8PRzw3ZmBM-9o7yxLt1U1e0T1QiO4/view",
            }}, 
        ]},
    ]
  },
  {name: "SkyStone",
    year: "2019-2020",
    logo: "/images/skystone.png",
    logowidth: 500,
    allComps: [
      {team: "Jaybots",
        images: "https://cdn.jaybots.org/bot/2020.jpg",
        comps: [
          {type: "Qualifier",
            date: "December 14, 2019",
            awards: {
              third: ["Collins Aerospace Innovate"],
            }},
          {type: "Qualifier",
            date: "January 11, 2020",
            awards: {
              second: ["Control"],
            }},
          {type: "Qualifier",
            date: "January 25, 2020",
            awards: {
              third: ["Motivate"],
            }},
        ]}
    ]
  },
  {name: "Rover Ruckus",
    year: "2019",
    logo: "/images/rover-ruckus.png",
    logowidth: 300,
    allComps: [
      {team: "Jaybots",
        images: "https://cdn.jaybots.org/bot/2019.jpg",
        comps: [
        {type: "Scrimmage",
        date: "June 15, 2019",
          awards: {
            otherBronze: "Finalist",
        }},
      ]}
    ]
  },
]


export const linkStyle = "font-bold text-blue-600 hover:text-blue-500"

export const teamColors = (team, hover, border, justborder) => {
  if (hover){
    if(border){
      if (team == "Jaybots") {
        return(" hover:border-blue-900 ")
      } else if (team == "Bluebirds"){
        return(" hover:border-blue-800 ")
      } else if (team == "Phoenix"){
        return(" hover:border-red-700 ")
      }
    }

    if (team == "Jaybots") {
      return(" hover:bg-blue-600 ")
    } else if (team == "Bluebirds"){
      return(" hover:bg-blue-600 ")
    } else if (team == "Phoenix"){
      return(" hover:bg-red-600 ")
    }
  }

  if(border){
    if (team == "Jaybots") {
      return(" border-blue-950 ")
    } else if (team == "Bluebirds"){
      return(" border-blue-700 ")
    } else if (team == "Phoenix"){
      return(" border-red-800 ")
    }
  }

  if(justborder){
    if (team == "Jaybots") {
      return(" border-blue-700/80 ")
    } else if (team == "Bluebirds"){
      return(" border-blue-500 ")
    } else if (team == "Phoenix"){
      return(" border-red-700 ")
    }
  }

  if (team == "Jaybots") {
    return(" bg-blue-700/80 ")
  } else if (team == "Bluebirds"){
    return(" bg-blue-500 ")
  } else if (team == "Phoenix"){
    return(" bg-red-700 ")
  }
}