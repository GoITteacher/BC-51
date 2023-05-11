# Project JS

## Repo

- Create Project (add Readme and gitignore)
- Invite Collaborators (Settings->Collaborators->AddPeople)
- Create branch dev
- Change Settings
  1. Go to settings
  1. go to branches
  1. Add Rule
  1. For MAIN selected all items
  1. For DEV selected first 2 items
- Change Setting 2
  1. Settings->Branches->
  1. DefaultBranch -> SwitchToAnotherBranch
  1. Потрібно натиснути на дві стрілочки і змінити main на dev
- Change Setting 3
  1. Settings->Actions->General
  1. Scroll to the bottom of the page
  1. У "Workflow permissions" потрібно поставити галочку "Read and Write
     premission"
  1. також потрібно поставити галочку біля "Allow GitHub Actions to create
     ....."

## Project

- Склонувати свій репозиторій
- У своєму репозиторію перейти на гілку dev - `git checkout dev`
- Завантажити [Parcel](https://github.com/goitacademy/parcel-project-template)
- Розархірувати файли парселю до себе в проєкт
- Внести зміни до файлу package.json (змінити посилання)
- У папці partials створити під кожну секцію окремий HTML файл і підключити ці
  файли у головний файл index.hml
  (`<include src="./partials/example.html"></include>`)
- Підключити шрифти у головний файл index.hml
- У папці SASS сторити папку layout. У папці layout сторити під кожну секцію
  окремий scss файл
- у папці utils:
  1. створити файл \_variables.scss і оголосити там необхідні змінні
  1. сторити файли placeholders.scss and \_mixins.scss якщо вони потрібні
- у папці base:
  1. У файлі \_common.scss створити мінімальний сброс
  1. У файлі \_container.scss оголосити контейнер під усі екрани (мобілка,
     таблетка, десктоп)
- Підключити усі scss файли до файлу main.scss через дерективу @import

## [For ScrumMaster Trello](https://docs.google.com/document/d/1PvwscZhKhXM_ow0_RMJEWJ2xgtsEb65lLeGG3mEzFMs/edit)

- Потрібно додати колонки:

  - Materials
  - To do
  - In progress
  - Code review
  - Done

- Для розробників

  1. У колонці Materials необхідно розмістити картки з дод. інформацією для
     роботи над проєктом: макет, ТЗ, інструкція до проєкту даного рівня (також
     сюди можна винести різні корисні посилання на навчальні відео тощо)
  1. У колонці To do потрібно створити картки з описом задач
  1. У колонці In progress розробник перетягує картку із завданнями, яку
     збирається реалізовувати. ВАЖЛИВО! У розробника в колонці In progress може
     бути відкрита лише одна картка, із завданням, яке він виконує. Друга картка
     може з'явитися в цій колонці у тому випадку, коли тімлід повернув
     розробнику правки з попереднього завдання, у момент, коли той уже займався
     реалізацією наступного завдання.
  1. У колонці Code review знаходяться картки із завданнями, які розробник
     відправив тімліду на перевірку в пул-реквесті. ВАЖЛИВО! Тільки тімлід може
     перемістити картку в In progress із зауваженнями для доопрацювання, якщо є
     що допрацювати або Done, якщо завдання виконане без зауважень.

---

## Посилання

- [FIGMA](https://www.figma.com/file/JB3QBTgXBIHU24nMOtmVmK/Book?type=design&node-id=0-1&t=GKM7b7VtbiHVigzV-0)
- [TЗ](https://docs.google.com/spreadsheets/d/1p2P89GVo0HYGW2h2dXxrxxjMbpAB5T8RG-wy4oaEkNw/edit#gid=0)
