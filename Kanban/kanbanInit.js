let classCreated = 0;
import {sidebar as initSidebar} from './sidebar.js';
import { boardStorageService } from "./boardDataStorage.service.js";
import { mainBoardContainer } from "./boardContent.js";

export class initializer {
    board;
    header;
    headerLayout;
    sidebarLayout;
    sidebar;
    mainContainer;
    mainContainerLayout
    constructor() {
        if (classCreated == 1) {
            console.log('Already a Class has been created');
            return;
        }
        
        new boardStorageService();
    }

    createBoard() {
        this.board = document.createElement('section');
        this.board.classList.add('kanban_board');
        this.board.appendChild(this.createHeaderLayout());
        this.board.appendChild(this.createSideBarLayout());
        this.board.appendChild(this.createMainContainerAreaLayout());
        return this.board;
    }
    createHeaderLayout() {
        this.headerLayout = document.createElement('section');
        this.headerLayout.classList.add('kanban_board_header');
        return this.headerLayout;
    }

    createSideBarLayout() {
        this.sidebarLayout = new initSidebar();
        return this.sidebarLayout;
    }
    createMainContainerAreaLayout() {
        this.mainContainerLayout = new mainBoardContainer();
        return this.mainContainerLayout;
    }
}