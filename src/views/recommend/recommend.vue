<template>
  <div class="recommend" ref="recommend">
    
  </div>
</template>

<script>
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'
export default {
  created() {
    this._getRecommend()
  },
  methods: {
    _getRecommend() {
      getRecommend().then((data) => {
        if (data.code === ERR_OK) {
          console.log(data)
        }
      })
    }
  }
}
</script>