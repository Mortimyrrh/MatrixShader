precision mediump float;
uniform float time;
void main(void) 
{
    vec3 color = vec3((sin(time) * 0.5) + 0.5, 1., 1.);
    gl_FragColor = vec4(color,1.0);
}