// from data.js
const tableData = data;

const tbody = d3.select("#ufo-table-tbody")

filterData = tableData

filterData.forEach(e => {
    let row = tbody.append("tr")
    row.append("td").text(e.datetime)
    row.append("td").text(e.city.charAt(0).toUpperCase() + e.city.substring(1))
    row.append("td").text(e.state.toUpperCase())
    row.append("td").text(e.country.toUpperCase())
    row.append("td").text(e.shape.charAt(0).toUpperCase() + e.shape.substring(1))
    row.append("td").text(e.durationMinutes)
    row.append("td").text(e.comments)
})


