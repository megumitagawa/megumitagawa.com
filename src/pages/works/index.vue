<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'WorksPage',

  middleware({ redirect }) {
    redirect(301, '/works/page/1')
  },
})
</script>
