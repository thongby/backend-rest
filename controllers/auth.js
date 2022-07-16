const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const User = require('../models/User')

exports.register = async (req,res) => {
    try {
        // Check user
        const { username, password } = req.body;
        let user = await User.findOne({username})
        if(user){
            return res.status(400).send('มีผู้ใช้งานนี้อยู่แล้ว')
        }
        
        const salt = await bcrypt.genSalt(10);
        // user object
        user = new User({
            username,
            password,
        })
        
        // Encrypt password
        user.password = await bcrypt.hash(password,salt);
        await user.save();
        res.send('ลงทะเบียนสำเร็จ');
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}

exports.login = async (req,res) => {
    try {
        const { username, password } = req.body;
        let user = await User.findOneAndUpdate({username},{ new:true })
        if(user && user.enable){
            //Check password
            const isMatch = await bcrypt.compare(password, user.password)
            
            if (!isMatch){
                return res.status(400).send('รหัสผ่านไม่ถูกต้อง')
            }

            // Payload
            const payload = {
                user:{
                    username: user.username,
                    role: user.role
                }
            }
            //Genarate token
            jwt.sign(payload,
                'rducountry',
                {expiresIn: '7d'},
                (error,token) => {
                    if (error) throw error
                    res.json({token,payload})
                })
        }else{
            return res.status(400).send('ไม่พบผู้ใช้งาน')
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}

exports.listUser = async (req,res) => {
    try {
        res.send('List all users')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}


exports.editUser = async (req,res) => {
    try {
        res.send('Edit certain user')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}

exports.deleteUser = async (req,res) => {
    try {
        res.send('Delete certain user')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}

