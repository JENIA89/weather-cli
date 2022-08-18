#!/usr/bin/env node
import getArgs from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('Token is required');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Token saved');
  } catch (error) {
    printError(error);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError('City is required');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess('City saved');
  } catch (error) {
    printError(error);
  }
};

const getForcast = async () => {
  try {
    const weather = await getWeather('minsk');
  } catch (e) {
    if (e?.response?.status == 404) {
      printError('Wrong city');
    } else if (e?.response?.status == 404) {
      printError('Wrong token');
    } else {
      printError(e?.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }
  if (args.s) {
    saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getForcast();
};

initCLI();
