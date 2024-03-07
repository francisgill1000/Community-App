<template>
  <div style="padding: 0px; width: 100%">
    <div id="visitors" name="visitors" height="250" width="250"></div>
    <div
      v-if="totalCount == 0"
      style="
        padding: 0px;
        margin: auto;
        text-align: center;
        vertical-align: middle;
        height: 250px;
        padding-top: 36%;
      "
    >
      No Data available
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      //   items: [
      //     { title: "Title1", value: 20 },
      //     { title: "Title2", value: 30 },
      //     { title: "Title3", value: 40 },
      //     { title: "Title4", value: 50 },
      //   ],
      totalCount: 0,
      options: {
        noData: {
          text: "There's no data",
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
        },
        title: {
          text: "Visitors",
          align: "left",
          margin: 0,
        },
        //colors: ["#033F9B", "#DC7633", "#02B64B", "#ff0000", "#808080", ""],
        colors: ["#033F9B", "#02B64B", "#ffb600", "#ff0000", "#808080", ""],

        series: [],
        chart: {
          toolbar: {
            show: false,
          },
          width: "100%", //200 //275
          type: "donut",
          height: 250,
        },
        customTotalValue: 0,
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "22px",
                  fontFamily: "Rubik",
                  color: "#dfsda",
                  offsetY: -10,
                },
                value: {
                  show: true,
                  fontSize: "16px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  color: undefined,
                  offsetY: 16,
                  formatter: function (val) {
                    return val;
                  },
                },
                total: {
                  show: true,
                  label: "Total Expecting",
                  color: "#373d3f",
                  formatter: function (val) {
                    return val.config.customTotalValue;
                  },
                },
              },
            },
          },
        },
        labels: [],
        // plotOptions: {
        //   pie: {
        //     startAngle: -90,
        //     endAngle: 270,
        //   },
        // },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "10px",
          },
        },
        legend: {
          show: true,
          fontSize: "10px",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                toolbar: {
                  show: false,
                },
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    let counter = 0;

    this.options.labels[0] = "Expecting";
    this.options.series[0] = this.items.ExpectingCount;

    this.options.labels[1] = "Checked-in";
    this.options.series[1] = this.items.CheckedInCount;

    this.options.labels[2] = "Checked-out";
    this.options.series[2] = this.items.CheckedOutCount;

    this.options.labels[3] = "Over Stay";
    this.options.series[3] = this.items.overStayCount;

    this.options.customTotalValue = this.items.ExpectingCount;

    setTimeout(() => {
      try {
        new ApexCharts(
          document.querySelector("#visitors"),
          this.options
        ).render();
      } catch (error) {}
    }, 1000);
  },
  methods: {},
  created() {
    // try {
    //   this.items.forEach((element) => {
    //     this.totalCount += element.value;
    //   });
    //   this.options.labels = this.items.map((e) => e.title);
    //   this.options.series = this.items.map((e) => e.value);
    //   new ApexCharts(document.querySelector("#pie2"), this.options).render();
    // } catch (error) {}
  },
};
</script>

<style scoped>
/* .apexcharts-legend-series {
    margin: 0px 100px 2px 0px !important;
  } */
/* #pie .apexcharts-legend-series {
    margin: 0px 50px 2px 0px !important;
  } */

/* foreignObject {
    max-width: 280px !important;
  } */
#pie .apexcharts-legend-series {
  margin: 0px 50px 2px 0px !important;
}
</style>
