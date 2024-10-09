# vybes

`vybes` is a web application designed to track shared songs between friends.

## technology

**frontend**: react js, [MUI component library](https://mui.com/), [figma](https://www.figma.com/design/7nI86A4ffI1pc5KgJZUElw/vybes?t=XZ1aZAMvym69dKjw-1)
**backend**: node.js, [express](https://github.com/expressjs/express), [axios](https://github.com/axios/axios)
**linter & formatter**: [eslint](https://eslint.org/), [prettier](https://prettier.io/), [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
**database**: [supabase](https://supabase.com/)
**server**: node.js local server
**tracking**: [trello](https://trello.com/b/u7Q5LDBk/spotifywfriends)

## getting started

##### install dependencies

1. create a local copy of this repository on your machine
2. open a terminal on the root folder and run `npm i`
3. at the root folder, run `npm run install-backend`
4. at the root folder, run `npm run install-frontend`

##### set up your `.env` file

1. create an `.env` file inside the `server` directory (`vybes/server/.env`)
2. create two variables: `REACT_APP_SUPABASE_URL` and `REACT_APP_ANON_KEY`
3. your file should look like this:

```
REACT_APP_SUPABASE_URL=<supabse url>
REACT_APP_ANON_KEY=<supabase db key>
```

##### to run the project, first start up the backend

1. open up a new terminal
2. `cd` into the root `vybes` directory
3. `npm run server`

##### then, in another terminal, start up the front end

1. `cd` into the root `vybes` directory
2. `npm run client`
3. a browser should open with our application running

#### developer notes

- ensure you are picking and assigning yourself a task from the [trello board](https://trello.com/b/u7Q5LDBk/vybes)
- prefix your feature branch with either `feature`, `bug`, `doc`, `style` or `chore`
  - ie. for developing login ui, the branch name would be `feature/login-ui`
  - `feature` for task-level tickets
  - `bug` for bug fixes
  - `doc` for adding to documentation
  - `style` for fixing or updating styles
  - `chore` is a catch-all type of prefix
- after finishing a task/developing a feature, make sure to create a **PR**
- **PRs need to be reviewed and approved before merging to the main codebase**

#### developer notes

- custom styled input component only accepted one letter and then lost focus
  - this was due to the input component being re-rendered every time the state (input value) changed
  - to fix this, i had to move the custom styled input component outside of the function declaration itself

## project complications

- not enough capacity (previous members aren't able to contribute)
- technology stack limitations (switching from hostgator server to local server)
- rebranding (to use spotify's API, our app name cannot include 'spotify')
- mvp changes (since capacity is at a low, mvp needs to change in order to meet end of the year 'deadline')

#### MVP (revised)

- must use, implement and get song data from spotify api
- search for a song (track) using spotify api
- show a list of search results from spotify api
- ✓ show a list of songs inside shared playlist
- add a song to the shared playlist
- add a song's rating (out of 5 stars)
- add a song's note
- delete a song from the shared playlist
- delete a song's rating
- delete a song's note
- edit a song's rating
- edit a song's note
- ✓ show a single song with its rating and note (if any)
- ✓ show a single shared playlist
- implement error handling where needed
- ✓ create and implement a cohesive theme throughout the application
- ensure best ux/ui and accessibility practices
- ✓ separate business, logic and presentation layers
- create a comprehensive documentation/user-guide
  - ✓ informative github readme
  - ✓ developer notes
  - comprehensive project wiki (confluence?)
  - feature documentation (TBD)

##### wishlist/next

- create logo
- additional themes
- add date of when song was added
- keep track of multiple shared playlists
- show a list of all shared playlists
- delete a shared playlist
- custom name for shared playlists
- edit a shared playlist

##### future features

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
