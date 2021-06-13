import './index.scss';
import React from 'react';
import { useInView } from 'react-intersection-observer';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// import $ from 'jquery';
//
// AOS.init();


function App() {
    // ('#container').scroll(function (){
    //     AOS.refresh();
    // })
    const [ref, inView] = useInView({

        rootMargin: '-100px 0px',
    });



    return (
      <div className="container">
                <section className="main-body" >
                    <p className="name">Mahi Pritam Reddy</p>
                    <h1>Design!</h1>
                    <p className="amazing">Amazing</p>
                    <p className="floating-number">01</p>
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                </section>
          <section className="about-me">
              <h1 >About me</h1>
              <p  ref={ref} class={  inView ? "opacity"  : null }  className="introduction">
                  <div ref={ref} class={  inView ? "before"  : null } >

                  </div>
                  Hello, my name is Preetham.
                  <div ref={ref} class={  inView ? "after"  : null } >

                  </div>
              </p>

          </section>
          <section><p>Hello</p></section>

      </div>
  );
}

export default App;
