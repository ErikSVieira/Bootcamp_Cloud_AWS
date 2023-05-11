"use strict";

const AWS = require("aws-sdk");

const fetchItem = async (event) => {
    
    const dynamonDB = new AWS.DynamoDB.DocumentClient();

    const {id} = event.pathParameters

    let item;

    try {

        const result = await dynamonDB.get({
            TableName: "ItemTableDesafio",
            Key: {id}
        }).promise();

        item = result.Item

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(item),
    };
};

module.exports = {
    handler: fetchItem,
};