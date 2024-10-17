# Cesium KML Terrain Issue Demo

This repository demonstrates an issue with Cesium when switching terrain providers while loading KML data. It uses Vue 3 and Vite for development, showcasing how the error occurs when toggling between different terrain providers and loading KML files.

## Description

When using the demo application, an error occurs in the console under the following sequence of actions:

1. Click the KML On button to load the KML file.
2. Click the KML Off button to remove the KML file.
3. Click the Terrain On button to switch the terrain provider.
   
After these steps, the following error appears in the console:

```
cesium.js?v=c3a5bb9c:108503 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading '_scene')
    at Billboard._updateClamping (cesium.js?v=c3a5bb9c:108503:28)
    at Billboard._updateClamping (cesium.js?v=c3a5bb9c:108499:13)
    at Proxy.<anonymous> (cesium.js?v=c3a5bb9c:109376:27)
    at Event.raiseEvent (cesium.js?v=c3a5bb9c:17660:20)
    at Proxy.set (cesium.js?v=c3a5bb9c:192343:38)
    at Reflect.set (<anonymous>)
    at MutableReactiveHandler.set (vue.js?v=c3a5bb9c:1224:28)
    at Proxy.set (cesium.js?v=c3a5bb9c:219440:36)
    at Reflect.set (<anonymous>)
    at MutableReactiveHandler.set (vue.js?v=c3a5bb9c:1224:28)
```

https://github.com/user-attachments/assets/bd12219a-7fb8-45a2-8ac9-38300f05eec3

I tested equivalent code in Cesium Sandcastle using the same sequence of actions, but the error did not occur there. 

[sandcastle demo](https://sandcastle.cesium.com/#c=jZNBb9swDIX/CueTAwRyt9OwOkHbrKdmWIFk3cUXVWI8IbRkSLKDdOh/nxTbSdq6WI+myE/vPdHCaOehVbhDCzPQuIMFOtVU7OFQS4tEHL4XRnuuNNoimcLfQgN4tDZU7q1plUT7DfiOKz+MC4vc429jSa67xmu31yKdTAv9PLksdKEJPUju+co0VmC8vSE6nKy4loI7T8i4lGtj6JHbm8Z7o4OgtSlLQuixUQ+PaNg0WnhlNKSTTqHapJ0z9korqOCaa4FmM+i9JVK1M2pQO7T2KIB3SLMP2r6MlGdAcvhf4tkrvCdrAB7D/FBkdz+WcKu98vuY2khekH46vcjRughLYgKYTBlYS8NlJBVJpwFePmIv/K6i78dymOQyjDKWrXhVE8ajbFtRVsr6Hu2C18rzLxcXX9m2ejqB+4ROfBfNpWcSR2J9qfaXfqt3BGuxMi1eE6WjpvrNHAJPpknu/J5w3vUCXKmqNtZDYykNLj0Gl2ERXPbYiC16JpwbwHl2PppL1YKSs5H/DARx58LJJty+Uk9YJPM8C/1vRmO8Spc/W7TE97Htz+f5sisyxvIsfI5P+m5RXpH/AQ)

## Project Setup

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/akirin103/cesium-kml-terrain-issue-demo.git
    ```

2. Navigate to the project directory:
    ```bash
    cd cesium-kml-terrain-issue-demo
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```
