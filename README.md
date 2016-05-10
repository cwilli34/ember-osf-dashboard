# Ember OSF Dashboard

This project is for creating a Ember Dashboard on top of [OSF](http://osf.io).  Semantic-UI has been added to the dependencies and installs with bower.  

## Prerequisites

You will need the following things properly installed on your computer.

*   [Git](http://git-scm.com/)
*   [Node.js](http://nodejs.org/) (with NPM)
*   [Bower](http://bower.io/)
*   [Ember CLI](http://ember-cli.com/)
*   [PhantomJS](http://phantomjs.org/)
*   [ember-osf](http://github.com/centerforopenscience/ember-osf.git)

## Installation

*   `git clone <repository-url>` this repository
*   `git clone https://github.com/centerforopenscience/ember-osf.git`
*   `cd` into the new app directory
*   `npm install`
*   `bower install`
*   `cd` into ember-osf directory
*   `npm install`
*   `bower install`
*   Comment out all instances of "Bootstrap" in the ember-cli-build.js file that is in ember-osf.  Remove the dependency of "Bootstrap" in the bower.json file in ember-osf.
*   Commit your changes to the ember-osf app.  Now when you pull changes down to ember-osf, your changes to these two files will merge.

## Running / Development

*   `ember server`
*   Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

*   `ember test`
*   `ember test --server`

### Building

*   `ember build` (development)
*   `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

*   [ember.js](http://emberjs.com/)
*   [ember-cli](http://ember-cli.com/)

Development Browser Extensions:

*   [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
*   [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
