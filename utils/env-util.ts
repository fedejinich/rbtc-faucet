import Web3 from 'web3';
import prodConfig from '../prod-config.json';
import devConfig from '../dev-config.json';

//This section is for environment variables (I'll only mock variables when I cant control them)

const productionDevelopmentTest = (prod: any, dev: any, test: any): any => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return prod;
    case 'development':
      return dev;
    case 'test':
      return test;
    default:
      throw 'Undefined environment';
  }
};

var currentProvider: any;
export function provider(): any {
  if (!currentProvider) {
    currentProvider = productionDevelopmentTest(
      new Web3.providers.HttpProvider(prodConfig.RSK_NODE),
      new Web3.providers.HttpProvider(devConfig.RSK_NODE),
      null
    );
  }
  return currentProvider;
}

export function faucetAddress(): string {
  return productionDevelopmentTest(
    prodConfig.FAUCET_ADDRESS,
    devConfig.FAUCET_ADDRESS,
    '0xF7D1dF4f96A812598d4E398f5539c4f98DA958ab'
  );
}

export function faucetPrivateKey(): string {
  return productionDevelopmentTest(
    prodConfig.FAUCET_PRIVATE_KEY,
    devConfig.FAUCET_PRIVATE_KEY,
    'c3d40c98585e2c61add9c6a94b66cd7f5c5577e45d900c6c0e3139df1310292f'
  );
}

export function apiUrl(): string {
  return productionDevelopmentTest(prodConfig.API_URL, devConfig.API_URL, devConfig.API_URL);
}

export function newCaptchaUrl(): string {
  return productionDevelopmentTest(prodConfig.NEW_CAPTCHA_URL, devConfig.NEW_CAPTCHA_URL, devConfig.NEW_CAPTCHA_URL);
}

export function solveCaptchaUrl(): string {
  return productionDevelopmentTest(
    prodConfig.SOLVE_CAPTCHA_URL,
    devConfig.SOLVE_CAPTCHA_URL,
    devConfig.SOLVE_CAPTCHA_URL
  );
}

export function captchaApiUrl(): string {
  return productionDevelopmentTest(prodConfig.CAPTCHA_API_URL, devConfig.CAPTCHA_API_URL, devConfig.CAPTCHA_API_URL);
}

export function gasPrice(): number {
  return productionDevelopmentTest(prodConfig.GAS_PRICE, devConfig.GAS_PRICE, devConfig.GAS_PRICE);
}

export function gasLimit(): number {
  return productionDevelopmentTest(prodConfig.GAS_LIMIT, devConfig.GAS_LIMIT, devConfig.GAS_LIMIT);
}

export function valueToDispense(): number {
  return productionDevelopmentTest(
    prodConfig.VALUE_TO_DISPENSE,
    devConfig.VALUE_TO_DISPENSE,
    devConfig.VALUE_TO_DISPENSE
  );
}
