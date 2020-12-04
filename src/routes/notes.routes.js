const { Router } = require('express');
const router = Router();

const { renderNoteForm, createNewNote, renderNotes, renderEditForm, updateNote, deletenote } = require('../controllers/notes-controllers');

// New note
router.get('/notes/add', renderNoteForm);
router.post('/notes/add', createNewNote);

// Get all notes
router.get('/notes', renderNotes);

// Edit renderNotes
router.get('/notes/edit/:id', renderEditForm );

router.put('/notes/edit/:id', updateNote );

// Delete Notes
router.delete('/notes/delete/:id', deletenote );

module.exports = router;