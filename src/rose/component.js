import React from 'react';
import * as d3 from 'd3';
import isEqual from 'lodash.isequal';

class Rose extends React.Component {

  constructor(props) {
    super(props);
    this.saveContainer = this.saveContainer.bind(this);
  }

  componentDidMount() {
    

    this.width = this.props.width;
    this.height = this.props.height;

    this.radius = Math.min(this.width, this.height) / 2;

    this.svg = d3.select(this.container)
      .append('svg')
      .attr('width', this.props.width)
      .attr('height', this.props.height);

    this.g = this.svg.append("g").attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");  
    this.legend = ["Desktop", "Tablet", "Mobile"];

    var defs = this.svg.append("defs");

    var filter = defs.append("filter")
        .attr("id", "rose-drop-shadow")
        .attr("width", "130%")
        .attr("height", "130%");

    filter.append("feGaussianBlur")
        .attr("in", "SourceAlpha")
        .attr("stdDeviation", 3);


    filter.append("feOffset")
        .attr("dx", 1)
        .attr("dy", 1)
        .attr("result", "offsetBlur");

    var feComponentTransfer = filter.append("feComponentTransfer");
        feComponentTransfer.append("feFuncA")
            .attr("type","linear") 
            .attr("slope",0.2);

    var feMerge = filter.append("feMerge");
        feMerge.append("feMergeNode");
        feMerge.append("feMergeNode")
               .attr("in", "SourceGraphic");

    this.svg        
        .append("image")
        .attr("width", 298)
        .attr("height", 60)
        .attr('x', this.props.width/2 - 155)
        .attr('y', this.props.height - 60)      
        .attr("xlink:href", "roseicons/roseLegend.png")

    // const legend = this.svg.append("g")
    //                     .attr("transform", "translate(450,450)");
    
    // legend.append("path")
    //   .attr("d","M9.18485099360515e-16,-15A15,15,0,0,1,14.265847744427303,-4.635254915624211L0,0Z")
    //   .attr("transform","rotate(145)")
    this.div = d3.select(this.container).append("div")   
        .attr("class", "roseTooltip svgTooltip")               
        .style("opacity", 0);

    this.draw(this.props.dataset);

  }

  componentWillUpdate(nextProps) {
    if (!isEqual(nextProps.dataset, this.props.dataset)) {
      this.draw(nextProps.dataset);
    }
  }

  draw(dataset) {

    const component = this;

    let data = dataset.sort(function (a, b) {
      return a.Size - b.Size;
    })

    var colors = {
                    "Desktop": "#E06B6C", 
                    "Tablet": "#F2B158", 
                    "Mobile": "#5CC19E"  
                  };

    //var maxValue = d3.max(data, function(d) { return d.Values[0].value; });
    var maxValue = d3.max(data, function(d) { return d.Size; });

    var mainScale = d3.scaleLinear()
              .domain([0, maxValue])
              .range([0, this.radius - 100]);

    var labelScale = d3.scaleLinear()
              .domain([0, maxValue])
              .range([0, this.radius - 100]);

    var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d.Size; });

    d3.select(this.container).selectAll(".arcRose").remove();

    var arcGroups = this.g.selectAll(".arcRose")
      .data(pie(data))
      .enter().append("g")
        .attr("class", "arcRose");

    // var pathZero = d3.arc()
    //     .outerRadius(1)
    //     .innerRadius(0);

    var arc = d3.arc()
      .innerRadius(function(d,i) { 
        return mainScale( d.offset ); 
      })
      .outerRadius(function(d,i) { 
        return mainScale( d.value + d.offset); 
      });

    var arcMouseover = d3.arc()
      .innerRadius(function(d,i) { 
        return mainScale( d.offset ); 
      })
      .outerRadius(function(d,i) { return mainScale( d.value  + d.offset) + 3; } );



    let wedges = arcGroups.selectAll('path')
        .data(function(d) { 
          return d.data.Values
            // .sort(function (a,b) {
            //   return a.value - b.value;
            // })
            .map(function (item, i) {

              let offset = i === 0 ? 0
                           : i === 1 ? d.data.Values[0].value
                           : i === 2 ? (d.data.Values[1].value + d.data.Values[0].value) : 0;

              return { name: item.name, 
                   index: i, 
                   offset: offset,
                   value: item.value, 
                   startAngle: d.startAngle, 
                   endAngle: d.endAngle
               }
            })
            .sort(function (a,b) {
              return b.index - a.index;
            })

        })
      .enter().append('path')
        .attr("fill", function(d, i) { 
          return colors[d.name]; 
        })
        .attr("cursor", "pointer")
        .attr("class","wedge")
        .style("filter", "url(#rose-drop-shadow)")
        .attr('d', arc )
        .style("opacity", 0)


    wedges.on("mouseover", mouseover);

    wedges.on("mouseout", mouseout);


    wedges    
          .transition()
          .duration(250)
          .delay(function (d,i) {
            return i * 130
          })
          .style("opacity", 1)

    //  wedges Labels 
    arcGroups.selectAll('text')
        .data(function(d) { 

          return d.data.Values
            // .sort(function (a,b) {
            //   return b.value - a.value;
            // })
            .map(function (item, i) {
              let nextValue = i < 2 ? d.data.Values[i+1].value : 0;

              let offset = i === 0 ? 0
              : i === 1 ? d.data.Values[0].value
              : i === 2 ? (d.data.Values[1].value + d.data.Values[0].value) : 0;

              return { name: item.name, 
                   index: i, 
                   offset: offset,
                   value: item.value, 
                   startAngle: d.startAngle, 
                   endAngle: d.endAngle,
                   nextValue: nextValue
               }
            })
            // .sort(function (a,b) {
            //   return b.index - a.index;
            // })
        })
      .enter().append('text').text((d,i) => {
        //return d.value >= 4 && (d.value - d.offset) > 3 ? "%" + d.value : "";
        return d.value >= 4 ? "%" + d.value : "";
      })
      .attr("transform", function(d) {
        
        let xValue = Math.cos(((d.startAngle + d.endAngle - Math.PI)/2)) * mainScale(d.offset + (d.value)/2);
        let yValue = Math.sin((d.startAngle + d.endAngle - Math.PI)/2) * mainScale(d.offset + (d.value)/2);
        return "translate(" + xValue + "," + yValue + ")";
      })
      .style("font-size", 9)
      .attr("fill","white")
      .style("text-anchor", "middle")
      .style("alignment-baseline","middle")
      .attr("pointer-events","none")
      .style("font-family", "sans-serif")


    var labels = arcGroups.append("g")
            .attr("transform", function(d) {

              return "translate(" + Math.cos(((d.startAngle + d.endAngle - Math.PI)/2)) * (labelScale(d.data.Size) + 30) + "," 
              + Math.sin((d.startAngle + d.endAngle - Math.PI)/2) * (labelScale(d.data.Size) + 30) + ")";
            })
            .attr("display", function(d) { 
              // display if arc is bigger that 1 radian
              return (d.endAngle - d.startAngle > 1) ? null : "none";
            });   


    labels        
        .append("image")
        .attr("width", 24)
        .attr("height", 24)
        .attr('x', -12)
        .attr('y', -22)      
        .attr("xlink:href", function (d,i) {
          return "roseicons/" + d.data.Image;
        })

    labels
        .append("text")
        .style("font-size", 10)
        .style("text-anchor", "middle")
        .attr("y", 12)
        .style("font-family", "sans-serif")
        .text(function (d) {
          return d.data.Type;
        })      

    labels
        .append("text")
        .style("font-size", 9)
        .style("text-anchor", "middle")
        .attr("y", 22)
        .style("font-family", "sans-serif")
        .text(function (d) {
          return "%" + d.value;
        })


    labels
            .attr("opacity", 0)
            .transition(400)
            .delay(function (d,i) {
              return i * 100;
            })
            .attr("opacity", 1)

    function mouseover (d) {

        d3.select(this)
          .transition()
          .duration(200)
          .attr('d', arcMouseover);


        d3.select(component.container).select(".roseTooltip")     
            .style("opacity", .9)
            .html(d.name + "<br/>%" + d.value)  
            .style("left", (d3.event.pageX) + "px")     
            .style("top", (d3.event.pageY - 28) + "px");



    }          

    function mouseout (d) {

        d3.select(this)
          .transition()
          .duration(200)
          .attr('d', arc);

        d3.select(component.container).select(".roseTooltip")     
            .style("opacity", 0)

    }  

  }

  saveContainer(container) {
    this.container = container;
  }

  render() {
    const {
      width,
      height,
      children,
    } = this.props;

    return (
      <div
        className="zulu5-rose"
        style={{
          width,
          height,
        }}
        ref={this.saveContainer}
      >
        {children}
      </div>
    );
  }
}

Rose.defaultProps = {
  width: 500,
  height: 500,
  hoverLength: 30,
  onMouseClick: () => {},
  onMouseOver: () => {},
  onMouseOut: () => {},
};

export default Rose;
