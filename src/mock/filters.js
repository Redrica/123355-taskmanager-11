import {filterNames} from '../consts';

const NUMBER_FOR_COUNT = 10;

const generateFilters = () => {
  return filterNames.map((it) => {
    return {
      name: it,
      count: Math.floor(Math.random() * NUMBER_FOR_COUNT)
    };
  });
};

export {generateFilters};
