class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            name: 'Danie',
            descriprion: 'xx',
            avatar_url: 'img',
            html_url: 'redcire'
        });

        console.log(this.repositories);
    }
}

new App();