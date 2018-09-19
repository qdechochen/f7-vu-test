<template>
  <f7-app :params="f7params">
    <f7-statusbar></f7-statusbar>
    <!-- Main View -->
    <f7-view id="main-view" main url="/" :pushState="true">
    </f7-view>
  </f7-app>
</template>

<script>
import routes from '@/routes';
import HomePage from './pages/home';

export default {
  name: 'app',
  components: {
    HomePage,
  },
  data() {
    return {
      f7params: {
        id: 'online.ataw.f7-starter',
        name: this.$t('app_name'),
        theme: 'auto',
        routes: routes,
      },
    };
  },
};
</script>
