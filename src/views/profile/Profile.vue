<template>
  <div class="cne">
    <ul class="cener">
      <button @click='click'>按钮</button>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
    </ul>
  </div>
</template>

<script>
  import BSscroll from 'better-scroll'
  export default {
    name: "Profile",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BSscroll(document.querySelector('.cne'), {
        //probe 侦测 0，1 不侦测  2 手指滚动过程中是侦测的  3 只要是滚动都侦测
        probeType: 3,
        //默认情况下 scroll内是不可以监听点击事件的
        //需要监听则要设置click为 true
        click: true,
        //需要上拉加载更多的时候设置 pullUpLoad 为true
        pullUpLoad: true
      })

      //监听滚动位置，需要先设置probe
      this.scroll.on('scroll', (position) => {
        // console.log(position)
      });
      this.scroll.on('pullingUp', () => {
        console.log('上啦加载更多')
        //需要添加 finishPullUp才能多次执行 pullingUp 上拉加载
        this.scroll.finishPullUp()
      })

    },
    methods: {
      click() {
        console.log(1)
      }
    }
  }

</script>
<style scoped>
  .cne {
    height: 150px;
    background: red;
    overflow: hidden;
  }
</style>