"use strict"

const AWS = require("aws-sdk")

const updateItem = async (event) => {

    const {itemStatus} = JSON.parse(event.body)
    const {id} = event.pathParameters

    const dynamoDB = new AWS.DynamoDB.DocumentClient()

    await dynamoDB.update({
        TableName: "ItemTableDesafio",
        Key: {id},
        UpdateExpression: 'set itemStatus = :itemStatus',
        ExpressionAttributeValues: {
            ":itemStatus": itemStatus
        },
        ReturnValues: "ALL_NEW"
    }).promise()

    return {
        starusCode: 200,
        body: JSON.stringify(
            { msg: "Item update successfully!!!"}
        )
    }
}

module.exports = {
    handler:updateItem
}