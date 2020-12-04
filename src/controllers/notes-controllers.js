const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
    res.send('Note add');
};
notesCtrl.createNewNote = (req, res) => {
    res.send('Create new note');
};
notesCtrl.renderNotes = (req, res) => {
    res.send('Render notes');
};
notesCtrl.renderEditForm = (req, res) => {
    res.send('render edit form');
};
notesCtrl.updateNote = (req, res) => {
    res.send('updates posts');
};
notesCtrl.deletenote = (req, res) => {
    res.send('updates posts');
};


module.exports = notesCtrl;