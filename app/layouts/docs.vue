<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation')

const links = [{
  label: 'Getting Started',
  icon: 'i-heroicons-rocket-launch',
  to: '/getting-started'
}, {
  label: 'Narrative Aspects',
  icon: 'i-file-icons-jsx-atom',
  to: '/narrative-aspects'
}, {
  label: 'Muse Workspace',
  icon: 'i-hugeicons-quill-write-01',
  to: '/the-muse-workspace'
}, {
  label: 'Develop Workspace',
  icon: 'i-ph-nut-light',
  to: '/the-develop-workspace'
}, {
  label: 'Narrative Intelligence',
  icon: 'i-fluent-brain-circuit-20-regular',
  to: '/narrative-intelligence'
}, {
  label: 'Advanced Concepts',
  icon: 'i-mdi-exponent',
  to: '/advanced-concepts'
},  {
  label: 'Narrative Tasks',
  icon: 'i-solar-hamburger-menu-outline',
  to: '/narrative-tasks'
},{
  label: 'API Reference',
  icon: 'i-tabler-api',
  to: '/api-reference'
}, {
  label: 'Resources',
  icon: 'i-ri-archive-2-line',
  to: '/resources'
}, {
}]

</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <UAsideLinks :links="links" />
          <UNavigationTree :links="mapContentNavigation(navigation)" />
        </UAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
