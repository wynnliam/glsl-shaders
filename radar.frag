// Liam Wynn

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359


uniform vec2 u_resolution;
uniform float u_time;

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

float box(in vec2 _st, in vec2 _size){
    _size = vec2(0.5) - _size*0.5;
    vec2 uv = smoothstep(_size,
                        _size+vec2(0.001),
                        _st);
    uv *= smoothstep(_size,
                    _size+vec2(0.001),
                    vec2(1.0)-_st);
    return uv.x*uv.y;
}

float circle(in vec2 _st, in float _radius){
    vec2 dist = _st-vec2(0.5);
	return 1.-smoothstep(_radius-(_radius*0.01),
                         _radius+(_radius*0.01),
                         dot(dist,dist)*4.);
}

float cross(in vec2 _st, float _size){
    return  box(_st, vec2(_size,_size/4.)) +
            box(_st, vec2(_size/4.,_size));
}

float radar(in vec2 _st, in float max_size) {
    float md = mod(u_time, max_size);
    
    return circle(_st, md) - circle(_st, md * 0.9);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    // To move the cross we move the space
    vec2 translate = vec2(cos(u_time),sin(u_time));
    st += translate*0.35;

    // Show the coordinates of the space on the background
    // color = vec3(st.x,st.y,0.0);

    // Add the shape on the foreground
    color += vec3(circle(st,0.01)) * vec3(1.000, 0.309, 0.214);
    color += vec3(radar(st, 0.5)) * vec3(1.000,0.309,0.214);
    
    st -= translate * 0.35;
    color += vec3(radar(st, 2.0));
    
    st -= vec2(0.5);
    // rotate the space
    st = rotate2d( u_time ) * st;
    // move it back to the original place
    st += vec2(0.5, 1.0);
    color += box(st, vec2(0.020,0.820)) * vec3(0.049,0.768,1.000);

    gl_FragColor = vec4(color,1.0);
}