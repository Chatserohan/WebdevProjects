const userModel = require('../models/user.js')
const bcrypt = require('bcrypt')
class UserController {
    static home = (req,res)=>{
        res.render('index')
    }
    static login = (req,res)=>{
        res.render('login')
    }
    static resistration= (req,res)=>{
        res.render('resistration')
    }

    static createuserDoc = async(req,res)=>{
        
        try{
            const doc = new userModel({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
            })

            await doc.save()
            res.redirect('/login')
        }catch(error){
            console.log(error)
        }
    }

    static verifyLogin = async (req,res)=>{

        try{
            const {email, password} = req.body 

            const result = await userModel.findOne({email:email})

            if(result!=null){
                if(result.email == email && result.password == password){
                    res.send(`<h1>Dashboard --- ${result} </h1>`)
                }
                else{
                    res.send('<h1> Email or password is not valid </h1>')
                }
            } else{
                res.send('<h1> Email or password is not found</h1>')
            }
            
        }catch(error){
            console.log(error)
        }
    }
}


module.exports = UserController 
// Learn hashed password remaining 





// const userModel = require('../models/user.js')
// const bcrypt = require('bcrypt')
// class UserController {
//     static home = (req,res)=>{
//         res.render('index')
//     }
//     static login = (req,res)=>{
//         res.render('login')
//     }
//     static resistration= (req,res)=>{
//         res.render('resistration')
//     }

//     static createuserDoc = async(req,res)=>{
        
//         try{
//             const doc = new userModel({
//                 name:req.body.name,
//                 email:req.body.email,
//                 password:req.body.password,
//             })

//             await doc.save()
//             res.redirect('/login')
//         }catch(error){
//             console.log(error)
//         }
//     }

//     static verifyLogin = async (req,res)=>{

//         try{
//             const {email, password} = req.body 

//             const result = await userModel.findOne({email:email})

//             if(result!=null){
//                 const isMatch = await bcrypy.compare(password,result.password)
//                 if(result.email == email && isMatch){
//                     res.send(`<h1>Dashboard --- ${result} </h1>`)
//                 }
//                 else{
//                     res.send('<h1> Email or password is not valid </h1>')
//                 }
//             } else{
//                 res.send('<h1> Email or password is not found</h1>')
//             }
            
//         }catch(error){
//             console.log(error)
//         }
//     }
// }




