<template>
  <div class="param-info" v-if='Object.keys(paramInfo).length!==0'>
    <table class="param-table" v-for='(table,index) in paramInfo.sizes' :keu='index'>
      <tr v-for='(tr,indey) in table' :key='indey'>
        <td v-for='(td,indez) in tr' :key='indez'>{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info,index) in paramInfo.infos">
        <td class="info-key">{{info.key}}</td>
        <td class="info-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if='paramInfo.image.length!==0'>
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailParamInfo',
    props: {
      paramInfo: {
        type: Object,

      }
    }
  }
</script>
<style scoped>
  .param-info {
    padding: 20px 10px;
    border-bottom: 5px solid #f2f5f8;
    font-size: 14px;
  }

  .param-info tr td {
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .param-table {
    width: 100%;
    border-collapse: collapse;
  }

  .param-table tr {
    height: 45px;
  }

  .info-param {
    border-top: 1px solid rgba(100, 100, 100, .1);
  }

  .info-param tr {
    height: 45px;

  }

  .info-key {
    width: 95px;
  }

  .info-value {
    color: #eb4868;
  }

  .info-img img {
    width: 100%;
  }
</style>