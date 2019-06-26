# HTTP Exercises

## Exercise 1

[Example](https://github.com/alchemycodelab/fsjs-be-demos/tree/master/02_node/02_http/exercise-1)

Respond to incoming requests with a status code of 200, content type `text/plain`,
and the word "hi".

## Exercise 2

[Example](https://github.com/alchemycodelab/fsjs-be-demos/tree/master/02_node/02_http/exercise-2)

Respond to incoming requests with a status code of 200 and content type `text/html`.
Send HTML with an h1 header and an unordered list.

Add nodemon as a devDependency `npm i -D nodemon`. Create `start` and `start:watch`
scripts. `start` should start your application with `node`. `start:watch` should start
your application with `nodemon`

## Exercise 3

[Example](https://github.com/alchemycodelab/fsjs-be-demos/tree/master/02_node/02_http/exercise-3)

Respond to incoming requests with a status code of 200 and content type `text/html`.

If the path is:

* `/` respond with an HTML with an h1 that says welcome.
  * BONUS: include links to your other pages
* `/red` respond with HTML with an h1 that says red (BONUS make the text red)
* `/green` respond with HTML with an h1 that says green (BONUS make the text green)
* `/blue` respond with HTML with an h1 that says blue (BONUS make the text blue)
* otherwise respond with an h1 that says Not Found and a status code of 404

Add the `test`, `test:watch`, `start` and `start:watch` scripts

**HINT** use [parse](https://nodejs.org/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost) from the url module.
