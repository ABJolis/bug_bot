# Bugbot

Get a joke, squash some bugs! Bugbot is a chatbot that tells jokes and generates fake bugs. Have fun!

## Getting started

1. Clone this repo and load the directory:
```
git clone https://github.com/ABJolis/bug_bot.git
```

2. Change to the correct working directory:
```
cd bugbot
```

3. From inside the project directory, load the required dependencies:
```
npm install
```

4. Start the server:
```
nodemon
```

5. Open a browser and navigate to [localhost:3000](http://localhost:3000/)

## Description

Bugbot pulls from [JokeAPI](https://jokeapi.dev/) to reply to any message with a programming-related joke. The catch? Every time the user hits 'send,' bugs appear on the screen! (Thankfully, these bugs can be easily squashed, with the 'squash bugs' button.) This app was built to amuse myself while honing my skills with jquery and REST API integration. I hope it gives you a smile!

![Bugbot](<https://github.com/ABJolis/bug_bot/raw/master/BuggingOut.png>)


## Tech Stack

* Frontend:
  - [jquery](https://jquery.com/)
  - [CSS art](https://css-tricks.com/very-extremely-practical-css-art/)
  - [JokeAPI](https://jokeapi.dev/)

* Backend:
  - [Node](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)


## Roadmap

Bugbot is a learning project, so I doubt I'll ever be done with it! My next steps for it are to improve the styling of the 'squash bugs' button, to build out the backend database functionality, and to add tests using Jest.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)