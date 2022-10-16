var vg_1 = "choropleth_brush.json";
vegaEmbed("#map", vg_1).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "worldline.json";
vegaEmbed("#line", vg_2).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "bubbleplot.json";
vegaEmbed("#bubble", vg_3).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "pie.json";
vegaEmbed("#pie", vg_4).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);