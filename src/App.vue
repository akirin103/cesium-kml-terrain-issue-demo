<script setup lang="ts">
import { EllipsoidTerrainProvider, Viewer, createWorldTerrainAsync, KmlDataSource } from 'cesium';
import { onMounted, ref } from 'vue';

const kmlPath = 'https://raw.githubusercontent.com/CesiumGS/cesium/main/Apps/SampleData/kml/gdpPerCapita2008.kmz';

const viewer = ref<Viewer | null>()

const terrainOn = ref(false)
const kmlOn = ref(false)

onMounted(async() => {
  viewer.value = new Viewer('cesiumContainer', {
    terrainProvider: await createWorldTerrainAsync()
  });
});

const toggleTerrain = async() => {
  if (viewer.value) {
    let terrainProvider;
    if (terrainOn.value) {
      terrainProvider = new EllipsoidTerrainProvider()
    } else {
      terrainProvider = await createWorldTerrainAsync() 
    }
    viewer.value.terrainProvider = terrainProvider
    terrainOn.value = !terrainOn.value
  }
}

const toggleKml = async() => {
  if (viewer.value) {
    if (kmlOn.value) {
      viewer.value.dataSources.removeAll()
    } else {
      const dataSource = await KmlDataSource.load(kmlPath)
      viewer.value.dataSources.add(dataSource)
    }
    kmlOn.value = !kmlOn.value
  }
}
</script>

<template>
  <main>
    <div class="relative w-full h-screen z-10">
      <div id="cesiumContainer" class="fixed w-full h-screen top-0 left-0" />

      <div class="fixed top-4 left-4 w-48 flex flex-col space-y-4">
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
          @click="toggleTerrain"
        >
          {{ terrainOn ? 'Terrain Off' : 'Terrain On' }}
        </button>
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
          @click="toggleKml"
        >
          {{ kmlOn ? 'KML Off' : 'KML On' }}
        </button>
      </div>
    </div>
  </main>
</template>
