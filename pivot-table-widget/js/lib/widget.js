var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');
// var pivot_table = require('./pivot_table');
var $ = require("jquery")
// require("jquery-ui");
require('./style.css');
var pivottable = require('pivottable');
// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.


var PivotModel = widgets.DOMWidgetModel.extend({
	defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
		_model_name: 'PivotModel',
		_view_name: 'PivotView',
		_model_module: 'pivot-table-widget',
		_view_module: 'pivot-table-widget',
		_model_module_version: '0.1.0',
		_view_module_version: '0.1.0',
		value: 'Hello World',
		data : []
	})
});


// Custom View. Renders the widget model.
var PivotView = widgets.DOMWidgetView.extend({
	render: function () {
		window.jquery = $;
		window.el = this.el;
		console.log("Creating html");
		title = document.createElement("h3");
		title.textContent = 'toto'
		this.el.appendChild(title)
		// script1 = document.createElement("script")
		// script1.setAttribute("type", "text/javascript")
		// script1.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js")
		// this.el.appendChild(script1)

		// script2 = document.createElement("script")
		// script2.setAttribute("type", "text/javascript")
		// script2.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.min.js")
		// this.el.appendChild(script2)

		// $(this.el).pivot(
		// 	[
		// 		{color: "blue", shape: "circle"},
		// 		{color: "red", shape: "triangle"}
		// 	],
		// 	{
		// 		rows: ["color"],
		// 		cols: ["shape"]
		// 	}
		// );
		// script = document.createElement("script")
		// script.setAttribute("type", "text/javascript")
		// script.textContent = ' \
		// $(function(){	\
		// 	$("#myCustomOutput").pivot(	\
		// 		[\
		// 			{color: "blue", shape: "circle"},\
		// 			{color: "red", shape: "triangle"}\
		// 		],\
		// 		{\
		// 			rows: ["color"],\
		// 			cols: ["shape"]\
		// 		}\
		// 	);\
		//  });\
		// '
		// this.el.appendChild(script)

		table = document.createElement("div")
		table.setAttribute("id", "myCustomOutput")
		// $(table).pivotUI(
		// 		[
		// 			{color: "blue", shape: "circle"},
		// 			{color: "red", shape: "triangle"}
		// 		],
		// 		{
		// 			rows: ["color"],
		// 			cols: ["shape"]
		// 		}
		// );
		this.el.appendChild(table);

		$(function(){	
			$("#myCustomOutput").pivotUI(	
				[
					{color: "blue", shape: "circle"},
					{color: "red", shape: "triangle"}
				],
				{
					rows: ["color"],
					cols: ["shape"]
				}
			);
		 });


		window.table = table;


		// this.sketch = document.createElement("div");
		// this.canvas = document.createElement("canvas");
		// this.ctx = this.canvas.getContext('2d');
		// this.canvas.setAttribute("class", "drawing-pad-paint");
		// this.settings_colours = document.createElement("div");
		// this.settings_colours.setAttribute("class", "drawing-pad-settings");
		// this.settings_brush_size = document.createElement("div");	
		// this.settings_brush_size.setAttribute("class", "drawing-pad-settings");	
		// console.log("create")
		// drawing_pad.create(this);

		// this.sketch.appendChild(this.canvas);
		// this.el.appendChild(this.sketch)
		// this.el.appendChild(this.settings_colours);
		// this.el.appendChild(this.settings_brush_size);
		// this.value_changed();
		// this.model.on('change:data', this.value_changed, this);
		// console.log(this.model);
	},

	value_changed: function () {
		// this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		// var data = this.model.get('data');
		// var x = data[0];
		// var y = data[1];
		// var t = data[2];
		// this.ctx.beginPath();

		// if (x.length<1 || y.length<1 || x.length != y.length)
		// {
		// 	// alert("erreur")
		// 	return;
		// }
		// this.ctx.moveTo(x[0], this.canvas.height - y[0]);
		// for (var k=1 ; k<x.length ; k++){
		// 	if (t[k]-t[k-1]<100){
		// 		this.ctx.lineTo(x[k], this.canvas.height-y[k]);
		// 		this.ctx.stroke();
		// 	}
		// 	else{
		// 		this.ctx.moveTo(x[k], this.canvas.height-y[k]);
		// 	}
		// }
		

	}
});


module.exports = {
	PivotModel: PivotModel,
	PivotView: PivotView
};

