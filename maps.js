Plotly.d3.csv('https://raw.githubusercontent.com/h0bba/h0bba.github.io/main/state-data.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }
  
 var data = [{
              type: 'choropleth',
              locationmode: 'USA-states',
              locations: unpack(rows, 'code'),
              z: unpack(rows, 'visited'),
              text: unpack(rows, 'state'),
              zmin: 0,
              zmax: 1,
              colorscale: [
                [0, 'rgb(200, 212, 199)'], [1, 'rgb(114, 204, 106)']
              ],
            marker: {
              line:{
                color: 'rgb(255,255,255)',
                width: 2
              }
            }
          }];
  
  var layout = {
          title: 'States Visited',
          geo:{
            scope: 'usa',
            showlakes: true,
            lakecolor: 'rgb(255,255,255)'
          }
      };
      Plotly.plot(statesVisitedMap, data, layout, {showLink: false});
  });
