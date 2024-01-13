const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');


// Api GET route for retreieving all notes
notes.get('/', (req, res) =>{
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// Api POST route to post a new tip
notes.post('/', (req, res) =>{
    const {title, text} =  req.body;
    console.log(req.body)

    if(req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note Added')
    }else {
        res.json('Error in adding note please try again')
    }
});

module.exports = notes


