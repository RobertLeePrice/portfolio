import Sketch from "react-p5";
import Particle from './Particle';

// global constants
const NUM_PARTICLES = 320;


// create particle array
let particles = [];

export default (props) => {

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(props.width, props.height).parent(canvasParentRef);

		console.log('Calling Setup');

		for(let i = 0; i < NUM_PARTICLES; i++) {
			particles.push(new Particle(p5, props.width, props.height));
		}

		console.log(particles)

	};

	const draw = (p5) => {
		// draw background
		p5.background(p5.color('#1D1C1A')); 
		
		// draw particles
		for(let i = 0; i < particles.length; i++) {
			particles[i].move();
			particles[i].connect(p5, particles.slice(i));
			particles[i].render(p5);
		}
	};

	return <Sketch setup={setup} draw={draw} />;
};