# vybes

`vybes` is a web application designed to track shared songs between friends.

## technology

**frontend**: react js, [MUI component library](https://mui.com/), [figma](https://www.figma.com/design/7nI86A4ffI1pc5KgJZUElw/vybes?t=XZ1aZAMvym69dKjw-1)

**backend**: node.js, [express](https://github.com/expressjs/express), [axios](https://github.com/axios/axios)

**linter & formatter**: [eslint](https://eslint.org/), [prettier](https://prettier.io/), [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

**database**: mysql

**server**: mysql (local)

**tracking**: [trello](https://trello.com/b/u7Q5LDBk/spotifywfriends)

## getting started

1. to run the project, first start up the backend

  - open up a new terminal
  - `cd` into the root `vybes` directory
  - `npm run server`

2. then, in another terminal, start up the front end

  - `cd` into the root `vybes` directory
  - `npm run client`

## complications

- not enough capacity (previous members aren't able to contribute)
- technology stack limitations (switching from hostgator server to local server)
- rebranding (to use spotify's API, our app name cannot include 'spotify')
- mvp changes (since capacity is at a low, mvp needs to change in order to meet end of the year 'deadline')

## MVP

- must use, implement and get song data from spotify api
- search for a song (track) using spotify api
- show a list of search results from spotify api
- show a list of songs inside shared playlist
- add a song to the shared playlist
- add a song's rating (out of 5 stars)
- add a song's note
- delete a song from the shared playlist
- delete a song's rating
- delete a song's note
- edit a song's rating
- edit a song's note
- show a single song with its rating and note (if any)
- show a single shared playlist
- implement error handling where needed
- create and implement a cohesive theme throughout the application
- ensure best ux/ui and accessibility practices
- separate business, logic and presentation layers
- create a comprehensive documentation/user-guide

### wishlist/next

- create logo
- additional themes
- add date of when song was added
- keep track of multiple shared playlists
- show a list of all shared playlists
- delete a shared playlist
- custom name for shared playlists
- edit a shared playlist

### future features

- sorting
- filtering
- search functionality
- edit/delete songs within a shared playlist in bulk
- favorites list
- song/album images
- ability to create a playlist on your spotify account
- tags
- login/authentication/encryption
- text/email notifications
- youtube compatibility
- apple music compatibility
- podcasts compatibility
