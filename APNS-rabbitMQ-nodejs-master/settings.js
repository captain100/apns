module.exports = {
   // db: 'mongodb://localhost:27017/wedate',
   // rabbitmq:'localhost',
    db: 'mongodb://114.215.135.230:27017/wedate',
    rabbitmq:'114.215.135.230',
    rabbitmqPort:5672,
    rabbitmqUser:'guest',
    rabbitmqPassword:'guest',
    queue: 'APNS',
    exchange: 'router',
    routingKey: 'A'
};
