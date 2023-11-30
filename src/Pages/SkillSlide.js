import Slider from 'react-infinite-logo-slider'

import html from '../image/kisspng-html-web-design-scalable-vector-graphics-world-wid-html5-icon-hd-5ab0c85c377aa0.0639325615215350682273.png';
import css from '../image/kisspng-css3-cascading-style-sheets-logo-html-5ae0e587e74507.6976263715246882639473.png';
import js from '../image/kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a2a1f9.2428698915320700656662.png';
import bootstrap from '../image/bootstrap.png';
import git from '../image/kisspng-github-computer-icons-icon-design-github-5ab8a31e5b5395.6758034915220498223741.png';
import react from '../image/kisspng-game-react-native-javascript-android-physics-5ac6d5f51879e8.6623465115229803411003.png';
import mongodb from '../image/kisspng-mongodb-node-js-npm-open-source-model-angularjs-leaf-5ac44d9ef0ccd5.2435370215228143669863.png';
import firebae from '../image/kisspng-firebase-cloud-messaging-computer-icons-google-clo-github-5ad5d3ce4fc460.4730334415239628303267.png';
import node from '../image/node.png';
const SkillSlide = () => {
//     <Slider
//     width="200px"
//     duration={40}
//     toRight={false}
//     blurBorders={false}
//     blurBoderColor={'#fff'}
//   >
//     ...
//   </Slider>
    return (
        <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={'#fff'}
    >
        <Slider.Slide>
            <img src={html} alt="any" className='w-36' />
        </Slider.Slide>
        <Slider.Slide>
            <img src={css} alt="any2" className='w-36' />
        </Slider.Slide>
        <Slider.Slide>
            <img src={js} alt="any3" className='w-36' />
        </Slider.Slide>
        <Slider.Slide>
            <img src={bootstrap} alt="any3" className='w-36' />
        </Slider.Slide>
        <Slider.Slide>
            <img src={git} alt="any3" className='w-36' />
        </Slider.Slide>
        <Slider.Slide>
            <img src={react} alt="any3" className='w-36' />
        </Slider.Slide>
        <Slider.Slide>
            <img src={node} alt="any3" className='w-36' />
        </Slider.Slide>
        <Slider.Slide>
            <img src={mongodb} alt="any3" className='w-36' />
        </Slider.Slide>
        <Slider.Slide>
            <img src={firebae} alt="any3" className='w-36' />
        </Slider.Slide>
        <Slider.Slide>
            <div>
                Other component...
            </div>
        </Slider.Slide>
    </Slider>
    )
}              
                     
export default SkillSlide;