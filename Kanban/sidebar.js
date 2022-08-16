import { boardStorageService } from "./boardDataStorage.service.js";
document.head.innerHTML += `<link type="text/css" rel="stylesheet" href="./sidebar.css"}>`;
export class sidebar {
    sidebar;
    boardStorage;
    constructor() {
        this.boardStorage = new boardStorageService()
        return this.createSidebarLayout();
    }

    createSidebarLayout() {
        this.sidebarLayout = document.createElement('section');
        this.sidebarLayout.classList.add('kanban_board_sidebar');
        setTimeout(() => {
            this.initSidebar();
        }, 500)

        return this.sidebarLayout;
    }

    initSidebar() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement('h5');
        element.classList.add('addBoard');
        element.setAttribute('data-tooltip', 'Add New Boards');
        element.innerHTML = `  
        <span>Boards List</span> 
        <a class="fa-solid fa-plus" data-action="addNewBoard">  </a>
        `
        fragment.appendChild(element);
        let boardListContainer = document.createElement('ul');
        boardListContainer .classList.add('boardsNameList')
        fragment.appendChild(boardListContainer );

        this.sidebar = fragment;
        this.sidebarLayout.appendChild(this.sidebar);
        this.sidebarLayout.onclick = this.click.bind(this);
        return this.sidebar;
    }
    click(event) {
        let action = event.target.dataset.action;
        if (!action) return;
        this[action](event);
    }


    addNewBoard(event) {
        let boardName = prompt('Please Enter Board Name', '')
        if (boardName) {
           let addedBoard =  this.boardStorage.addNewBoard(boardName);
           this.appendBoard(addedBoard);
        }
    }

    appendBoard(board){
        this.sidebarLayout.querySelector('.boardsNameList').appendChild(board.BoardHTML);
    }
    refreshBoardsNameList() {
        let boards = this.boardStorage.getBoardsList();
        console.log(boards);
    }




}
