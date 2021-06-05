const PageHead = require("../components/page-head");

module.exports = (data) => `${PageHead()}
${data.content}`;
