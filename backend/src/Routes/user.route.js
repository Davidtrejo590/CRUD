const { Router } = require('express');
const { getUser, getUsers, postUser, putUser, deleteUser } = require('../Controllers/user.controller');
const router = Router();


router.route('/')
    .get(getUsers)
    .post(postUser)

router.route('/:id')
    .get(getUser)
    .put(putUser)
    .delete(deleteUser)



module.exports = router;