import React, { Component } from 'react';
//import moment from 'moment';
import Rose from './rose/';


class App extends Component {
  constructor() {
    super();
    this.state = {
      roseData: this.generateRose(),
      roseData1: this.generateRose1(),
      roseData2: this.generateRose2(),
      roseData3: this.generateRose3(),
      roseData4: this.generateRose4(),
      roseData5: this.generateRose5(),
      roseData6: this.generateRose6()
    }
  }


  generateRose() {

    let randomNum = Math.random();

    // sum of all sizes should be 100
    // sum of all values === "Size" 

    return [
      {
        "Type": "Video",
        "Size": randomNum >= 0.5 ? 20 : 25,
        "Image": "roseVideo.png",
        "Values": [{ "name": "Desktop", "value": randomNum >= 0.5 ? 10 : 14 }, { "name": "Tablet", "value": randomNum >= 0.5 ? 7 : 9 }, { "name": "Mobile", "value": randomNum >= 0.5 ? 3 : 2 }]
      },
      {
        "Type": "Html",
        "Size": 30,
        "Image": "roseHtml.png",
        "Values": [{ "name": "Desktop", "value": 15 }, { "name": "Tablet", "value": 10 }, { "name": "Mobile", "value": 5 }]
      },
      {
        "Type": "Image",
        "Size": randomNum >= 0.5 ? 50 : 45,
        "Image": "roseImage.png",
        "Values": [{ "name": "Desktop", "value": randomNum >= 0.5 ? 30 : 27 }, { "name": "Tablet", "value": randomNum >= 0.5 ? 16 : 13 }, { "name": "Mobile", "value": randomNum >= 0.5 ? 4 : 5 }]
      }
    ];
  }



  generateRose1() {

    // let randomNum = Math.random();

    // sum of all sizes should be 100
    // sum of all values === "Size" 

    //http://localhost:8080/advertiser2/types?endDate=1493845199&startDate=1491166800&type=2

    return [
      {
        "Type": "Image",
        "Size": 0,
        "Image": "roseImage.png",
        "Values": [
          { "name": "Desktop", "value": 0, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 0, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 0, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Flash",
        "Size": 100,
        "Image": "",
        "Values": [
          { "name": "Desktop", "value": 82, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 5, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 11, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Video",
        "Size": 0,
        "Image": "roseVideo.png",
        "Values": [
          { "name": "Desktop", "value": 0, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 0, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 0, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Html",
        "Size": 0,
        "Image": "roseHtml.png",
        "Values": [
          { "name": "Desktop", "value": 0, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 0, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 0, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      }
    ];
  }

  generateRose2() {
    //http://localhost:8080/advertiser2?country=DE&sources=1186
    return [
      {
        "Type": "Image",
        "Size": 8,
        "Image": "roseImage.png",
        "Values": [
          { "name": "Desktop", "value": 6, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 2, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 0, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Flash",
        "Size": 0,
        "Image": "",
        "Values": [
          { "name": "Desktop", "value": 0, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 0, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 0, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Video",
        "Size": 0,
        "Image": "roseVideo.png",
        "Values": [
          { "name": "Desktop", "value": 0, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 0, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 0, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Html",
        "Size": 92,
        "Image": "roseHtml.png",
        "Values": [
          { "name": "Desktop", "value": 76, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 16, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 0, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      }
    ];
  }

  generateRose3() {
    //http://localhost:8080/device=3&endDate=1493585999&sources=129&startDate=1490994000
    return [
      {
        "Type": "Image",
        "Size": 75,
        "Image": "roseImage.png",
        "Values": [
          { "name": "Desktop", "value": 0, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 0, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 75, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Flash",
        "Size": 0,
        "Image": "",
        "Values": [
          { "name": "Desktop", "value": 0, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 0, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 0, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Video",
        "Size": 0,
        "Image": "roseVideo.png",
        "Values": [
          { "name": "Desktop", "value": 0, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 0, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 0, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Html",
        "Size": 24,
        "Image": "roseHtml.png",
        "Values": [
          { "name": "Desktop", "value": 0, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 0, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 24, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      }
    ];
  }

  generateRose4() {
    //http://localhost:8080/advertiser2/types?endDate=1514757599&startDate=1483221600   (this year)
    return [
      {
        "Type": "Image",
        "Size": 64,
        "Image": "roseImage.png",
        "Values": [
          { "name": "Desktop", "value": 54, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 6, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 4, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Flash",
        "Size": 0,
        "Image": "",
        "Values": [
          { "name": "Desktop", "value": 0, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 0, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 0, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Video",
        "Size": 0,
        "Image": "roseVideo.png",
        "Values": [
          { "name": "Desktop", "value": 0, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 0, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 0, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Html",
        "Size": 34,
        "Image": "roseHtml.png",
        "Values": [
          { "name": "Desktop", "value": 29, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 3, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 1, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      }
    ];
  }

  generateRose5() {
    //http://localhost:8080/advertiser2/types?endDate=1514757599&startDate=1483221600   (last year)
    return [
      {
        "Type": "Image",
        "Size": 64,
        "Image": "roseImage.png",
        "Values": [
          { "name": "Desktop", "value": 54, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 5, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 4, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Flash",
        "Size": 0,
        "Image": "",
        "Values": [
          { "name": "Desktop", "value": 0, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 0, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 0, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Video",
        "Size": 0,
        "Image": "roseVideo.png",
        "Values": [
          { "name": "Desktop", "value": 0, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 0, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 0, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Html",
        "Size": 34,
        "Image": "roseHtml.png",
        "Values": [
          { "name": "Desktop", "value": 29, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 3, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 1, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      }
    ];
  }

  generateRose6() {
    //http://localhost:8080/advertiser2device=2&endDate=1492721999&sources=129&startDate=1491426000
    return [
      {
        "Type": "Image",
        "Size": 30,
        "Image": "roseImage.png",
        "Values": [
          { "name": "Desktop", "value": 15, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 15, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 0, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Video",
        "Size": 20,
        "Image": "roseVideo.png",
        "Values": [
          { "name": "Desktop", "value": 10, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 10, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 0, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      },
      {
        "Type": "Html",
        "Size": 50,
        "Image": "roseHtml.png",
        "Values": [
          { "name": "Desktop", "value": 20, "color": "#DE6465", "hoverColor": "#D32F30" },
          { "name": "Mobile", "value": 10, "color": "#4DC29F", "hoverColor": "#37A182" },
          { "name": "Tablet", "value": 20, "color": "#EEAA58", "hoverColor": "#E88C1D" }
        ]
      }
    ];
  }



  handleTransition = () => {
    this.setState({
      roseData: this.generateRose()
    });
  }

  render() {

    return (
      <div>
        {/* <button onClick={this.handleTransition}>test transition</button> */}


        <div className="Rose">
          <Rose dataset={this.state.roseData6} />
        </div>

      </div>
    );
  }
}

export default App;
