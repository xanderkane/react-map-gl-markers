// This configuration file is a single place to provide any values to set up the app

export const IDENTITY_POOL_ID =
  "us-east-1:5ac5c6cc-6df2-4120-b587-45ef778f878c"; // REQUIRED - Amazon Cognito Identity Pool ID

export const REGION = "us-east-1"; // REQUIRED - Amazon Cognito Region

export const MAP = {
  NAME: "demo.map", // REQUIRED - Amazon Location Service Map resource name
  STYLE: "Default style", // "VectorEsriStreets", // REQUIRED - String representing the style of map resource
};
