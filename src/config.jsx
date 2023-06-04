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

//add games here and their years
//most recent games on top
//Jcomps = jaybot competeitions
//Pcomps = pheonix competitions
//Bcomps = blue bird competitions (Freight Frenzy only)
//more info in README.md
export const games = [
  {name: "Power Play",
    year: "2022-2023",
    logo: "/images/powerplay.png",
    logowidth: 500,
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


export const linkStyle = "ml-2 font-bold text-blue-600 hover:text-blue-500"

export const teamColors = (team, hover) => {
  if (hover){
    if (team == "Jaybots") {
      return(" hover:bg-blue-600 ")
    } else if (team == "Bluebirds"){
      return(" hover:bg-blue-600 ")
    } else if (team == "Phoenix"){
      return(" hover:bg-red-600 ")
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