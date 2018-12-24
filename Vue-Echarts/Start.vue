<template>
    <div id='Start' style="text-align:center">
        <h1>vue Echarts</h1>
        <div id='vueEcharts'></div>
    </div>
</template>

<script>
    import * as echarts from 'echarts';
    // Vue.proptype.$echarts=echarts;
    // let myChart = this.$echarts.init(document.getElementById('myChart'))
    export default {
        name: 'Start',
        data() {
            return {
                // option:{
                //     title: {},
                //     tooltip: {},
                //     legend: {},
                //     xAxis: {},
                //     yAxis: {},
                //     series: [],
                // }
                option: {
                    title: {
                        // 配置可视化标题
                        text: "MyEcharts示例",

                    },
                    tooltip: {
                        // tooltip 配置鼠标hover显示提示的
                    },

                    legend: {
                        // 配置图例
                        // 注意 legend 与series的name 需要一致,否则图例无法显示
                        data: ['销量', '收入'],
                    },
                    xAxis: {
                        // x轴数据标签
                        data: ['x1', 'x2', 'x3', 'x4', 'x5'],
                    },
                    yAxis: {
                    },
                    series: [
                        //series 配置数据
                        //name 与legend中配置的一致
                        //type 配置图表类型 如bar、line、pie...etc
                        //data 配置数据，不同图表的data数据结构不同
                        {

                            name: '销量',
                            type: 'bar',
                            data: [5, 20, 36, 12, 70],

                        },
                        {
                            name: '收入',
                            type: 'line',
                            data: [12, 13, 14, 17, 21],
                        }

                    ],
                }
            }
        },
        computed: {

        },
        mounted () {
            let charts = echarts.init(document.getElementById('vueEcharts'));
            charts.setOption(this.option);
        },
        updated () {
            charts.setOption(this.option);
        }

    }
</script>

<style scoped>
    #vueEcharts {
        width: 800px;
        height: 600px;
        padding: auto;
        margin: auto;
    }
</style>