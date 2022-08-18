import chalk from 'chalk';

const printError = (error) => {
  console.log(chalk.bgRed(' ERROR: ') + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen(' SUCCESS: ') + message);
};

const printHelp = () => {
  console.log(
    `${chalk.bgCyan(' HELP: ')}
    Without parameters - show weather
    -s [CITY] for set city
    -h for show help
    -t [API_KEY] for save API key
  `,
  );
};

const printWeather = (res) => {
  console.log(
    `${chalk.bgYellow(' WEATHER')} in ${res.name}
    ${res.weather[0].description}
    Temperature: ${res.main.temp}
    Wind speed: ${res.wind.speed}
  `,
  );
};

export { printError, printSuccess, printHelp, printWeather };
