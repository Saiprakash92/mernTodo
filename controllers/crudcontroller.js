import { json } from 'express';
import Todo from '../Model/todo.js'
const addTodo=async (req,res)=>{
 
  try{
    const {title,completed}=req.body
  
    const todo=new Todo({
        title:title,
        completed:completed
      })
      await todo.save();
     
      res.json(todo) 
  }
  catch(err){
    console.log(err)
    res.send("internal error")
  }
}
const updateTodo= async(req,res)=>{
    try{
        const {id}=req.params
    const {title,completed}=req.body
   
     const todo=await Todo.findByIdAndUpdate(id,{title,completed},{new:true})
     res.send({todo})
    }
    catch(error){
        console.log(error)
    }
}
const getTodo= async(req,res)=>{
     try{
      const todos=await Todo.find({})
      
      res.json(todos)
     }catch(error){
        console.log(error)
        res.send(error)
     }
}
const deleteTodo=async (req,res)=>{
    const id=req.params.id
    
    try{
      await Todo.findByIdAndDelete(id)
     
      res.send({massage:"todo deleted"})
    }catch(err){
        console.log(err)
        res.send({error:"server error"})
    }
   
}
export {addTodo,updateTodo,getTodo,deleteTodo}