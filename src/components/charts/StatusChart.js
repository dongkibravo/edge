import React from 'react';
import * as d3 from 'd3';

const tau = Math.PI *2;

class StatusChart extends React.Component{

	componentDidMount(){
		const context = this.setContext();
		this.setBackground(context);
		this.setForeground(context);
	}

	setBackground(context) {
    return context.append('path')
    .datum({ endAngle: tau })
    .style('fill', '#cccccc')
    .attr('d', this.arc());
  }

	setForeground(context){
		return context.append('path')
			.datum({ endAngle: tau * 0.66})
			.style('fill','#84b3f1')
			.attr('d', this.arc());
	}

	arc() {
    return d3.arc()
      .innerRadius(60)
      .outerRadius(85)
      .startAngle(0);
  }

	setContext(){
		var svg = d3.select(this.refs.arc).append('svg')
			.attr('height', '180px')
			.attr('width', '180px')
      .attr('id', 'd3-arc')
      .append('g')
      .attr('transform', `translate(90, 90)`);

			svg.append("text")
			.attr("dy", "0.35em")
			.attr("text-anchor", "middle")
			.text('asdf');
		return svg;
	}

	render(){
    const divStyle = {
      width: '180px',
      display: 'inline-block',
    };
		return(
			<div style={divStyle} ref="arc"></div>
		);
	}
}

export default StatusChart;
