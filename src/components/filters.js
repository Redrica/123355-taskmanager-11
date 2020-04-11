
const createFilterMarkup = (filters, isChecked) => {
  const {name, count} = filters;
  return (
    `<input
          type="radio"
          id="filter__${name}"
          class="filter__input visually-hidden"
          name="filter"
          ${isChecked ? `checked` : ``}
        />
        <label for="filter__${name}" class="filter__label">
          ${name} <span class="filter__${name}-count">${count}</span></label
        >`
  );
};

const createFiltersTemplate = (filters) => {
  const filtersMarkup = filters.map((it, index) => createFilterMarkup(it, index === 0)).join(`\n`);
  return (
    `<section class="main__filter filter container">
        ${filtersMarkup}
      </section>`
  );
};

export {createFiltersTemplate};
