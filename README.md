#jQuery mini-editable plugin demo

## What it is
A minimal demonstration of a jQuery plugin in the making, that adds a .makeEditable() which
* adds contenteditable attribute to the selection
* optionally adds a global callback function for all editable elements.
* adds a custom _editableChanged_ event that can be subscribed to.

## How to run
1. clone git repository.
2. cd [clone directory]
3. npm install
4. node app.js
5. open a web browser and point at localhost:3000.
6. open the javascript console in your browser to see logged changes.

### Optional: instead of 4:
1. npm install -g supervisor
2. supervisor -e 'js|hjs' node app.js
3. see 5. above

Edit and save views/edit.hjs and/or javascript files and the browser will automatically be refreshed.
