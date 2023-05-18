import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);
const tableName = "DIOItems";

export const handler = async (event) => {
  let responseBody = "";
  let statusCode = 0;

  const headers = {
    "Content-Type": "application/json",
  };

  try {
    await dynamo.send(
      new PutCommand({
        TableName: tableName,
        Item: {
          id: event.id,
          price: event.price,
        },
      })
    );

    statusCode = 200;
    responseBody = JSON.stringify('Item inserido com sucesso!');
  } catch (err) {
    statusCode = 400;
    responseBody = JSON.stringify('Save error!');
  }

  const response = {
    statusCode: statusCode,
    body: responseBody,
    event: event
  };

  return { response, headers };
};
