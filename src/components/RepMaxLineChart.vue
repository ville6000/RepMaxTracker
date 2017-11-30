<script>
  import { Line } from 'vue-chartjs'
  import oneRepMax from '@/mixins/oneRepMax'

  export default {
    name: 'RepMaxDotChart',
    extends: Line,
    mixins: [oneRepMax],
    props: ['sets', 'exerciseName'],
    mounted () {
      if (this.sets.length === 0) {
        return
      }

      this.renderChart({
        labels: this.sets.map(s => s.date),
        datasets: [
          {
            label: `Estimated 1 rep maxes for ${this.exerciseName}`,
            data: this.sets.map(s => this.oneRepMax(s))
          }
        ]
      })
    }
  }
</script>
