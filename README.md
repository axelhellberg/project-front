# project-front
This is the front-end website for reading data from the following webservice: https://github.com/axelhellberg/project-webservice/

Data is managed with the following admin interface website: https://github.com/axelhellberg/project-adminsite/

The website uses JavaScript's Fetch API to consume the web service.

The website is styled using Sass.

During development, the processing of the files is automated using Gulp. The following processes are automated:
* File concatenation
* Sass compilation
* Minification of JS and CSS
* CSS prefixes
* Backwards compatibility with Babel
* Copying of processed files to designated /pub folder
