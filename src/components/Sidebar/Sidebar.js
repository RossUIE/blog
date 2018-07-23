import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.scss';
import logo from '../../assets/images/logo.png';
import blueprint from '../../assets/images/blueprint.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faHome, faUser, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Waypoint from 'react-waypoint';
import { TweenLite, TimelineMax, GSAP } from 'gsap';

library.add(faEnvelope, faHome, faUser, faPencilAlt);


export default class Sidebar extends Component {

    constructor() {
        super()

        this.state = {
            logo: '../../assets/images/logo.png',
            animationEntered: false,
        }

    }

    componentDidMount() {
        this.ghrtl = new TimelineMax({ paused: true });
        const {
                ghrtl,
            } = this;
        ghrtl.from("#open", 0.2, {opacity: 0}, 0.2);
        ghrtl.from("#R", 0.2, {opacity: 0}, 0.4);    
        ghrtl.from("#slash", 0.2, {opacity: 0}, 0.6);    
        ghrtl.from("#close", 0.2, {opacity: 0}, 0.8);        
        ghrtl.to("#bigCircle", 5, { rotation: 360, ease: Linear.easeNone, transformOrigin: "50% 50%", repeat: -1 }, "rotate");
        ghrtl.to("#smallCircle", 5, { rotation: 360, ease: Linear.easeNone, transformOrigin: "50% 50%", repeat: -1 }, "rotate");
          

    }

    playAnimation = () => {

        console.log('Play the animation');
        this.ghrtl.play(0, false);

    }

    onEnter = () => {
        const {
        animationEntered,
              } = this.state;
        if (animationEntered) {
            return;
        }
        else {
            this.playAnimation();
            this.setState({
                animationEntered: true,
            });
        }
    }





    render() {
        return (
            <Waypoint onEnter={this.onEnter}>
                <div className="sidebar" /*style={{ background: `url("${blueprint}") no-repeat center center `}}*/>

                    <div id="logo">


                        

                    
<svg viewBox="0 0 827 821" version="1.1">

<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="Artboard" transform="translate(-208.000000, -162.000000)">
        <path d="M432.485276,761.979693 L439.555338,761.979693 L334.302546,867.232485 L332.535031,869 L329,865.464969 L330.767515,863.697454 L432.485276,761.979693 Z M457.48172,736.983249 L880.697454,313.767515 L882.464969,312 L886,315.535031 L884.232485,317.302546 L464.551782,736.983249 L457.48172,736.983249 Z" id="line" stroke="#9E9E9E" stroke-width="5" stroke-linecap="square"></path>
        <rect id="bottom" stroke="#FFFFFF" stroke-width="3" fill="#424242" x="222.5" y="759.5" width="741" height="25"></rect>
        <rect id="back" stroke="#424242" stroke-width="10" fill="#9E9E9E" x="286" y="378" width="614" height="358" rx="12"></rect>
        <g id="bigCircle" transform="translate(851.000000, 166.000000)">
            <circle id="bigCenter" stroke="#979797" fill="#1666AF" cx="91" cy="82" r="37"></circle>
            <ellipse id="bigOuter" stroke="#FFDC00" stroke-width="8" cx="92" cy="82.5" rx="82" ry="82.5"></ellipse>
            <circle id="bigOutside" stroke="#979797" fill="#1666AF" cx="10.5" cy="81.5" r="10.5"></circle>
            <circle id="bigOutside1" stroke="#979797" fill="#1666AF" cx="172.5" cy="81.5" r="10.5"></circle>
        </g>
        <g id="smallCircle" transform="translate(209.000000, 846.000000)">
            <ellipse id="SmallCenter" stroke="#979797" fill="#1666AF" cx="71" cy="66" rx="29" ry="30"></ellipse>
            <ellipse id="smallOuter" stroke="#FFDC00" stroke-width="8" cx="72.5" cy="66.5" rx="64.5" ry="66.5"></ellipse>
            <circle id="smallOutside" stroke="#979797" fill="#1666AF" cx="8.5" cy="65.5" r="8.5"></circle>
            <circle id="smallOutside2" stroke="#979797" fill="#1666AF" cx="135.5" cy="65.5" r="8.5"></circle>
        </g>
      
        <g id="open" transform="translate(457.000000, 528.000000)" fill="#FFFFFF">
            <polygon id="&lt;R-/&gt;" points="66.2 0.6 66.2 7.2 14.48 33.24 66.2 58.68 66.2 66 0.8 33.24"></polygon>
        </g>
        <g id="R" transform="translate(535.000000, 507.000000)">
            <path d="M91.16,87 L66.56,87 C65.8399964,86.2799964 65.3200016,85.7400018 65,85.38 C64.6799984,85.0199982 64.320002,84.6000024 63.92,84.12 C63.519998,83.6399976 63.020003,82.9400046 62.42,82.02 C61.819997,81.0999954 60.8800064,79.7200092 59.6,77.88 C58.0799924,75.6399888 56.7400058,73.620009 55.58,71.82 C54.4199942,70.019991 53.240006,68.2400088 52.04,66.48 C50.839994,64.7199912 49.540007,62.940009 48.14,61.14 C46.739993,59.339991 45.0800096,57.3200112 43.16,55.08 C41.559992,53.2399908 39.8200094,51.520008 37.94,49.92 C36.0599906,48.319992 34.0800104,47.320002 32,46.92 C30.4799924,46.5999984 29.320004,46.44 28.52,46.44 C27.7999964,46.44 26.8800056,46.4000004 25.76,46.32 L25.76,59.88 C25.76,63.7200192 25.7999996,66.9599868 25.88,69.6 C25.9600004,72.1600128 26.0399996,74.3599908 26.12,76.2 C26.2000004,78.0400092 26.639996,79.559994 27.44,80.76 C28.0800032,81.8000052 29.3199908,82.8599946 31.16,83.94 C33.0000092,85.0200054 35.5599836,85.6399992 38.84,85.8 L38.84,87 L0.44,87 L0.44,85.8 C2.44001,85.4799984 4.3599908,85.0000032 6.2,84.36 C8.0400092,83.7199968 9.4799948,82.7600064 10.52,81.48 C10.920002,80.9999976 11.2399988,80.2800048 11.48,79.32 C11.7200012,78.3599952 11.8999994,77.280006 12.02,76.08 C12.1400006,74.879994 12.2399996,73.6000068 12.32,72.24 C12.4000004,70.8799932 12.44,69.5600064 12.44,68.28 C12.44,67.1599944 12.4599998,65.6400096 12.5,63.72 C12.5400002,61.7999904 12.5799998,59.7000114 12.62,57.42 C12.6600002,55.1399886 12.68,52.800012 12.68,50.4 L12.68,20.04 C12.68,18.5999928 12.6600002,17.1400074 12.62,15.66 C12.5799998,14.1799926 12.5000006,12.7800066 12.38,11.46 C12.2599994,10.1399934 12.0600014,8.9400054 11.78,7.86 C11.4999986,6.7799946 11.1200024,6.0000024 10.64,5.52 C9.439994,4.2399936 8.1000074,3.3800022 6.62,2.94 C5.1399926,2.4999978 3.3200108,2.1200016 1.16,1.8 L1.16,0.6 L6.08,0.6 C8.8000136,0.6 11.8799828,0.5800002 15.32,0.54 C18.7600172,0.4999998 22.1999828,0.48 25.64,0.48 L34.04,0.48 C39.4000268,0.48 44.1599792,0.6399984 48.32,0.96 C52.4800208,1.2800016 56.2799828,2.3599908 59.72,4.2 C63.2400176,6.0400092 66.0799892,8.5399842 68.24,11.7 C70.4000108,14.8600158 71.48,18.839976 71.48,23.64 C71.48,26.6000148 70.9400054,29.2599882 69.86,31.62 C68.7799946,33.9800118 67.340009,36.059991 65.54,37.86 C63.739991,39.660009 61.640012,41.1999936 59.24,42.48 C56.839988,43.7600064 54.3200132,44.8399956 51.68,45.72 L51.68,46.08 C53.0400068,46.8000036 54.3599936,47.8399932 55.64,49.2 C56.9200064,50.5600068 58.159994,52.0799916 59.36,53.76 C61.4400104,56.8000152 63.6999878,60.0799824 66.14,63.6 C68.5800122,67.1200176 70.7599904,70.2399864 72.68,72.96 C75.6400148,77.1200208 78.519986,80.1599904 81.32,82.08 C84.120014,84.0000096 87.3999812,85.2399972 91.16,85.8 L91.16,87 Z" id="Path" fill="#FFFFFF"></path>
            <path d="M57.68,22.92 C57.68,18.91998 56.68001,15.3600156 54.68,12.24 C52.67999,9.1199844 49.7600192,6.6400092 45.92,4.8 C43.9999904,3.9199956 41.9800106,3.280002 39.86,2.88 C37.7399894,2.479998 35.5200116,2.28 33.2,2.28 C31.5199916,2.28 30.1600052,2.3199996 29.12,2.4 C28.0799948,2.4800004 27.2800028,2.5599996 26.72,2.64 C26.6399996,3.1200024 26.5600004,3.5399982 26.48,3.9 C26.3999996,4.2600018 26.3400002,4.7199972 26.3,5.28 C26.2599998,5.8400028 26.2200002,6.619995 26.18,7.62 C26.1399998,8.620005 26.0800004,10.0399908 26,11.88 C25.9199996,14.680014 25.8600002,17.8399824 25.82,21.36 C25.7799998,24.8800176 25.76,28.2799836 25.76,31.56 L25.76,44.76 C29.0400164,44.76 32.0999858,44.6200014 34.94,44.34 C37.7800142,44.0599986 40.5199868,43.4800044 43.16,42.6 C45.7200128,41.799996 47.9199908,40.7200068 49.76,39.36 C51.6000092,37.9999932 53.0999942,36.4600086 54.26,34.74 C55.4200058,33.0199914 56.2799972,31.16001 56.84,29.16 C57.4000028,27.15999 57.68,25.0800108 57.68,22.92 Z" id="Path" fill="#9E9E9E"></path>
        </g>
        <g id="slash" transform="translate(641.000000, 502.000000)" fill="#FFFFFF">
            <polygon id="Path" points="48.52 2.36 4.12 109.16 0.16 107.72 44.56 0.8"></polygon>
        </g>
        <g id="close" transform="translate(691.000000, 528.000000)" fill="#FFFFFF">
            <polygon id="Path" points="0.8 66 0.8 59.28 52.52 33.24 0.8 7.92 0.8 0.6 66.2 33.24"></polygon>
        </g>

       
    </g>
</g>
</svg>
                    </div>

                    <nav>
                        <ul>
                            <a href="#">Home<span className="icons"><FontAwesomeIcon icon="home"/></span></a>
                            <a href="#">About<span className="icons"><FontAwesomeIcon icon="user"  /></span></a>
                            <a href="#">Blog<span className="icons"><FontAwesomeIcon icon="pencil-alt" /></span></a>
                            <a href="#">Contact<span className="icons"><FontAwesomeIcon icon="envelope" /></span></a>

                        </ul>
                    </nav>
                    <div className="designer">Desgined by Ross McMurray</div>
                </div>
            </Waypoint>
        );
    }
}

