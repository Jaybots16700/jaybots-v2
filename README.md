# JAYBOTS Website

This is the repo for what will soon become the new [jaybots.org](https://jaybots.org) (currently hosted at [jaybots-v2.vercel.app](jaybots-v2.vercel.app))

## Getting started

To get started with, first install the npm dependencies:

```bash
npm install
#or
npm i
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

Everything is in the 'src' folder. Pages are in `src/pages`, and components to be imported are in `src/components`. You should be able to make all yearly updates in `src/config.jsx` (until a dashboard is built into the site with a db so it can be doene from there).

## Team Page

To add, remove, or update member cards on the [team page](https://jaybots.org/team), edit the `members` array in `src/config.jsx`.
Team member photos should be in 3:4 aspect ratio (Portrait). Remove `title` from members without an elected position. Do not remove `committees`; if a member is not in any committes, leave the array empty. Do not add members to more than 2 committees, only the first 2 will be shown. If the title is too long to fit on the card, add `motion: true` in the member array. Also add an `altTitle: string,` to be displayed if the user opted for reduced motion. An example of a team member is below:

```jsx
{ name: "Name",
  title: "President",
  committees: ["committee name",],
  bio: "Bio",
  image: "image source",
},
```

## Awards Page

To edit awards and competitions on the [awards page](https://jaybots.org/awards), edit the `games` array in `src/config.jsx`.
Each game should be an object with the following properties:

- `name: string` the name of the game
- `year: string` the year the game was held (format: yyyy-yyyy)
- `logo: string` the image source for the offical FTC logo of that season (transparent png prefered)
- `logowidth: number` the numder of pixels wide to make te logo. I recommend changing this until it looks right.
- `allComps: array` contains one object per team that competed that year. Each object must include the following:
- `team: string` the team that this object is for. Example: `'Jaybots'`, `'Phoenix'`, or `'Bluebirds'` (Freight Frenzy only for Bluebirds)
- `comps: array` the competitions that the team in question attended

Within each `comps` array are objects for each competition. They should have the following properties:

- `type: string` the type, or level of competition this could be:
  - `'Scrimmage'`
  - `'Qualifier'`
  - `'Regional'`
  - `'World'`
- `date: string` the date, or date range of the competition. Should be expressed as
  - FULL_MONTH_NAME DAY, YEAR for a single day
  - FULL_MONTH_NAME DAY - DAY, YEAR for a range of days within a month
  - FULL_MONTH_NAME DAY - FULL_MONTH_NAME DAY, YEAR for a range of days spanning multiple months
- `images: sring` the image source for bot pic of that season
- `upcoming: true` if the event is upcoming (hasn't happened yet)
- `awards: array` an array with the awards/ advancements earned. These should be:
  - `advanced: true` advanced to next level (Qualifier to Regional, Regional to World, or Winner of Worlds)
  - `deanList: string` a member of the team earned dean's list title, example: `'Finalist'`
  - `first: array` the names of the first place award
  - `second: array` the names of the second place award
  - `third: array` the names of the third place award
  - `winningAlliance: string` if you were in the winning allience,
    - `'Captain`
    - `'First Choice'`
    - `'Second Choice'`
  - `finalistAlliance: string` if you were in the runner-up allience,
    - `'Captain`
    - `'First Choice'`
    - `'Second Choice'`
  - `judgesChoice: true,` you won the Judges' Choice Award
  - `promotehref: string` if Promote Award was won, this is the link to the promote video. You must also add `first: 'Promote'`, `second: 'Promote'`, or `'thrid: 'Promote'`
  - `otherRibbon: string` anything shown here will be displayed with a ribbon (shown next to advancements)
  - `otherGold: array` anything shown here will be displayed with a gold trophy
  - `otherSilver: array` anything shown here will be displayed with a silver trophy
  - `otherBronze: array` anything shown here will be displayed with a bronze trophy

Here is an example of the Power Play Game Season:

```jsx
export const games = [
  {
    name: 'Power Play',
    year: '2022-2023',
    images: [],
    logo: '/images/powerplay.png',
    logowidth: 500,
    allComps: [
      {
        team: 'Jaybots',
        comps: [
          {
            type: 'Qualifier',
            date: 'January 14, 2023',
            awards: {
              advanced: true,
              first: ['Inspire', 'Control'],
            },
          },
          {
            type: 'Qualifier',
            date: 'January 29, 2023',
            awards: {
              first: ['Motivate'],
            },
          },
          {
            type: 'Qualifier',
            date: 'February 18, 2023',
            awards: {
              second: ['Innovate'],
            },
          },
          {
            type: 'Regional',
            date: 'March 5, 2023',
            awards: {
              deansList: 'Finalist',
              second: ['Innovate'],
            },
          },
        ],
      },
      {
        team: 'Phoenix',
        comps: [
          {
            type: 'Qualifier',
            date: 'January 14, 2023',
            awards: {
              second: ['Connect'],
            },
          },
          {
            type: 'Qualifier',
            date: 'January 14, 2023',
            awards: {
              judgesChoice: true,
            },
          },
          {
            type: 'Qualifier',
            date: 'February 18, 2023',
            awards: {
              second: ['Motivate'],
            },
          },
        ],
      },
    ],
  },
]
```
