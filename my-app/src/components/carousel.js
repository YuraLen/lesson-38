import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export class DemoCarousel extends Component {
    render() {
        return (
          <div style={{marginTop: "50px"}}>
            <Carousel>
                <div>
                    <img src="https://img4.goodfon.ru/original/1920x1080/f/dc/synthpop-synth-retrowave-electronic-darkwave-synth-pop-syn-3.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://cdn.bhdw.net/im/art-retrowave-oboi-18908_w635.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://militaryarms.ru/wp-content/uploads/2021/08/1620694914_1-phonoteka_org-p-flag-ukraini-fon-1.jpg" />
                    <p className="legend">Слава Україні</p>
                </div>
            </Carousel>
            </div>
        );
    }
};
