const AWSMock = require('aws-sdk-mock');
const AWS = require('aws-sdk');
const imageProcessor = require('./imageProcessor');

// Mock S3 responses
AWSMock.mock('S3', 'listObjectsV2', (params, callback) => {
  const mockData = {
    Contents: [
      { Key: 'image1.jpg', Location: 's3://your-source-bucket/image1.jpg' },
      { Key: 'image2.jpg', Location: 's3://your-source-bucket/image2.jpg' },
      // Add more mock data if needed
    ]
  };
  callback(null, mockData);
});

AWSMock.mock('S3', 'getObject', (params, callback) => {
  // Mock image data (Replace with actual image buffer)
  const mockImageBuffer = Buffer.from('mock-image-data');
  callback(null, { Body: mockImageBuffer });
});

AWSMock.mock('S3', 'upload', (params, callback) => {
  // Mock successful upload response
  const mockUploadResponse = {
    Bucket: params.Bucket,
    Key: params.Key,
    Location: `s3://${params.Bucket}/${params.Key}`
  };
  callback(null, mockUploadResponse);
});

// Mock ExifReader response (Replace with actual EXIF data)
jest.mock('exifreader', () => ({
  load: jest.fn().mockReturnValue({ /* mocked EXIF data */ }),
}));

// Mock sharp's resize function (Replace with actual resize implementation if needed)
jest.mock('sharp', () => () => ({
  resize: () => ({
    toBuffer: () => Promise.resolve(Buffer.from('mock-resized-image-data'))
  })
}));

// Run the test
imageProcessor.downloadAndResizeImages()
  .then(() => console.log('Test completed successfully.'))
  .catch(err => console.error('Test failed:', err));

// Clean up AWS SDK mocks
afterAll(() => {
  AWSMock.restore('S3');
});
