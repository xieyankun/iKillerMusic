<template>
  <div class="recommend" ref="recommend">
    
  </div>
</template>

<script>
import {getRecommend} from 'api/recommend'
export default {
  created() {
    this._getRecommend()
  },
  methods: {
    _getRecommend() {
      getRecommend().then((data) => {
        console.log(data)
      })
    }
  }
}
</script>