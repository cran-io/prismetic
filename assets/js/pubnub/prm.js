
  var graph = new Rickshaw.Graph( {
      element: document.getElementById("chart"),
      width: 1080,
      height: 300,
      min: 0,
      //max: "auto",
      renderer: 'bar',
      //xScale: d3.time.scale(),
      //yScale: d3.scale.linear(),
      //stroke: true,
      //preserve: true,
      series: [
          {
              color: 'steelgreen',
              name: 'People',
              data: []
          }
      ]
  });

  var y_ticks = new Rickshaw.Graph.Axis.Y( {
    graph: graph,
    orientation: 'left',
    tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
    element: document.getElementById('y_axis')
  } );

  //y_ticks.render();

  var x_ticks = new Rickshaw.Graph.Axis.Time( {
    graph: graph,
    
  } );
  
  //x_ticks.render();

  graph.renderer.dotSize = 3;
  new Rickshaw.Graph.HoverDetail({ graph: graph });

  graph.render();

  new Rickshaw.Fixtures.PubNub({
    channel: 'prm_temple',
    subscribe_key: 'sub-c-2f5f464c-0a20-11e5-83d4-0619f8945a4f',
    history: true,
    limit: 288,
    graph: graph
  });
   
