// Converts date data into MM/DD/YYYY format
module.exports = {
    formatDate: (date) => {
        return date.toLocaleDateString();
    }
}