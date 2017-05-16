(function loadMain(global, doc) {
    'use strict';
    var template = doc.querySelector('#addPictures'),
        parent = doc.querySelector('#insertPictures'),
        child;
    global.loadBehanceJSON = function (resp) {
        resp.projects.forEach(function (project) {
            child = template.content.cloneNode(true);
            child.querySelector('a').href = project.url;
            child.querySelector('img').src = project.covers.original;
            child.querySelector('cite').textContent = project.url;
            child.querySelector('figcaption').textContent = project.name;
            parent.appendChild(child);
        });
    };
    global.loadGithubJSON = function (resp) {
        resp.data.forEach(function (project) {
            child = template.content.cloneNode(true);
            child.querySelector('a').href = project.clone_url;
            child.querySelector('img').style.display = 'none';
            child.querySelector('cite').textContent = project.clone_url;
            child.querySelector('figcaption').textContent = project.description;
            parent.appendChild(child);
        });
    }

}(window, document));
