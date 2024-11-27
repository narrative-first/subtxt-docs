<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<NavItem[]>('navigation', [])

const { header } = useAppConfig()

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
}, {
  label: 'Narrative Agents',
  icon: 'i-solar-hamburger-menu-outline',
  to: '/narrative-agents'
}, {
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
  <UHeader>
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
      </template>
      <template v-else>
        Subtxt with Muse <UBadge
          label="Docs"
          variant="subtle"
          class="mb-0.5"
        />
      </template>
    </template>

    <template
      v-if="header?.search"
      #center
    >
      <UContentSearchButton class="hidden lg:flex" />
    </template>

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
        :label="null"
        class="lg:hidden"
      />

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #panel>
      <UAsideLinks :links="links" />
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
