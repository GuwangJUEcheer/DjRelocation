<template>
    <div>
        <DjSlider />
        <DjBusinessSection />
        <!-- <DjAllServices /> -->
        <DjMainBusiness />
        <DjNewsSection />
        <!-- <DjDataSection />
        <DjQuickLinks /> -->
    </div>
  </template>
  
  <script>
  import DjSlider from '../components/DjSlider.vue';
  import DjBusinessSection from '../components/DjBusinessSection.vue';
  // import DjAllServices from '../components/DjAllServices.vue';
  import DjNewsSection from '../components/DjNewsSection.vue';
  // import DjDataSection from '../components/DjDataSection.vue';
  // import DjQuickLinks from '../components/DjQuickLinks.vue';
  import DjMainBusiness from '../components/DjMainBusiness.vue';
  
  export default {
    name: 'DjHome',
    components: {
      DjSlider,
      DjBusinessSection,
      // DjAllServices,
      DjNewsSection,
      // DjDataSection,
      // DjQuickLinks,
      DjMainBusiness,
    },
  };
  </script>
  
  <style>
  </style>
  