import {createMenuTemplate} from './components/menu.js';
import {createFiltersTemplate} from './components/filters';
import {createBoardTemplate} from "./components/board";
import {createSortingTemplate} from './components/sorting';
import {createTaskAddOrEditTemplate} from './components/task-add-edit';
import {createTaskCardTemplate} from './components/card-task';
import {createLoadButtonTemplate} from './components/load-button';

import {generateFilters} from './mock/filters';
import {generateTasks} from './mock/task';

const REGULAR_CARD_START_INDEX = 1;
const TASK_QUANTITY = 22;
const SHOW_TASKS_ON_START = 8;
const SHOW_TASKS_BY_BUTTON = 8;

const mainElement = document.querySelector(`.main`);
const headerElement = mainElement.querySelector(`.main__control`);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const filters = generateFilters();
const tasks = generateTasks(TASK_QUANTITY);

render(headerElement, createMenuTemplate());
render(mainElement, createFiltersTemplate(filters));
render(mainElement, createBoardTemplate());

const boardElement = mainElement.querySelector(`.board`);
const boardSortingElement = boardElement.querySelector(`.board__filter-list`);
const boardContainerElement = boardElement.querySelector(`.board__tasks`);

render(boardSortingElement, createSortingTemplate());
render(boardContainerElement, createTaskAddOrEditTemplate(tasks[0]));

let showingTasksCount = SHOW_TASKS_ON_START;

const renderTasks = (tasksData, start, end) => {
  tasksData.slice(start, end)
    .forEach((it) => {
      render(boardContainerElement, createTaskCardTemplate(it));
    });
};

renderTasks(tasks, REGULAR_CARD_START_INDEX, showingTasksCount);

render(boardElement, createLoadButtonTemplate());

const loadMoreButton = boardElement.querySelector(`.load-more`);

const onLoadMoreButtonClick = () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount += SHOW_TASKS_BY_BUTTON;

  renderTasks(tasks, prevTasksCount, showingTasksCount);

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
};

loadMoreButton.addEventListener(`click`, onLoadMoreButtonClick);
