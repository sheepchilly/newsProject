<template>
  <div>
    <el-page-header
      content="首页"
      icon=""
      title="致一科技后台管理系统"
    ></el-page-header>
    <el-card class="box-card"> 
      <el-row>
        <el-col :span="4" class="col">
          <el-avatar :size="80" :src="'http://localhost:3000'+avatarUrl" />
        </el-col>
        <el-col :span="20">
          <h3 style="line-height:100px">欢迎 {{store.state.userInfo.username}} 回来，{{welcomeText}}</h3>
        </el-col>
      </el-row>  
    </el-card>

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>公司产品</span>

          <div class="containerEchart">
          <div ref="leftchart" style="width: 600px;height: 200px" class="echarts"></div>
          <div ref="rightchart" style="width: 600px;height: 200px" class="echarts"></div>
          </div>
          <!-- <el-carousel :interval="4000" type="card" height="200px" v-if="lunbo.length">
            <el-carousel-item v-for="item in lunbo" :key="item._id">
              <div class="item" :style="{backgroundImage:`url(http://localhost:3000${item.cover })`}">
              </div>
            </el-carousel-item>
          </el-carousel> -->

        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup>
import {ref,onMounted,reactive,computed} from 'vue'
import { useStore } from 'vuex';
import axios from 'axios';
import * as echarts from 'echarts'
const store = useStore();

const avatarUrl = computed(()=> store.state.userInfo.avatar?store.state.userInfo.avatar:`https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png`)
const welcomeText = computed(()=> new Date().getHours()<12?'要开心呀':'你可能累了，喝杯拿铁提提神吧');

let result = []
let lunbo = ref([]);

const leftchart = ref();
const rightchart = ref();
const init =()=> {
    const myChart = echarts.init(leftchart.value);
    
    // 此处粘贴图表代码
    let option = {
      title: {
          text: '商品销量详情图'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
    }
    
    myChart.setOption(option)
}
const init2 =()=> {
    const myChart = echarts.init(rightchart.value);
    
    // 此处粘贴图表代码
    let option = {
      title: {
                text: '32469',
                subtext: '评价数',
                left: 'center',
                top: '35%',
                subtextStyle: {
                  fontSize: 18
                }
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                icon: 'circle',
                top: '0',
                left: 'right'
            },
            series: [
                {
                    name: '咨询数量',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    label: {
                        show: true,
                        padding: [0, -60],
                        overflow: 'none',
                        fontSize: '15',
                        fontWeight: 'bold',
                        formatter: '{d}%\n\n{c}'
                    },
                    labelLine: {
                        show: true,
                        length: 15,
                        length2: 60
                    },
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = ['#4FC3F7', '#00C853', '#F57F17']
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    data: [
                        { name: '好评', value: 1048 },
                        { name: '一般', value: 735 },
                        { name: '差评', value: 180 }
                    ]
                }
            ]
    }
    
    myChart.setOption(option)
}


onMounted(()=>{
  getData()
  init()
  init2()
})

const getData = async ()=>{
  const res = await axios.get('/adminapi/product/list')
  lunbo.value = res.data.data
  
  console.log(lunbo)
}
</script>

<style lang="scss" scoped>
.col{
  display:flex;
  justify-content: center;
  align-items: center;
}
.box-card {
  margin-top: 30px;
}
.item{
  width:100%;
  height:100%;
  background-size:cover;
}
::v-deep .el-card__body{
  padding: 0;
}
.containerEchart{
  display:flex;
}
.echarts{
  margin-top: 50px;
}
</style>