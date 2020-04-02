import {createMenuTemplate} from './components/menu.js';
import {createFiltersTemplate} from './components/filters';
import {createBoardTemplate} from "./components/board";
import {createSortingTemplate} from './components/sorting';
import {createTaskAddOrEditTemplate} from './components/task-add-edit';
import {createTaskCardTemplate} from './components/card-task';
import {createLoadButtonTemplate} from './components/load-button';

const TASK_QUANTITY = 3;
const mainElement = document.querySelector(`.main`);
const headerElement = mainElement.querySelector(`.main__control`);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

render(headerElement, createMenuTemplate());
render(mainElement, createFiltersTemplate());
render(mainElement, createBoardTemplate());

const boardElement = mainElement.querySelector(`.board`);
const boardSortingElement = boardElement.querySelector(`.board__filter-list`);
const boardContainerElement = boardElement.querySelector(`.board__tasks`);

render(boardSortingElement, createSortingTemplate());
render(boardContainerElement, createTaskAddOrEditTemplate());

for (let i = 0; i < TASK_QUANTITY; i++) {
  render(boardContainerElement, createTaskCardTemplate());
}

render(boardElement, createLoadButtonTemplate());
