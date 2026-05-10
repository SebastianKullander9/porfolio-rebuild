precision mediump float;

varying vec2 vUv;
varying float vNoise;
varying float vColorNoise;

void main() {
  vec3 c0 = vec3(0.678, 0.847, 0.902); // baby blue
  vec3 c1 = vec3(0.900, 0.760, 0.820);
  vec3 c3 = vec3(0.678, 0.847, 0.902); // baby blue
  vec3 c2 = vec3(0.725, 0.616, 0.812); // lavender purple
  vec3 c4 = vec3(0.537, 0.741, 0.855); // steel blue

  float t = smoothstep(0.0, 1.0, vColorNoise) * 0.85;
  vec3 color = mix(c0,
    mix(c1,
      mix(c2,
        mix(c3, c4, clamp(t - 3.0, 0.0, 1.0)),
      clamp(t - 2.0, 0.0, 1.0)),
    clamp(t - 1.0, 0.0, 1.0)),
  clamp(t, 0.0, 1.0));

  gl_FragColor = vec4(color, 1.0);
}