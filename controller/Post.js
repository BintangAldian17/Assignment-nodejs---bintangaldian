import { db } from "../config/Database.js"


export const getPost = (req, res) => {
    const q = "SELECT * FROM posts"
    db.query(q, (err, result) => {
        if (err) {
            return res.status(400).json(err)
        } else {
            return res.status(200).json(result)
        }
    })
}

export const addPost = (req, res) => {

    const { username, desc } = req.body
    const q = "INSERT INTO posts(`username`,`desc`) VALUE (?)"
    const value = [
        username,
        desc
    ]
    db.query(q, [value], (err, result) => {
        if (err) {
            return res.status(400).json(err)
        } else {
            res.status(200).json({ msg: "Post created succsessfuly" })
        }
    })
}

export const deletePost = (req, res) => {
    const q = "DELETE FROM posts WHERE `id`=?";
    db.query(q, [req.params.id], (err, result) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).json({ msg: "Post hasbeen deleted" })
        }
    })
}



