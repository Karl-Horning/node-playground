const data = [{
        country: 'China',
        population: 1415045928
    },
    {
        country: 'India',
        population: 1354051854
    },
    {
        country: 'United States',
        population: 326766748
    },
    {
        country: 'Indonesia',
        population: 266794980
    },
    {
        country: 'Brazil',
        population: 210867954
    },
    {
        country: 'Pakistan',
        population: 200813818
    },
    {
        country: 'Nigeria',
        population: 195875237
    },
    {
        country: 'Bangladesh',
        population: 166368149
    },
    {
        country: 'Russia',
        population: 143964709
    },
    {
        country: 'Mexico',
        population: 130759074
    }
]


// https://blog.risingstack.com/d3-js-tutorial-bar-charts-with-javascript/
// https://insights.stackoverflow.com/survey/2018/#technology-most-loved-dreaded-and-wanted-languages
const sample = [{
        language: 'Rust',
        value: 78.9,
        color: '#000000'
    },
    {
        language: 'Kotlin',
        value: 75.1,
        color: '#00a2ee'
    },
    {
        language: 'Python',
        value: 68.0,
        color: '#fbcb39'
    },
    {
        language: 'TypeScript',
        value: 67.0,
        color: '#007bc8'
    },
    {
        language: 'Go',
        value: 65.6,
        color: '#65cedb'
    },
    {
        language: 'Swift',
        value: 65.1,
        color: '#ff6e52'
    },
    {
        language: 'JavaScript',
        value: 61.9,
        color: '#f9de3f'
    },
    {
        language: 'C#',
        value: 60.4,
        color: '#5d2f8e'
    },
    {
        language: 'F#',
        value: 59.6,
        color: '#008fc9'
    },
    {
        language: 'Clojure',
        value: 59.6,
        color: '#507dca'
    }
];

const svg = d3.select('svg');
const svgContainer = d3.select('#container');

const margin = 80;
const width = 1000 - 2 * margin;
const height = 600 - 2 * margin;

const max = d3.max(d3.values(data));

const chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);

const xScale = d3.scaleBand()
    .range([0, width])
    .domain(data.map((s) => s.country))
    .padding(0.4)

const yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, max.population * 1.2]);

// vertical grid lines
// const makeXLines = () => d3.axisBottom()
//   .scale(xScale)

const makeYLines = () => d3.axisLeft()
    .scale(yScale)

chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

chart.append('g')
    .call(d3.axisLeft(yScale));

// vertical grid lines
// chart.append('g')
//   .attr('class', 'grid')
//   .attr('transform', `translate(0, ${height})`)
//   .call(makeXLines()
//     .tickSize(-height, 0, 0)
//     .tickFormat('')
//   )

chart.append('g')
    .attr('class', 'grid')
    .call(makeYLines()
        .tickSize(-width, 0, 0)
        .tickFormat('')
    )

const barGroups = chart.selectAll()
    .data(data)
    .enter()
    .append('g')

barGroups
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (g) => xScale(g.country))
    .attr('y', (g) => yScale(g.population))
    .attr('height', (g) => height - yScale(g.population))
    .attr('width', xScale.bandwidth())
    .on('mouseenter', function (actual, i) {
        d3.selectAll('.population')
            .attr('opacity', 0)

        d3.select(this)
            .transition()
            .duration(300)
            .attr('opacity', 0.6)
            .attr('x', (a) => xScale(a.country) - 5)
            .attr('width', xScale.bandwidth() + 10)

        const y = yScale(actual.population)

        line = chart.append('line')
            .attr('id', 'limit')
            .attr('x1', 0)
            .attr('y1', y)
            .attr('x2', width)
            .attr('y2', y)

        barGroups.append('text')
            .attr('class', 'divergence')
            .attr('x', (a) => xScale(a.country) + xScale.bandwidth() / 2)
            .attr('y', (a) => yScale(a.population) + 30)
            .attr('fill', 'white')
            .attr('text-anchor', 'middle')
            .text((a, idx) => {
                const divergence = (a.population - actual.population).toFixed(1)

                let text = ''
                if (divergence > 0) text += '+'
                text += `${divergence}%`

                return idx !== i ? text : '';
            })

    })
    .on('mouseleave', function () {
        d3.selectAll('.population')
            .attr('opacity', 1)

        d3.select(this)
            .transition()
            .duration(300)
            .attr('opacity', 1)
            .attr('x', (a) => xScale(a.country))
            .attr('width', xScale.bandwidth())

        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
    })

barGroups
    .append('text')
    .attr('class', 'population')
    .attr('x', (a) => xScale(a.country) + xScale.bandwidth() / 2)
    .attr('y', (a) => yScale(a.population) + 30)
    .attr('text-anchor', 'middle')
    .text((a) => `${a.population}`)

svg
    .append('text')
    .attr('class', 'label')
    .attr('x', -(height / 2) - margin)
    .attr('y', margin / 2.4)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Love meter (%)')

svg.append('text')
    .attr('class', 'label')
    .attr('x', width / 2 + margin)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'middle')
    .text('Countries')

svg.append('text')
    .attr('class', 'title')
    .attr('x', width / 2 + margin)
    .attr('y', 40)
    .attr('text-anchor', 'middle')
    .text('Most populated countries in 2018')

svg.append('text')
    .attr('class', 'source')
    .attr('x', width - margin / 2)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'start')
    .text('Source: worldpopulationreview.com/countries/, 2018')

console.log(max.population);