# servicemap-ui-turku
Turku specific frontend modifications

Development steps:
1. Place the `servicemap-ui-turku` folder next to the `servicemap-ui` folder
    * The structure should look like this:
      ```
      /
        /servicemap-ui
        /servicemap-ui-turku
      ```
2. In the `servicemap-ui` project run `npm install ../servicemap-ui-turku`
3. Edit files in `servicemap-ui/node_modules/servicemap-ui-turku` for changes to be reflected

Production installation:
1. Add the project to the local `servicemap-ui` project either by installing it
   the same way as in the dev environment, or from GitHub or if this package is published
   to npm, then install it from there.