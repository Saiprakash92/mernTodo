import {Router} from 'express'
const router=Router();
import { getTodo,deleteTodo,updateTodo,addTodo } from '../controllers/crudcontroller.js';
router.get('/getTodo',getTodo)
router.put('/updateTodo/:id',updateTodo)
router.delete('/deleteTodo/:id',deleteTodo)
router.post('/addTodo',addTodo)
export default router