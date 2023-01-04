<!--
Inspired by MUI
https://mui.com/material-ui/api/stack/

Don't use gap for spacing for old iOS
-->

<template>
  <component
    :is="component"
    :class="[
      'flex',
      // prettier-ignore
      {
        'w-full': fullWidth,
        'h-full': fullHeight,
        'flex-row': directionRowXs, 'lg:flex-row': directionRowLg, '3xl:flex-row': directionRow3xl, '4xl:flex-row': directionRow4xl,
        'flex-col': directionColumnXs, 'lg:flex-col': directionColumnLg, '3xl:flex-col': directionColumn3xl, '4xl:flex-col': directionColumn4xl,
        'justify-start': justifyContentFlexStartXs, 'lg:justify-start': justifyContentFlexStartLg, '3xl:justify-start': justifyContentFlexStartLg, '4xl:justify-start': justifyContentFlexStartLg,
        'justify-center': justifyContentCenterXs, 'lg:justify-center': justifyContentCenterLg, '3xl:justify-center': justifyContentCenter3xl, '4xl:justify-center': justifyContentCenter4xl,
        'justify-end': justifyContentFlexEndXs, 'lg:justify-end': justifyContentFlexEndLg, '3xl:justify-end': justifyContentFlexEnd3xl, '4xl:justify-end': justifyContentFlexEnd4xl,
        'items-start': alignItemsFlexStartXs, 'lg:items-start': alignItemsFlexStartLg, '3xl:items-start': alignItemsFlexStart3xl, '4xl:items-start': alignItemsFlexStart4xl,
        'items-center': alignItemsCenterXs, 'lg:items-center': alignItemsCenterLg, '3xl:items-center': alignItemsCenter3xl, '4xl:items-center': alignItemsCenter4xl,
        'items-end': alignItemsFlexEndXs, 'lg:items-end': alignItemsFlexEndLg, '3xl:items-end': alignItemsFlexEnd3xl, '4xl:items-end': alignItemsFlexEnd4xl,
        'space-x-0': (directionRowXs && spacing0Xs) || directionColumnXs, 'lg:space-x-0': (directionRowLg && spacing0Lg) || directionColumnLg, '3xl:space-x-0': (directionRow3xl && spacing03xl) || directionColumn3xl, '4xl:space-x-0': (directionRow4xl && spacing04xl) || directionColumn4xl,
        'space-y-0': (directionColumnXs && spacing0Xs) || directionRowXs, 'lg:space-y-0': (directionColumnLg && spacing0Lg) || directionRowLg, '3xl:space-y-0': (directionColumn3xl && spacing03xl) || directionRow3xl, '4xl:space-y-0': (directionColumn4xl && spacing04xl) || directionRow4xl,
        'space-x-1': directionRowXs && spacing6xsXs, 'lg:space-x-1': directionRowLg && spacing6xsLg, '3xl:space-x-1': directionRow3xl && spacing6xs3xl, '4xl:space-x-1': directionRow4xl && spacing6xs4xl,
        'space-y-1': directionColumnXs && spacing6xsXs, 'lg:space-y-1': directionColumnLg && spacing6xsLg, '3xl:space-y-1': directionColumn3xl && spacing6xs3xl, '4xl:space-y-1': directionColumn4xl && spacing6xs4xl,
        'space-x-1.25': directionRowXs && spacing5xsXs, 'lg:space-x-1.25': directionRowLg && spacing5xsLg, '3xl:space-x-1.25': directionRow3xl && spacing5xs3xl, '4xl:space-x-1.25': directionRow4xl && spacing5xs4xl,
        'space-y-1.25': directionColumnXs && spacing5xsXs, 'lg:space-y-1.25': directionColumnLg && spacing5xsLg, '3xl:space-y-1.25': directionColumn3xl && spacing5xs3xl, '4xl:space-y-1.25': directionColumn4xl && spacing5xs4xl,
        'space-x-1.5': directionRowXs && spacing4xsXs, 'lg:space-x-1.5': directionRowLg && spacing4xsLg, '3xl:space-x-1.5': directionRow3xl && spacing4xs3xl, '4xl:space-x-1.5': directionRow4xl && spacing4xs4xl,
        'space-y-1.5': directionColumnXs && spacing4xsXs, 'lg:space-y-1.5': directionColumnLg && spacing4xsLg, '3xl:space-y-1.5': directionColumn3xl && spacing4xs3xl, '4xl:space-y-1.5': directionColumn4xl && spacing4xs4xl,
        'space-x-2': directionRowXs && spacing3xsXs, 'lg:space-x-2': directionRowLg && spacing3xsLg, '3xl:space-x-2': directionRow3xl && spacing3xs3xl, '4xl:space-x-2': directionRow4xl && spacing3xs4xl,
        'space-y-2': directionColumnXs && spacing3xsXs, 'lg:space-y-2': directionColumnLg && spacing3xsLg, '3xl:space-y-2': directionColumn3xl && spacing3xs3xl, '4xl:space-y-2': directionColumn4xl && spacing3xs4xl,
        'space-x-2.5': directionRowXs && spacing2xsXs, 'lg:space-x-2.5': directionRowLg && spacing2xsLg, '3xl:space-x-2.5': directionRow3xl && spacing2xs3xl, '4xl:space-x-2.5': directionRow4xl && spacing2xs4xl,
        'space-y-2.5': directionColumnXs && spacing2xsXs, 'lg:space-y-2.5': directionColumnLg && spacing2xsLg, '3xl:space-y-2.5': directionColumn3xl && spacing2xs3xl, '4xl:space-y-2.5': directionColumn4xl && spacing2xs4xl,
        'space-x-3': directionRowXs && spacingXsXs, 'lg:space-x-3': directionRowLg && spacingXsLg, '3xl:space-x-3': directionRow3xl && spacingXs3xl, '4xl:space-x-3': directionRow4xl && spacingXs4xl,
        'space-y-3': directionColumnXs && spacingXsXs, 'lg:space-y-3': directionColumnLg && spacingXsLg, '3xl:space-y-3': directionColumn3xl && spacingXs3xl, '4xl:space-y-3': directionColumn4xl && spacingXs4xl,
        'space-x-4': directionRowXs && spacingSmXs, 'lg:space-x-4': directionRowLg && spacingSmLg, '3xl:space-x-4': directionRow3xl && spacingSm3xl, '4xl:space-x-4': directionRow4xl && spacingSm4xl,
        'space-y-4': directionColumnXs && spacingSmXs, 'lg:space-y-4': directionColumnLg && spacingSmLg, '3xl:space-y-4': directionColumn3xl && spacingSm3xl, '4xl:space-y-4': directionColumn4xl && spacingSm4xl,
        'space-x-5': directionRowXs && spacingMdXs, 'lg:space-x-5': directionRowLg && spacingMdLg, '3xl:space-x-5': directionRow3xl && spacingMd3xl, '4xl:space-x-5': directionRow4xl && spacingMd4xl,
        'space-y-5': directionColumnXs && spacingMdXs, 'lg:space-y-5': directionColumnLg && spacingMdLg, '3xl:space-y-5': directionColumn3xl && spacingMd3xl, '4xl:space-y-5': directionColumn4xl && spacingMd4xl,
        'space-x-6': directionRowXs && spacingLgXs, 'lg:space-x-6': directionRowLg && spacingLgLg, '3xl:space-x-6': directionRow3xl && spacingLg3xl, '4xl:space-x-6': directionRow4xl && spacingLg4xl,
        'space-y-6': directionColumnXs && spacingLgXs, 'lg:space-y-6': directionColumnLg && spacingLgLg, '3xl:space-y-6': directionColumn3xl && spacingLg3xl, '4xl:space-y-6': directionColumn4xl && spacingLg4xl,
        'space-x-40': directionRowXs && spacingXlXs, 'lg:space-x-40': directionRowLg && spacingXlLg, '3xl:space-x-40': directionRow3xl && spacingXl3xl, '4xl:space-x-40': directionRow4xl && spacingXl4xl,
        'space-y-40': directionColumnXs && spacingXlXs, 'lg:space-y-40': directionColumnLg && spacingXlLg, '3xl:space-y-40': directionColumn3xl && spacingXl3xl, '4xl:space-y-40': directionColumn4xl && spacingXl4xl,
      },
    ]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { PropType } from 'vue'

type Component = 'div' | 'h1' | 'header' | 'nav' | 'section' | 'span'
type ScreenKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
type Direction = 'column' | 'row'
type JustifyContent = 'flex-start' | 'center' | 'flex-end'
type AlignItems = 'flex-start' | 'center' | 'flex-end'
// prettier-ignore
type Spacing = 0 | '6xs' | '5xs' | '4xs' | '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export default defineNuxtComponent({
  name: 'BaseStack',

  inheritAttrs: false,

  props: {
    component: { type: String as PropType<Component>, default: 'span' },
    fullWidth: { type: Boolean, default: true },
    fullHeight: { type: Boolean, default: false },
    direction: {
      type: [Object, String] as PropType<
        { [key in ScreenKey]?: Direction } | Direction
      >,
      default: 'column',
    },
    justifyContent: {
      type: [Object, String] as PropType<
        { [key in ScreenKey]?: JustifyContent } | JustifyContent
      >,
      default: 'flex-start',
    },
    alignItems: {
      type: [Object, String] as PropType<
        { [key in ScreenKey]?: AlignItems } | AlignItems
      >,
      default: 'flex-start',
    },
    spacing: {
      type: [Object, String] as PropType<
        { [key in ScreenKey]?: Spacing } | Spacing
      >,
      default: 0,
    },
  },

  // prettier-ignore
  computed: {
    directionRow() { return this.direction === 'row' },
    directionRowXs() { const d = this.direction; return typeof d === 'object' ? d.xs === 'row' : this.directionRow },
    directionRowLg() { const d = this.direction; return typeof d === 'object' ? (d.lg === 'row' || (!d.lg && this.directionRowXs)) : this.directionRow },
    directionRow3xl() { const d = this.direction; return typeof d === 'object' ? (d['3xl'] === 'row' || (!d['3xl'] && this.directionRowLg)) : this.directionRow },
    directionRow4xl() { const d = this.direction; return typeof d === 'object' ? (d['4xl'] === 'row' || (!d['4xl'] && this.directionRow3xl)) : this.directionRow },
    directionColumn() { return this.direction === 'column' },
    directionColumnXs() { const d = this.direction; return typeof d === 'object' ? d.xs === 'column' : this.directionColumn },
    directionColumnLg() { const d = this.direction; return typeof d === 'object' ? (d.lg === 'column' || (!d.lg && this.directionColumnXs)) : this.directionColumn },
    directionColumn3xl() { const d = this.direction; return typeof d === 'object' ? (d['3xl'] === 'column' || (!d['3xl'] && this.directionColumnLg)) : this.directionColumn },
    directionColumn4xl() { const d = this.direction; return typeof d === 'object' ? (d['4xl'] === 'column' || (!d['4xl'] && this.directionColumn3xl)) : this.directionColumn },
    justifyContentFlexStart() { return this.justifyContent === 'flex-start' },
    justifyContentFlexStartXs() { const j = this.justifyContent; return typeof j === 'object' ? j.xs === 'flex-start' : this.justifyContentFlexStart },
    justifyContentFlexStartLg() { const j = this.justifyContent; return typeof j === 'object' ? (j.lg === 'flex-start' || (!j.xs && this.justifyContentFlexStartXs)) : this.justifyContentFlexStart },
    justifyContentFlexStart3xl() { const j = this.justifyContent; return typeof j === 'object' ? (j['3xl'] === 'flex-start' || (!j.xs && this.justifyContentFlexStartLg)) : this.justifyContentFlexStart },
    justifyContentFlexStart4xl() { const j = this.justifyContent; return typeof j === 'object' ? (j['4xl'] === 'flex-start' || (!j.xs && this.justifyContentFlexStart3xl)) : this.justifyContentFlexStart },
    justifyContentCenter() { return this.justifyContent === 'center' },
    justifyContentCenterXs() { const j = this.justifyContent; return typeof j === 'object' ? j.xs === 'center' : this.justifyContentCenter },
    justifyContentCenterLg() { const j = this.justifyContent; return typeof j === 'object' ? (j.lg === 'center' || (!j.xs && this.justifyContentCenterXs)) : this.justifyContentCenter },
    justifyContentCenter3xl() { const j = this.justifyContent; return typeof j === 'object' ? (j['3xl'] === 'center' || (!j.xs && this.justifyContentCenterLg)) : this.justifyContentCenter },
    justifyContentCenter4xl() { const j = this.justifyContent; return typeof j === 'object' ? (j['4xl'] === 'center' || (!j.xs && this.justifyContentCenter3xl)) : this.justifyContentCenter },
    justifyContentFlexEnd() { return this.justifyContent === 'flex-end' },
    justifyContentFlexEndXs() { const j = this.justifyContent; return typeof j === 'object' ? j.xs === 'flex-end' : this.justifyContentFlexEnd },
    justifyContentFlexEndLg() { const j = this.justifyContent; return typeof j === 'object' ? (j.lg === 'flex-end' || (!j.xs && this.justifyContentFlexEndXs)) : this.justifyContentFlexEnd },
    justifyContentFlexEnd3xl() { const j = this.justifyContent; return typeof j === 'object' ? (j['3xl'] === 'flex-end' || (!j.xs && this.justifyContentFlexEndLg)) : this.justifyContentFlexEnd },
    justifyContentFlexEnd4xl() { const j = this.justifyContent; return typeof j === 'object' ? (j['4xl'] === 'flex-end' || (!j.xs && this.justifyContentFlexEnd3xl)) : this.justifyContentFlexEnd },
    alignItemsFlexStart() { return this.alignItems === 'flex-start' },
    alignItemsFlexStartXs() { const a = this.alignItems; return typeof a === 'object' ? a.xs === 'flex-start' : this.alignItemsFlexStart },
    alignItemsFlexStartLg() { const a = this.alignItems; return typeof a === 'object' ? (a.lg === 'flex-start' || (!a.xs && this.alignItemsFlexStartXs)) : this.alignItemsFlexStart },
    alignItemsFlexStart3xl() { const a = this.alignItems; return typeof a === 'object' ? (a['3xl'] === 'flex-start' || (!a.xs && this.alignItemsFlexStartLg)) : this.alignItemsFlexStart },
    alignItemsFlexStart4xl() { const a = this.alignItems; return typeof a === 'object' ? (a['4xl'] === 'flex-start' || (!a.xs && this.alignItemsFlexStart3xl)) : this.alignItemsFlexStart },
    alignItemsCenter() { return this.alignItems === 'center' },
    alignItemsCenterXs() { const a = this.alignItems; return typeof a === 'object' ? a.xs === 'center' : this.alignItemsCenter },
    alignItemsCenterLg() { const a = this.alignItems; return typeof a === 'object' ? (a.lg === 'center' || (!a.xs && this.alignItemsCenterXs)) : this.alignItemsCenter },
    alignItemsCenter3xl() { const a = this.alignItems; return typeof a === 'object' ? (a['3xl'] === 'center' || (!a.xs && this.alignItemsCenterLg)) : this.alignItemsCenter },
    alignItemsCenter4xl() { const a = this.alignItems; return typeof a === 'object' ? (a['4xl'] === 'center' || (!a.xs && this.alignItemsCenter3xl)) : this.alignItemsCenter },
    alignItemsFlexEnd() { return this.alignItems === 'flex-end' },
    alignItemsFlexEndXs() { const a = this.alignItems; return typeof a === 'object' ? a.xs === 'flex-end' : this.alignItemsFlexEnd },
    alignItemsFlexEndLg() { const a = this.alignItems; return typeof a === 'object' ? (a.lg === 'flex-end' || (!a.xs && this.alignItemsFlexEndXs)) : this.alignItemsFlexEnd },
    alignItemsFlexEnd3xl() { const a = this.alignItems; return typeof a === 'object' ? (a['3xl'] === 'flex-end' || (!a.xs && this.alignItemsFlexEndLg)) : this.alignItemsFlexEnd },
    alignItemsFlexEnd4xl() { const a = this.alignItems; return typeof a === 'object' ? (a['4xl'] === 'flex-end' || (!a.xs && this.alignItemsFlexEnd3xl)) : this.alignItemsFlexEnd },
    spacing0() { return this.spacing === 0 },
    spacing0Xs() { const s = this.spacing; return typeof s === 'object' ? s.xs === 0 : this.spacing0 },
    spacing0Lg() { const s = this.spacing; return typeof s === 'object' ? (s.lg === 0 || (!s.lg && this.spacing0Xs)) : this.spacing0 },
    spacing03xl() { const s = this.spacing; return typeof s === 'object' ? (s['3xl'] === 0 || (!s['3xl'] && this.spacing0Lg)) : this.spacing0 },
    spacing04xl() { const s = this.spacing; return typeof s === 'object' ? (s['4xl'] === 0 || (!s['4xl'] && this.spacing03xl)) : this.spacing0 },
    spacing6xs() { return this.spacing === '6xs' },
    spacing6xsXs() { const s = this.spacing; return typeof s === 'object' ? s.xs === '6xs' : this.spacing6xs },
    spacing6xsLg() { const s = this.spacing; return typeof s === 'object' ? (s.lg === '6xs' || (!s.lg && this.spacing6xsXs)) : this.spacing6xs },
    spacing6xs3xl() { const s = this.spacing; return typeof s === 'object' ? (s['3xl'] === '6xs' || (!s['3xl'] && this.spacing6xsLg)) : this.spacing6xs },
    spacing6xs4xl() { const s = this.spacing; return typeof s === 'object' ? (s['4xl'] === '6xs' || (!s['4xl'] && this.spacing6xs3xl)) : this.spacing6xs },
    spacing5xs() { return this.spacing === '5xs' },
    spacing5xsXs() { const s = this.spacing; return typeof s === 'object' ? s.xs === '5xs' : this.spacing5xs },
    spacing5xsLg() { const s = this.spacing; return typeof s === 'object' ? (s.lg === '5xs' || (!s.lg && this.spacing5xsXs)) : this.spacing5xs },
    spacing5xs3xl() { const s = this.spacing; return typeof s === 'object' ? (s['3xl'] === '5xs' || (!s['3xl'] && this.spacing5xsLg)) : this.spacing5xs },
    spacing5xs4xl() { const s = this.spacing; return typeof s === 'object' ? (s['4xl'] === '5xs' || (!s['4xl'] && this.spacing5xs3xl)) : this.spacing5xs },
    spacing4xs() { return this.spacing === '4xs' },
    spacing4xsXs() { const s = this.spacing; return typeof s === 'object' ? s.xs === '4xs' : this.spacing4xs },
    spacing4xsLg() { const s = this.spacing; return typeof s === 'object' ? (s.lg === '4xs' || (!s.lg && this.spacing4xsXs)) : this.spacing4xs },
    spacing4xs3xl() { const s = this.spacing; return typeof s === 'object' ? (s['3xl'] === '4xs' || (!s['3xl'] && this.spacing4xsLg)) : this.spacing4xs },
    spacing4xs4xl() { const s = this.spacing; return typeof s === 'object' ? (s['4xl'] === '4xs' || (!s['4xl'] && this.spacing4xs3xl)) : this.spacing4xs },
    spacing3xs() { return this.spacing === '3xs' },
    spacing3xsXs() { const s = this.spacing; return typeof s === 'object' ? s.xs === '3xs' : this.spacing3xs },
    spacing3xsLg() { const s = this.spacing; return typeof s === 'object' ? (s.lg === '3xs' || (!s.lg && this.spacing3xsXs)) : this.spacing3xs },
    spacing3xs3xl() { const s = this.spacing; return typeof s === 'object' ? (s['3xl'] === '3xs' || (!s['3xl'] && this.spacing3xsLg)) : this.spacing3xs },
    spacing3xs4xl() { const s = this.spacing; return typeof s === 'object' ? (s['4xl'] === '3xs' || (!s['4xl'] && this.spacing3xs3xl)) : this.spacing3xs },
    spacing2xs() { return this.spacing === '2xs' },
    spacing2xsXs() { const s = this.spacing; return typeof s === 'object' ? s.xs === '2xs' : this.spacing2xs },
    spacing2xsLg() { const s = this.spacing; return typeof s === 'object' ? (s.lg === '2xs' || (!s.lg && this.spacing2xsXs)) : this.spacing2xs },
    spacing2xs3xl() { const s = this.spacing; return typeof s === 'object' ? (s['3xl'] === '2xs' || (!s['3xl'] && this.spacing2xsLg)) : this.spacing2xs },
    spacing2xs4xl() { const s = this.spacing; return typeof s === 'object' ? (s['4xl'] === '2xs' || (!s['4xl'] && this.spacing2xs3xl)) : this.spacing2xs },
    spacingXs() { return this.spacing === 'xs' },
    spacingXsXs() { const s = this.spacing; return typeof s === 'object' ? s.xs === 'xs' : this.spacingXs },
    spacingXsLg() { const s = this.spacing; return typeof s === 'object' ? (s.lg === 'xs' || (!s.lg && this.spacingXsXs)) : this.spacingXs },
    spacingXs3xl() { const s = this.spacing; return typeof s === 'object' ? (s['3xl'] === 'xs' || (!s['3xl'] && this.spacingXsLg)) : this.spacingXs },
    spacingXs4xl() { const s = this.spacing; return typeof s === 'object' ? (s['4xl'] === 'xs' || (!s['4xl'] && this.spacingXs3xl)) : this.spacingXs },
    spacingSm() { return this.spacing === 'sm' },
    spacingSmXs() { const s = this.spacing; return typeof s === 'object' ? s.xs === 'sm' : this.spacingSm },
    spacingSmLg() { const s = this.spacing; return typeof s === 'object' ? (s.lg === 'sm' || (!s.lg && this.spacingSmXs)) : this.spacingSm },
    spacingSm3xl() { const s = this.spacing; return typeof s === 'object' ? (s['3xl'] === 'sm' || (!s['3xl'] && this.spacingSmLg)) : this.spacingSm },
    spacingSm4xl() { const s = this.spacing; return typeof s === 'object' ? (s['4xl'] === 'sm' || (!s['4xl'] && this.spacingSm3xl)) : this.spacingSm },
    spacingMd() { return this.spacing === 'md' },
    spacingMdXs() { const s = this.spacing; return typeof s === 'object' ? s.xs === 'md' : this.spacingMd },
    spacingMdLg() { const s = this.spacing; return typeof s === 'object' ? (s.lg === 'md' || (!s.lg && this.spacingMdXs)) : this.spacingMd },
    spacingMd3xl() { const s = this.spacing; return typeof s === 'object' ? (s['3xl'] === 'md' || (!s['3xl'] && this.spacingMdLg)) : this.spacingMd },
    spacingMd4xl() { const s = this.spacing; return typeof s === 'object' ? (s['4xl'] === 'md' || (!s['4xl'] && this.spacingMd3xl)) : this.spacingMd },
    spacingLg() { return this.spacing === 'lg' },
    spacingLgXs() { const s = this.spacing; return typeof s === 'object' ? s.xs === 'lg' : this.spacingLg },
    spacingLgLg() { const s = this.spacing; return typeof s === 'object' ? (s.lg === 'lg' || (!s.lg && this.spacingLgXs)) : this.spacingLg },
    spacingLg3xl() { const s = this.spacing; return typeof s === 'object' ? (s['3xl'] === 'lg' || (!s['3xl'] && this.spacingLgLg)) : this.spacingLg },
    spacingLg4xl() { const s = this.spacing; return typeof s === 'object' ? (s['4xl'] === 'lg' || (!s['4xl'] && this.spacingLg3xl)) : this.spacingLg },
    spacingXl() { return this.spacing === 'xl' },
    spacingXlXs() { const s = this.spacing; return typeof s === 'object' ? s.xs === 'xl' : this.spacingXl },
    spacingXlLg() { const s = this.spacing; return typeof s === 'object' ? (s.lg === 'xl' || (!s.lg && this.spacingXlXs)) : this.spacingXl },
    spacingXl3xl() { const s = this.spacing; return typeof s === 'object' ? (s['3xl'] === 'xl' || (!s['3xl'] && this.spacingXlLg)) : this.spacingXl },
    spacingXl4xl() { const s = this.spacing; return typeof s === 'object' ? (s['4xl'] === 'xl' || (!s['4xl'] && this.spacingXl3xl)) : this.spacingXl },
  },
})
</script>
