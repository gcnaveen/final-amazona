import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import { isAdmin, isAuth } from '../utils.js';

const upload = multer();

const uploadRouter = express.Router();

uploadRouter.post(
  '/',
  isAuth,
  isAdmin,
  upload.array('file'),
  async (req, res) => {


    
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        console.log("req inside fn",req)
        streamifier.createReadStream(req.buffer).pipe(stream);
      });
    };

    var imageUrlList = [];
    
    for (var i = 0; i < req.files.length; i++) {
       var localFile = req.files[i];
      const result = await streamUpload(localFile);
      imageUrlList.push(result.url);
    }
    res.send(imageUrlList);
  }
);
export default uploadRouter;
