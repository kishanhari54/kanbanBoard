let objectCreated;
export class boardStorageService{

  board ={};
    constructor(){
        if(objectCreated) return objectCreated;    
        objectCreated = this;
        this.board ={};
    }

    addNewBoard(boardName){
        this.board[boardName] = new board(boardName);
        return this.board[boardName] ;
    }

    getBoardsList(){
        return Object.keys(this.board);
    }

    addNewStatus(boardName,Status){
        this.board[boardName].storeStatus(Status)
    }
}


class board{
    status = [];
    innerHTML = '';
    constructor(name){
        this.name = name;
        this.BoardHTML = name;
    }

    get BoardHTML(){
        return this.innerHTML;
    }
    set BoardHTML(name){
      let elem =   document.createElement('li');
      elem.classList.add('boardItem')
      elem.innerHTML = ` <a class="boardtitle" data-name=${this.name} data-action="boardChanged"> ${ this.name} </a>`
      this.innerHTML = elem;
      

    }
    storeStatus(Status){
        this.status.push(Status);
    }
}