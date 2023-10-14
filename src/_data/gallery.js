const AWS = require('aws-sdk');
const fs = require('fs');
const sharp = require('sharp');
const ExifReader = require('exifreader');

AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'YOUR_REGION'
});

const s3 = new AWS.S3();

const sourceBucket = 'your-source-bucket';
const destinationBucket = 'your-destination-bucket';
const resizedFolder = 'resized_images';
async function downloadAndResizeImages(options = {}) {
  const {
    sourceBucket: customSourceBucket = sourceBucket,
    destinationBucket: customDestinationBucket = destinationBucket,
    resizedFolder: customResizedFolder = resizedFolder,
    targetSize: customTargetSize = 1 * 1024 * 1024,
  } = options;

  try {
    const imageList = await listImagesInBucket(customSourceBucket);
    const resizedImagesInfo = [];

    for (const image of imageList) {
      const imageBuffer = await downloadImage(customSourceBucket, image.Key);
      const exifData = extractExifData(imageBuffer);

      // Resize image
      const resizedImageBuffer = await resizeImage(imageBuffer, customTargetSize);

      // Save resized image to the destination bucket
      const resizedImageKey = `${customResizedFolder}/${image.Key}`;
      await saveResizedImage(customDestinationBucket, resizedImageKey, resizedImageBuffer);

      resizedImagesInfo.push({
        originalImage: image.Key,
        exifData,
        originalImageLocation: image.Location,
        resizedImageLocation: resizedImageKey
      });
    }

    // Output JSON array with image information
    console.log(JSON.stringify(resizedImagesInfo, null, 2));
  } catch (err) {
    console.error('Error:', err);
  }
}

async function listImagesInBucket() {
  const params = {
    Bucket: sourceBucket
  };

  return new Promise((resolve, reject) => {
    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.Contents);
      }
    });
  });
}

async function downloadImage(key) {
  const params = {
    Bucket: sourceBucket,
    Key: key
  };

  return new Promise((resolve, reject) => {
    s3.getObject(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.Body);
      }
    });
  });
}

function extractExifData(imageBuffer) {
  const tags = ExifReader.load(imageBuffer);
  return tags;
}

async function resizeImage(imageBuffer, targetSize) {
  return await sharp(imageBuffer)
    .resize({ fit: 'inside', withoutEnlargement: true })
    .toBuffer();
}

async function saveResizedImage(key, imageBuffer) {
  const params = {
    Bucket: destinationBucket,
    Key: key,
    Body: imageBuffer
  };

  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = {
  downloadAndResizeImages
};
