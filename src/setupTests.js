import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });




// Throw errors when encountering propType issues
const originalConsoleError = console.error;

console.error = message => {
  if (/(Failed prop type)/.test(message)) {
    throw new Error(message);
  }

  originalConsoleError(message);
};