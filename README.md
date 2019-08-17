# Frequency App

## About This Project

This project was created as part 3 of a code challenge for SalesLoft. The task was to build a simple web app that:

1. Show a list of People records that are available via the SalesLoft API using the API key in the email you received. Display each person’s name, email address, and job title.
2. Create a button that, when clicked, displays a frequency count of all the unique characters in all the email addresses of all the People you have access to, sorted by frequency count.

You can view this site live at the link here: [Frequency App ](https://frequency-app.netlify.com/)

## Languages Used

- JavaScript
- CSS(inline & Styled components)
- HTML(JSX)

## Libraries Used

- React

## Lessons learned & Challenges

- Lessons Learned

  - Before this project I already knew how to consume an API via using Fetch and Axios however I didn't anticipate the CORS issues that I would face grabbing an external API. I learned how to circumvent this in a way that would not open the App up to security issues.

* Challenges

I had a couple of challenges in this project that I needed to overcome.

1. CORS

   - My first thought was since this was a public facing API I could directly consume the API in my client. However, that proved to be a challenge because of CORS. What I did was create a server to fetch the data and feed it in to my client. This helped in two ways. First, it allowed me to overcome the cors issue since I could control it on the server. Second, it allowed me to completely hide the API, since hiding the API in an env variable on the REACT side can still be taken if someone knows where to look.

2. Displaying the Frequency of Characters in person emails

   - When looking at this challenge high up it can be daunting. What I did was start to break it down into pieces and then tackle each of those pieces.

     1. First I knew I needed to get the individual letters of all the emails, so I first joined all of the emails together and then I split them into charaters.
     2. Now that I had all of the characters I needed to figure out how to count them. I decided to put them in an object with key value pairs. This would allow me not only get the letter itself but also get the frequncy of the letters in an array value, on which I could grab the length of.
     3. Once I had the object with the letter as the key and the frequency as the value, I need to figure out how to sort them so they were in descending order. I did this by first turning the object into an array then I could use the Sort array method to get it in the order I wanted.

## Available Scripts and Project Use

In the API directory run:

### `npm start`

Runs the REST API on [http://localhost:5000](http://localhost:5000)

In the Client directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
