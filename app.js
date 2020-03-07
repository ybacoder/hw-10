// from data.js
const tableData = data;

const button = d3.select("#filter-btn")
const tbody = d3.select("#ufo-table-tbody")

const handler = function () {
    let datetime = d3.select("#datetime").property("value")
    let city = d3.select("#city").property("value")
    let state = d3.select("#state").property("value")
    let country = d3.select("#country").property("value")
    let shape = d3.select("#shape").property("value")

    let filterData = tableData

    if (datetime) {console.log(datetime); filterData = filterData.filter(e => e.datetime == datetime)}

    if (city) {console.log(city); filterData = filterData.filter(e => e.city == city)}

    if (state) {console.log(state); filterData = filterData.filter(e => e.state == state)}

    if (country) {console.log(country); filterData = filterData.filter(e => e.country == country)}

    if (shape) {console.log(shape); filterData = filterData.filter(e => e.shape == shape)}
    
    tbody.selectAll("*").remove()

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
}

handler()

button.on("click", handler)
