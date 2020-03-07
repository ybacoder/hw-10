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

    if (datetime) {
        console.log(datetime)
    }

    if (city) {
        console.log(city)
    }

    if (state) {
        console.log(state)
    }

    if (country) {
        console.log(country)
    }

    if (shape) {
        console.log(shape)
    }
    
    let filterData = tableData

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
