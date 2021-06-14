import './index.scss';
import React, {useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import { AiOutlineMail } from 'react-icons/ai';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
//
// AOS.init();




function App() {
    // ('#container').scroll(function (){
    //     AOS.refresh();
    // })
    const [ref, inView] = useInView({
        rootMargin: '-100px 0px',
    });


    useEffect(()=> {
        (function() {
            // Init
            var container = document.getElementById("container"),
                inner = document.getElementById("inner");

            // Mouse
            var mouse = {
                _x: 0,
                _y: 0,
                x: 0,
                y: 0,
                updatePosition: function(event) {
                    var e = event || window.event;
                    this.x = e.clientX - this._x;
                    this.y = (e.clientY - this._y) * -1;
                },
                setOrigin: function(e) {
                    this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                    this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
                },
                show: function() {
                    return "(" + this.x + ", " + this.y + ")";
                }
            };

            // Track the mouse position relative to the center of the container.
            mouse.setOrigin(container);

            //----------------------------------------------------

            var counter = 0;
            var refreshRate = 10;
            var isTimeToUpdate = function() {
                return counter++ % refreshRate === 0;
            };

            //----------------------------------------------------

            var onMouseEnterHandler = function(event) {
                update(event);
            };

            var onMouseLeaveHandler = function() {
                inner.style = "";
            };

            var onMouseMoveHandler = function(event) {
                if (isTimeToUpdate()) {
                    update(event);
                }
            };

            //----------------------------------------------------

            var update = function(event) {
                mouse.updatePosition(event);
                updateTransformStyle(
                    (mouse.y / inner.offsetHeight / 2).toFixed(2),
                    (mouse.x / inner.offsetWidth / 2).toFixed(2)
                );
            };

            var updateTransformStyle = function(x, y) {
                var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
                inner.style.transform = style;
                inner.style.webkitTransform = style;
                inner.style.mozTranform = style;
                inner.style.msTransform = style;
                inner.style.oTransform = style;
            };

            //--------------------------------------------------------

            container.onmousemove = onMouseMoveHandler;
            container.onmouseleave = onMouseLeaveHandler;
            container.onmouseenter = onMouseEnterHandler;
        })();
    } ,[])

    return (
      <div className="container">

                <section className="main-body" >
                    <div   className="message" ><AiOutlineMail size="2em" /></div>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Projects</li>
                        </ul>
                    </nav>

                    <h1></h1>
                    <div className="first-half">
                    <p className="amazing">Amazing</p>
                    <p className="floating-number">01</p>
                    </div>
                    <div id="container">

                        <div id="inner"><p>Some Quote goes here.</p></div>
                    </div>


                    {/*loading circles*/}
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>


                </section>
          <section className="about-me">
              <h1 ref={ref} class={ inView ? "h1-animation" : null} >About me</h1>
              <p  ref={ref} class={  inView ? "opacity"  : null }  className="introduction">
                  <div ref={ref} class={  inView ? "before"  : null } >

                  </div>
                  Hello, my name is Pritam.
                  <div ref={ref} class={  inView ? "after"  : null } >
                  </div>
              </p>
              <div className="second-half"></div>

          </section>
          <section>
              <div className="first-half"></div>
              </section>

      </div>
  );
}

export default App;
