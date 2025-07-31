# vybes

a react native typescript application designed to track shared songs between friends

## setting up

this react native typescript project was [set up using expo](https://docs.expo.dev/get-started/set-up-your-environment/?mode=development-build&buildEnv=local)

## running the project

1. create a clone of this repository on your local machine
2. `cd` into the cloned project: `cd vybes`
3. open/attach an emulator (ie. for android, open android studio)
4. run the project: `npm run android|ios|web`
   - for android: `npm run android`
   - for ios: `npm run ios`
   - for web: `npm run web`

## package management

this project uses [bun](https://bun.com/) to manage packages

| command                          | description                      |
| -------------------------------- | -------------------------------- |
| `bun i @types/bun`               | ` npm i` / add dependencies      |
| bun i -d @types/bun`             | `npm i -d` / add devDependencies |
| `bun rm @types/bun`              | remove dependency                |
| `bun update @types/bun`          | update dependency                |
| `bun update`                     | update all dependencies          |
| `bun update @types/bun --latest` | update to latest version         |
| `bun update @types/bun@1.2.3`    | update to specific version       |
| `bun update --latest`            | update all to latest versions    |

#### other

| command         | description                     |
| --------------- | ------------------------------- |
| `bun <file>`    | `node <file>` / runs node file  |
| `bun <package>` | `npx <package>` / run a package |

#### run scripts

| command            | description                                         |
| ------------------ | --------------------------------------------------- |
| `bun <script>`     | `npm run <script>` / run script from `package.json` |
| `bun run <script>` | `npm run <script>` / run script from `package.json` |
| `bun ./index.ts`   | run JS/TS script                                    |

#### run executables

| command          | description                           |
| ---------------- | ------------------------------------- |
| `bun <bin>`      | `npm exec <bin>`                      |
| `bun <exec>`     | run executable in `node_modules/.bin` |
| `bun run <exec>` | run executable in `node_modules/.bin` |
