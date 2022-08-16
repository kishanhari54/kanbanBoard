
let created = false;
export class mainBoardContainer{
    constructor(){
        if(created) return created;
        created = this;
       return this.createMainContentLayout();
    }


    createMainContentLayout() {
        this.mainContainerLayout = document.createElement('section');
        this.mainContainerLayout.classList.add('kanban_board_mainContent');
        setTimeout(() => {
            this.initMainContent();
        }, 500)

        return this.mainContainerLayout;
    }
    initMainContent() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement('section');
        element.classList.add('boardFilter');
        element.setAttribute('data-tooltip', 'Filter Board Data');
        element.innerHTML = `  
        <span>Filter Board Data : </span> 
       <select name="boardNames" id="boardNames">  
       <option value=""> --</option>
       <option value="Test"> Test</option>
       </select>
        `
        fragment.appendChild(element);
        fragment.appendChild( this.createBoardSection());
        this.mainContainerLayout.appendChild(fragment);
        return fragment;
    }

    createBoardSection(){
        let element = document.createElement('section');
        element.classList.add('boardDetails');
        document.body.addEventListener('boardChanged', (e)=> { 
            console.log(e);
        })
        return element;
    }
}