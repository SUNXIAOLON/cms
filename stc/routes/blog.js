/*
 * @Author: your name
 * @Date: 2019-11-01 10:37:47
 * @LastEditTime: 2019-11-04 11:26:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /stc/routes/blog.js
 */
const router = require('koa-router')()
const BlogControll = require('../controllers/blog')

router.prefix('/api/v1')


router.get('/blog', BlogControll.getAllBlog)
router.post('/blog', BlogControll.addBlog)
router.delete('/blog/:id',BlogControll.deleteBlog)

module.exports = router
