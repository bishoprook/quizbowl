import randomId from '../util/randomId.js';
import storeBuilder from './storeBuilder.js';
import restful from './restful.js';

const context = { idGenerator: randomId };
const store = storeBuilder(context);

restful(store);