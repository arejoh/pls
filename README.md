# Styleguide

This is a styleguide created using:
- [Pattern Lab](http://patternlab.io/)
- [Bundler](http://bundler.io/)
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)

## Dependencies

To use this styleguide you need:
[Bundler](http://bundler.io) and [node.js](http://nodejs.org/).

If you are on a mac install Bundler by typing

```
gem install bundler
```

in you terminal.

The simplest way to install node.js on a mac is using homebrew.

```
brew install nodejs
```

For other ways to install and to install on other platforms see documentation.

When nodejs is installed you need to run

```
npm -g install grunt-cli bower
```

in your terminal. This will install grunt and bower.

## Setup

Once the dependencies are met you may run `bin/init` to install other
dependencies and perform the initial build.

You should now have a Pattern Lab environment with Grunt integration and a
styleguide containing the base styles of a UiB theme.

## How to use

To start working on the styleguide run `grunt dev` in the root folder
of your styleguide. This will start the browsersync and watch tasks in
grunt. If you are on a mac the style guide will open in your default
browser. The terminal will give you urls for connecting, both local and
external. This may be useful as you can connect any device to your local
copy of the style guide.

If you want to make changes to a style in the styleguide, you locate the
corresponding file in the source directory, edit the file, save and the changes
will be injected into all connected browsers. Changes to html patterns is made
to `.mustache` template files in `source/\_patterns`, changes to css is made in
the `.scss` files in `source/css` and additional graphics or javascripts is put
in `source/images` or `source/js`.

In `source/\_data` you may enter data in json files to be used in the
`.mustache` templates.

See Pattern Lab documentation for further information.

## Pattern Lab

Information about Pattern Lab can be found at:

- [Pattern Lab Website](http://patternlab.io/)
- [About Pattern Lab](http://patternlab.io/about.html)
- [Documentation](http://patternlab.io/docs/index.html)
- [Demo](http://demo.patternlab.io/)

## Grunt methods

*** TODO ***

