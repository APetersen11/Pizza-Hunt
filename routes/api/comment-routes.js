const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply} = require('../../controllers/comment-controller');

//api/comments/<pizzaID>
router.route('/:pizzaID').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId')
.put(addReply)
.delete(removeComment);

//delete reply
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);



module.exports = router;