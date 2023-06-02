# JAYBOTS Website

This is the repo for what will soon become the new [jaybots.org](https://jaybots.org).

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

Everything is in the 'src' folder. Pages are in `src/pages`, and components to be referenced are in `src/components`.

To add, remove, or update member cards on the [team page](https://jaybots.org/team), edit the `members` array in `src/config.jsx`.
Team member photos should be in 3:4 aspect ratio (Portrait). Remove `title` from members without an elected position. Do not remove `committees`; if a member is not in any committes, leave the array empty. Do not add members to more than 2 committees, only the first 2 will be shown. If the title is too long to fit on the card, add `motion: true,` in the member array. Also add an `altTitle:` to be displayed if the user opted for reduced motion. An example of a team member is below:

```jsx
{ name: "Name", 
  title: "President",
  committees: ["committee name",],
  bio: "Bio",
  image: "image source",
},
```
