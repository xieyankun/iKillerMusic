<template>
  <div class="recommend" ref="recommend">
    <!-- <slider>
      <div v-for="item in recommends">
        <a :href="item.linkUrl">
          <img class="needsclick" @load="loadImage" :src="item.picUrl">
        </a>
      </div>
    </slider> -->
  </div>
</template>

<script>
// import {getRecommend} from 'api/recommend'
// import {ERR_OK} from 'api/config'
// import slider from 'base/slider/slider'
// export default {
//   components: {
//     slider
//   },
//   data() {

//   },
//   created() {
//     this._getRecommend()
//   },
//   methods: {
//     _getRecommend() {
//       getRecommend().then((data) => {
//         if (data.code === ERR_OK) {
//           console.log(data)
//           // this.recommends = data.data.slider
//         }
//       })
//     }
//   }
// }
</script>