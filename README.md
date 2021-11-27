# telegram-bot-serverless-typescript-template

A template to spin up serverless Telegram bots with TypeScript

## About

This is a template repository which can be used to quickly set up the boilerplate for Telegram bot projects
that are to be made with Node.js and run on AWS Lambda. The template uses TypeScript by default with the necessary dependencies and plugin preinstalled.

### Things included in this template

* TypeScript for creating a typesafe project
* Jest for unit testing and code coverage
* `npm` scripts for testing and deploying
* A simple, working Telegram bot as a skeleton to get started

### Serverless Framework

The template uses the [Serverless](https://serverless.com) for deployments. Serverless manages all the configuration on AWS and can deploy with a single command.

We use AWS Lambda in this template, but you can modify the `serverless.yml` file to configure it to work with other providers such as Azure or Google as well. [More info](https://www.serverless.com/framework/docs/providers)

### AWS Lambda

[AWS Lambda]() is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services.
A key feature of Lambda is that it is free for the first million calls every month, meaning that if the bot doesn't expect a lot of traffic, the bot can likely be hosted for free.

### Telegraf

[Telegraf](https://github.com/telegraf/telegraf) is a popular Node.js framework for interacting with the Telegrams Bots API. It provides an easy-to-use JavaScript (TypeScript) inerface over the underlying HTTP API.

## How to use

### Setting up the repository

1. Set up a new Git repository using this repository as a template. Click the `Use this template` button above or follow the [official GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) for more details.
2. Clone the newly created repository to your machine.
3. Make the desired changes.

### Setting up AWS IAM User

The Serverless framework requires a pair of AWS ACCESS KEY ID and an AWS SECREY ACCESS KEY which can be gotten after creating a new IAM user on AWS.

Follow the [official guide from Serverless](https://www.serverless.com/framework/docs/providers/aws/guide/credentials) for this.

Remember, only give permissions to the role that it will truly require. Also remember to delete the IAM user if/when you remove the bot from AWS.

## Deploy

### Prerequisites
- AWS Access Key ID
- AWS Secret Access Key
- Telegram Bot Token

For the AWS credentials, follow the instructions above. For creating a Telegram Bot Token, follow [Telegram's official documentation](https://core.telegram.org/bots#3-how-do-i-create-a-bot).

### Steps
1. Run `npm i` to install all the dependencies
2. Add the prerequisites to environment variables. Examples can be found in the `.env.example` file.
3. Run `npm run deploy`.
4. Once the serverless framework completes its job, you'll see an AWS API Gateway webhook endpoint in the output, copy the URL for the next step.
5. Tell Telegram to send updates to the API Gateway endpoint
    ```
    curl --request POST --url https://api.telegram.org/bot<TOKEN>/setWebhook --header 'content-type: application/json' --data '{"url": "<URL>"}'
    ```
    Replace `<TOKEN>` with the Telegram Bot Token string and `<URL>` with the API Gateway URL from the previous step.

## Reading Material

1. [Serverless/AWS Lambda Introduction](https://www.serverless.com/aws-lambda)
2. [serverless.yml documentation](https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml)
3. [Telegram Bots API Documentation](https://core.telegram.org/bots/api)