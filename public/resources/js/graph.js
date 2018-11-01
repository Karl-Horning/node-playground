const sample = [{
        language: "Rust",
        value: 78.9,
        color: "#000000"
    },
    {
        language: "Kotlin",
        value: 75.1,
        color: "#00a2ee"
    },
    {
        language: "Python",
        value: 68.0,
        color: "#fbcb39"
    },
    {
        language: "TypeScript",
        value: 67.0,
        color: "#007bc8"
    },
    {
        language: "Go",
        value: 65.6,
        color: "#65cedb"
    },
    {
        language: "Swift",
        value: 65.1,
        color: "#ff6e52"
    },
    {
        language: "JavaScript",
        value: 61.9,
        color: "#f9de3f"
    },
    {
        language: "C#",
        value: 60.4,
        color: "#5d2f8e"
    },
    {
        language: "F#",
        value: 59.6,
        color: "#008fc9"
    },
    {
        language: "Clojure",
        value: 59.6,
        color: "#507dca"
    }
];

const margin = 60;
const width = 1000 - 2 * margin;
const height = 600 - 2 * margin;

const svg = d3.select("svg");
const chart = svg
    .append("g")
    .attr("transform", `translate(${margin}, ${margin})`);

const yScale = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, 100]);

chart.append("g").call(d3.axisLeft(yScale));

const xScale = d3
    .scaleBand()
    .range([0, width])
    .domain(sample.map(s => s.language))
    .padding(0.2);

chart
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

chart
    .selectAll()
    .data(sample)
    .enter()
    .append("rect")
    .attr("x", s => xScale(s.language))
    .attr("y", s => yScale(s.value))
    .attr("height", s => height - yScale(s.value))
    .attr("width", xScale.bandwidth());

// Vertical grid lines
// chart.append('g')
//     .attr('class', 'grid')
//     .attr('transform', `translate(0, ${height})`)
//     .call(d3.axisBottom()
//         .scale(xScale)
//         .tickSize(-height, 0, 0)
//         .tickFormat(''));

// Horizontal grid lines
chart.append('g')
    .attr('class', 'grid')
    .call(d3.axisLeft()
        .scale(yScale)
        .tickSize(-width, 0, 0)
        .tickFormat(''));