// 01 Data Visualization with D3: Add Document Elements with D3
// d3
//     .select('body')
//     .append('h1')
//     .text('Learning D3');


// 02 Data Visualization with D3: Select a Group of Elements with D3
// d3
//     .selectAll('li')
//     .text('list item');


// 03 Data Visualization with D3: Work with Data in D3
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// d3
//     .select('body')
//     .selectAll('h2')
//     .data(dataset)
//     .enter()
//     .append('h2')
//     .text('New Title');


// 04 Data Visualization with D3: Work with Dynamic Data in D3
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// d3
//     .select('body')
//     .selectAll('h2')
//     .data(dataset)
//     .enter()
//     .append('h2')
//     .text(d => `${d} USD`);


// 05 Data Visualization with D3: Add Inline Styling to Elements
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// d3
//     .select('body')
//     .selectAll('h2')
//     .data(dataset)
//     .enter()
//     .append('h2')
//     .text(d => `${d} USD`)
//     .style('font-family', 'verdana');


// 06 Data Visualization with D3: Change Styles Based on Data
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// d3
//     .select('body')
//     .selectAll('h2')
//     .data(dataset)
//     .enter()
//     .append('h2')
//     .text(d => `${d} USD`)
//     .style('color', d => {
//         return d < 20 ? 'red' : 'green';
//     });


// 07 Data Visualization with D3: Add Classes with D3
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// d3
//     .select('body')
//     .selectAll('div')
//     .data(dataset)
//     .enter()
//     .append('div')
//     .attr('class', 'fbar');


// 08 Data Visualization with D3: Update the Height of an Element Dynamically
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// d3
//     .select('body')
//     .selectAll('div')
//     .data(dataset)
//     .enter()
//     .append('div')
//     .attr('class', 'fbar')
//     .style('height', d => {
//         return `${d}px`;
//     });


// 09 Data Visualization with D3: Change the Presentation of a Bar Chart
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// d3
//     .select('body')
//     .selectAll('div')
//     .data(dataset)
//     .enter()
//     .append('div')
//     .attr('class', 'fbar')
//     .style('height', d => {
//         return `${d * 10}px`;
//     });


// 10 Data Visualization with D3: Learn About SVG in D3
// Width and height attributes do not have units. This is the building block 
// of scaling - the element will always have a 5:1 width to height ratio, no 
// matter what the zoom level is.
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
// const w = 500;
// const h = 100;

// const svg = d3
//     .select('body')
//     .append('svg')
//     .attr('width', w)
//     .attr('height', h);


// 11 Data Visualization with D3: Display Shapes with SVG
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
// const w = 500;
// const h = 100;

// const svg = d3
//     .select('body')
//     .append('svg')
//     .attr('width', w)
//     .attr('height', h)
//     .append('rect')
//     .attr('width', 25)
//     .attr('height', 100)
//     .attr('x', 0)
//     .attr('y', 0);


// 12 Data Visualization with D3: Create a Bar for Each Data Point in the Set
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// const w = 500;
// const h = 100;

// const svg = d3
//     .select('body')
//     .append('svg')
//     .attr('width', w)
//     .attr('height', h);

// svg
//     .selectAll('rect')
//     .data(dataset)
//     .enter()
//     .append('rect');

// d3
//     .select('body')
//     .selectAll('div')
//     .data(dataset)
//     .enter()
//     .append('div')
//     .attr('x', 0)
//     .attr('y', 0)
//     .attr('width', 25)
//     .attr('height', 100);


// 13 Data Visualization with D3: Dynamically Set the Coordinates for Each Bar
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// const w = 500;
// const h = 100;

// const svg = d3
//     .select('body')
//     .append('svg')
//     .attr('width', w)
//     .attr('height', h);

// svg
//     .selectAll('rect')
//     .data(dataset)
//     .enter()
//     .append('rect')
//     .attr('x', (d, i) => {
//         return i * 30;
//     })
//     .attr('y', 0)
//     .attr('width', 25)
//     .attr('height', 100);

// 14 Data Visualization with D3: Dynamically Change the Height of Each Bar
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// const w = 500;
// const h = 100;

// const svg = d3
//     .select('body')
//     .append('svg')
//     .attr('width', w)
//     .attr('height', h);

// svg
//     .selectAll('rect')
//     .data(dataset)
//     .enter()
//     .append('rect')
//     .attr('x', (d, i) => {
//         return i * 30;
//     })
//     .attr('y', 0)
//     .attr('width', 25)
//     .attr('height', (d, i) => {
//         return d * 3;
//     });


// 15 Data Visualization with D3: Invert SVG Elements
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// const w = 500;
// const h = 100;

// const svg = d3
//     .select('body')
//     .append('svg')
//     .attr('width', w)
//     .attr('height', h);

// svg
//     .selectAll('rect')
//     .data(dataset)
//     .enter()
//     .append('rect')
//     .attr('x', (d, i) => i * 30)
//     .attr('y', (d, i) => h - d * 3)
//     .attr('width', 25)
//     .attr('height', (d, i) => d * 3);


// 16 Data Visualization with D3: Change the Color of an SVG Element
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// const w = 500;
// const h = 100;

// const svg = d3
//     .select('body')
//     .append('svg')
//     .attr('width', w)
//     .attr('height', h);

// svg
//     .selectAll('rect')
//     .data(dataset)
//     .enter()
//     .append('rect')
//     .attr('x', (d, i) => i * 30)
//     .attr('y', (d, i) => h - d * 3)
//     .attr('width', 25)
//     .attr('height', (d, i) => d * 3)
//     .attr('fill', 'navy');


// 17 Data Visualization with D3: Add Labels to D3 Elements
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// const w = 500;
// const h = 100;

// const svg = d3
//     .select('body')
//     .append('svg')
//     .attr('width', w)
//     .attr('height', h);

// svg
//     .selectAll('rect')
//     .data(dataset)
//     .enter()
//     .append('rect')
//     .attr('x', (d, i) => i * 30)
//     .attr('y', (d, i) => h - d * 3)
//     .attr('width', 25)
//     .attr('height', (d, i) => d * 3)
//     .attr('fill', 'navy');

// svg
//     .selectAll('text')
//     .data(dataset)
//     .enter()
//     .append('text')
//     .attr('x', (d, i) => i * 30)
//     .attr('y', (d, i) => (h - d * 3) - 3)
//     .attr('width', 25)
//     .attr('height', (d, i) => d * 3)
//     .attr('fill', 'navy')
//     .text(d => d);


// 18 Data Visualization with D3: Style D3 Labels
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// const w = 500;
// const h = 100;

// const svg = d3
//     .select('body')
//     .append('svg')
//     .attr('width', w)
//     .attr('height', h);

// svg
//     .selectAll('rect')
//     .data(dataset)
//     .enter()
//     .append('rect')
//     .attr('x', (d, i) => i * 30)
//     .attr('y', (d, i) => h - d * 3)
//     .attr('width', 25)
//     .attr('height', (d, i) => d * 3)
//     .attr('fill', 'navy');

// svg
//     .selectAll('text')
//     .data(dataset)
//     .enter()
//     .append('text')
//     .text(d => d)
//     .attr('x', (d, i) => i * 30)
//     .attr('y', (d, i) => h - (d * 3) - 3)
//     .style('font-size', '25px')
//     .attr('fill', 'red');


// 19 Data Visualization with D3: Add a Hover Effect to a D3 Element
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// const w = 500;
// const h = 100;

// const svg = d3
//     .select('body')
//     .append('svg')
//     .attr('width', w)
//     .attr('height', h);

// svg
//     .selectAll('rect')
//     .data(dataset)
//     .enter()
//     .append('rect')
//     .attr('x', (d, i) => i * 30)
//     .attr('y', (d, i) => h - d * 3)
//     .attr('width', 25)
//     .attr('height', (d, i) => d * 3)
//     .attr('fill', 'navy')
//     .attr('class', 'fbar');

// svg
//     .selectAll('text')
//     .data(dataset)
//     .enter()
//     .append('text')
//     .text(d => d)
//     .attr('x', (d, i) => i * 30)
//     .attr('y', (d, i) => h - (d * 3) - 3);


// 20 Data Visualization with D3: Add a Tooltip to a D3 Element
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// const w = 500;
// const h = 100;

// const svg = d3
//     .select('body')
//     .append('svg')
//     .attr('width', w)
//     .attr('height', h);

// svg
//     .selectAll('rect')
//     .data(dataset)
//     .enter()
//     .append('rect')
//     .attr('x', (d, i) => i * 30)
//     .attr('y', (d, i) => h - d * 3)
//     .attr('width', 25)
//     .attr('height', (d, i) => d * 3)
//     .attr('fill', 'navy')
//     .attr('class', 'fbar')
//     .append('title')
//     .text(d => d);

// svg
//     .selectAll('text')
//     .data(dataset)
//     .enter()
//     .append('text')
//     .text(d => d)
//     .attr('x', (d, i) => i * 30)
//     .attr('y', (d, i) => h - (d * 3) - 3);


// 21 Data Visualization with D3: Create a Scatterplot with SVG Circles
const dataset = [
    [34, 78],
    [109, 280],
    [310, 120],
    [79, 411],
    [420, 220],
    [233, 145],
    [333, 96],
    [222, 333],
    [78, 320],
    [21, 123]
];

const w = 500;
const h = 500;

svg = d3
    .select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h)


// Test data
// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
// const sample = [{
//         language: 'Rust',
//         value: 78.9,
//         color: '#000000'
//     },
//     {
//         language: 'Kotlin',
//         value: 75.1,
//         color: '#00a2ee'
//     },
//     {
//         language: 'Python',
//         value: 68.0,
//         color: '#fbcb39'
//     },
//     {
//         language: 'TypeScript',
//         value: 67.0,
//         color: '#007bc8'
//     },
//     {
//         language: 'Go',
//         value: 65.6,
//         color: '#65cedb'
//     },
//     {
//         language: 'Swift',
//         value: 65.1,
//         color: '#ff6e52'
//     },
//     {
//         language: 'JavaScript',
//         value: 61.9,
//         color: '#f9de3f'
//     },
//     {
//         language: 'C#',
//         value: 60.4,
//         color: '#5d2f8e'
//     },
//     {
//         language: 'F#',
//         value: 59.6,
//         color: '#008fc9'
//     },
//     {
//         language: 'Clojure',
//         value: 59.6,
//         color: '#507dca'
//     }
// ];

// const w = 500;
// const h = 100;

// const svg = d3
//     .select('body')
//     .append('svg')
//     .attr('width', w)
//     .attr('height', h);

// svg
//     .selectAll('rect')
//     .data(sample)
//     .enter()
//     .append('rect')
//     .attr('x', (d, i) => i * 30)
//     .attr('y', (d, i) => h - d.value * 3)
//     .attr('width', 25)
//     .attr('height', (d, i) => d.value * 3)
//     .attr('fill', 'navy')
//     .attr('class', 'fbar');

// svg
//     .selectAll('text')
//     .data(sample)
//     .enter()
//     .append('text')
//     .text(d => d.language)
//     .attr('x', (d, i) => i * 30)
//     .attr('y', (d, i) => h - (d * 3) - 3);

// console.log(sample[0].value);