<template>
  <div v-if="Object.keys(commentInfo).length!==0" class="comment-info">
    <div class="info-header">
      <div class="header-left">用户评价</div>
      <div class="header-right">更多></div>
    </div>
    <div class="info-uesr">
      <div><img :src="commentInfo.user.avatar" alt="">
        <span> {{commentInfo.user.uname}}</span>
      </div>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item, index) in commentInfo.images">
      </div>
    </div>
    <div class='info-bottom'>热门推荐</div>
  </div>
</template>
<script>
  //导入formatDate方法时间轴来定义用户评价时间
  import { formatDate } from "@/common/utils";
  export default {
    name: 'DetaCommentInfo',
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      // 定义过滤器，用来显示客户评价时间
      //commentInfo.created 是从1970.1.1开始到现在的秒数
      showDate: function (value) {
        let date = new Date(value * 1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style>
  .comment-info {
    padding: 10px 12px;
    color: #222;
  }

  .info-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .header-left {
    float: left;
  }

  .header-right {
    float: right;
    padding-right: 10px;
    font-size: 14px;
  }

  .info-uesr img {
    height: 42px;
    width: 42px;
    border-radius: 50%;
  }

  .info-uesr {
    padding: 10px 5px;
  }

  .info-uesr span {
    position: relative;
    top: -15px;
    font-size: 15px;
    margin-left: 15px;
  }

  .info-detail p {
    font-size: 14px;
    color: #777;
    line-height: 1.5;
  }

  .info-other {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }

  .info-other .date {
    margin-right: 8px;
  }


  .info-imgs {
    margin-top: 10px;
    padding-bottom: 15px;
  }

  .info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }

  .info-bottom {
    border-top: 5px solid #f2f5f8;
    padding-top: 15px;
    line-height: 40px;
    padding-left: 8px;
    font-size: 15px;
    color: #333;
  }
</style>