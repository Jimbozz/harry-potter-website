# JS Frameworks - Module Assignment 3

# Brief

Create a new app using Create React App.

You can create an app inside the current folder using:

```
npx create-react-app .
```

> If your repo name has a capital letter in it make the folder name all lowercase before running the above command.

---

Level 1 is required.

Level 2 is optional.

You can use a UI library like React Bootstrap or style it all on your own. The styling is not important for this assignment but every frontend project must always be responsive.

You can use any Wordpress installation for this. DO NOT submit your Wordpress files and DO NOT combine your React frontend with your Wordpress files.

Use `.env.development` to set the API URL. The markers will change this to their own URL when marking.

The API calls in Level 1 do not require authorisation so you don't need to install or configure JWT support.

If you do Level 2 you will need to install and configure JWT support.

Consult <a href="https://developer.wordpress.org/rest-api/reference/" target="_blank">the docs</a> for the required endpoints.

---

## Level 1

Make an API call and list all the `pages` in your Wordpress installation. This should happen on the home route: "/"

Clicking on a `page` should take the user to a "page/{id}" route.

Retrieve the id from the URL path and make a GET request to fetch the specific page.

Render the `title`, `date` and `excerpt` properties.

Format the `date` in this format: 01 January 2021

The `excerpt` property contains HTML. Use `dangerouslySetInnerHTML` to render it.

---

## Level 2

The home route should contain a login form.

Once logged in, the user should be redirected to the "/admin" route that lists all the pages.

Clicking on a page should redirect to a "/admin/edit/{id}" route that populates a form.

The form should allow editing of the `title` property and the `status` property from a dropdown.

_Use the same JWT plugin as the lessons_ as this is what the markers will have installed.
