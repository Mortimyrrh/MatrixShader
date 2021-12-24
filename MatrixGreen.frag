// Author: Mortimer
// Title: Matrix Green

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    
	vec3 darkgreen = vec3(0.0,0.2,0.0);
    vec3 white = vec3(1., 1., 1.);

    float phase = (sin(u_time) * 0.5) + 0.5;
    float colourMix = phase;
    vec3 color = (white * colourMix) + (darkgreen * (1. - colourMix));

    gl_FragColor = vec4(color,1.0);
}
