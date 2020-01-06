// Liam Wynn

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float rectangle(float x, float y, float w, float h, vec2 st) {
    vec2 bl = step(vec2(x, y), st);
    vec2 tr = step(vec2(1.0) - vec2(x + w, y + h), 1.0 - st);
    float pct = bl.x * bl.y * tr.x * tr.y;
    return pct;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);
    float pct = 0.0;
    
    pct = rectangle(0.0, 0.0, 0.250, 0.667, st);
    color += vec3(pct) * vec3(1.0, 1.0, 1.0);
    
    pct = rectangle(0.0, 0.697, 0.083, 0.10, st);
    color += vec3(pct) * vec3(1.0, 0.0, 0.0);
    
    pct = rectangle(0.113, 0.697, 0.137, 0.10, st);
    color += vec3(pct) * vec3(1.0, 0.0, 0.0);
    
    pct = rectangle(0.0, 0.827, 0.083, 0.173, st);
    color += vec3(pct) * vec3(1.0, 0.0, 0.0);
    
    pct = rectangle(0.113, 0.827, 0.137, 0.173, st);
    color += vec3(pct) * vec3(1.0, 0.0, 0.0);
    
    pct = rectangle(0.28, 0.0, 0.470, 0.125, st);
    color += vec3(pct) * vec3(1.0, 1.0, 1.0);
    
    pct = rectangle(0.28, 0.155, 0.470, 0.512, st);
    color += vec3(pct) * vec3(1.0, 1.0, 1.0);
    
    pct = rectangle(0.28, 0.697, 0.470, 0.10, st);
    color += vec3(pct) * vec3(1.0, 1.0, 1.0);
    
    pct = rectangle(0.28, 0.827, 0.470, 0.173, st);
    color += vec3(pct) * vec3(1.0, 1.0, 1.0);
    
    pct = rectangle(0.78, 0.0, 0.17, 0.125, st);
    color += vec3(pct) * vec3(0.0, 0.0, 1.0);
    
    pct = rectangle(0.78, 0.155, 0.17, 0.512, st);
    color += vec3(pct) * vec3(1.0, 1.0, 1.0);
    
    pct = rectangle(0.78, 0.697, 0.17, 0.10, st);
    color += vec3(pct) * vec3(1.0, 1.0, 1.0);
    
    pct = rectangle(0.78, 0.827, 0.17, 0.173, st);
    color += vec3(pct) * vec3(1.0, 1.0, 1.0);
    
    pct = rectangle(0.98, 0.0, 0.02, 0.125, st);
    color += vec3(pct) * vec3(0.0, 0.0, 1.0);
    
    pct = rectangle(0.98, 0.155, 0.02, 0.512, st);
    color += vec3(pct) * vec3(1.0, 1.0, 1.0);
    
    pct = rectangle(0.98, 0.697, 0.02, 0.10, st);
    color += vec3(pct) * vec3(1.0, 1.0, 0.0);
    
    pct = rectangle(0.98, 0.827, 0.02, 0.173, st);
    color += vec3(pct) * vec3(1.0, 1.0, 0.0);

    gl_FragColor = vec4(color,1.0);
}
