//  https://developers.getbase.com/docs/rest/reference/stages

module.exports = function(data) {
    return this.crm.find('stages', data);
};