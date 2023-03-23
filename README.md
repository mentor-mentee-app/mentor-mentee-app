# Mentor & Mentee matching app

This is the place wher all source code for **Mentor & Mentee** application will be maintained

## Initial setup

You will need `pnpn` installed - https://pnpm.io/installation

Once that is done run

```console
pnpm install
```

### Linting & Formating

For code formatting it is advisable to install ESLint and Prettier plugin.
Depending on your editor of choice they can be installed/enabled here:

#### VS Code:

-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

#### Webstorm:

-   [ESLint](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_eslint_activate)

-   [Prettier](https://www.jetbrains.com/help/webstorm/prettier.html)

#### Other:

For other development IDEs & editors search in their docs or google

## Frontend

Front end is located in `apps/front`

[Frontend info](./apps/front/README.md)

## Backend

Back end is located in `apps/back`

[Backend info](./apps/back/README.md)

## Running whole project

To Run both front & back end you can run

```console
pnpn run dev
```

from the root project. That will bring up the

## Git

Git is used as source version control. The `master` branch is main branch that should correspod to the latest working code.

When working on code, before it's ready, a new **branch** should be created for each code change.

```console
git checkout -b my-branch-name
```

New changes that you want to commit are added by `git add` leading with the path of the file/s to add. e.g.:

```console
git add src/new-module
```

everything can be added by:

```console
git add .
```

Once all that need to be commited is added, you can commit:

```console
git commit -m "My commit message"
```

Generally, commit message should give short, but informative description of what was added, changed or removed.

This is all local chages. To make them public push it:

```console
git push
```

For first commit on a new branch, the branch needs to be pushed for it to be public:

```console
git push --set-upstream origin my-branch-name
```

When this is ready, it can then a Pull Request (PR) can be created.

A code review of a mentor (and peers) should be asked.

Finally, once a reveiw has passed, it can be merged to `master` branch, and thus the new changes are now "the latest working code"

