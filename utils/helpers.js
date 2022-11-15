//Helper function to display date in MM/DD/YYYY format
module.exports = {

    format_date: () => {
      return new Date().toLocaleDateString();
    }
}