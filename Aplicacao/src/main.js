import api from './api';

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('input[name=repository]');
        this.inputEl = document.querySelector('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.nodeValue;

        if (repoInput.length === 0)
            return;

        try {
            const response = await api.get(`/repos/${repoInput}`);


            const { name, descriprion, html_url, owner: { avatar_url } };
    
            this.repositories.push({
                name,
                descriprion,
                avatar_url,
                html_url
            });
    
            this.render();
        } catch (error) {
            alert(error);
        }
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriprionEl = document.createElement('p');
            descriprionEl.appendChild(document.createTextNode(repo.descriprion));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriprionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();