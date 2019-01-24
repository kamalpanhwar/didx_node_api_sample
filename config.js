var config = {};

config.didx = {};

config.didx.user_name = process.env.DIDX_USERNAME || '__youruserid__';
config.didx.password=  process.env.DIDX_PASSWORD || '--yourpassword__';

module.exports = config;
