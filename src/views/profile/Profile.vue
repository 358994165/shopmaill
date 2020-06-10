<template>
  <div class="top">
    <scroll class="sss">
      <ul>
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
        <li>25</li>
        <li>25</li>
        <li>25</li>
        <li>25</li>
        <li>25</li>
        <li>25</li>
        <li>25</li>
        <li>25</li>
        <li>25</li>
        <li>25</li>
        <li>25</li>
        <li>25</li>
        <li>25</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  export default {
    name: "Profile",
    components: {
      Scroll
    },
  }

</script>
<style scoped>
  .top {
    height: 100vh;
    background: red;
  }

  .sss {
    height: calc(100% - 49px);
  }
</style>