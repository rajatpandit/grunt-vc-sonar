# grunt-contrib-sonar

> This was written to bump up the version attribute in sonar property file as part of the CI process. 

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install sonar --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('sonar');
```

## The "grunt-contrib-sonar" task

### Overview
In your project's Gruntfile, add a section named `sonar` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sonar: {
  // TODO more functions to be added later
    },
});
```

### Usage Examples

```js
grunt.initConfig({
  sonar: {
  },
});
```

Copy the sonar property file at the same level as the Gruntfile and run the following command:

```bash
> grunt sonar:sonar.properties:patch
Running "sonar:sonar.properties:patch" (sonar) task
Updating version in "sonar.properties" for type "patch"
version updated to 0.0.21
```
Since this uses semver you can pass the following options
major, premajor, minor, preminor, patch, prepatch, or prerelease

read: https://github.com/isaacs/node-semver for more information


## TODO
- Add better error handling
- Update the tests so that it actually works

