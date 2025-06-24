export default () => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: process.env.CDN_BASE_URL as string,
        s3Options: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
          region: process.env.AWS_REGION as string,
          params: {
            Bucket: process.env.AWS_BUCKET_NAME as string,
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
