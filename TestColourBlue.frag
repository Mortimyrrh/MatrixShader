// Author: Mortimer
// Title: Test Colour Blue

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    //vec2 st = gl_FragCoord.xy/u_resolution.xy;
    //st.x *= u_resolution.x/u_resolution.y;
    
    float phase = abs(sin(u_time));
    
    vec3 color = vec3(0.,
                 1. * phase, 
                 1. * phase);

    gl_FragColor = vec4(color,1.0);
}