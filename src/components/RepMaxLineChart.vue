<script>
  import { Line } from 'vue-chartjs'

  export default {
    name: 'RepMaxDotChart',
    extends: Line,
    props: ['sets', 'exerciseName'],
    mounted () {
      if (this.sets.length === 0) {
        return
      }

      this.renderChart({
        labels: this.sets.map(s => s.performedOn),
        datasets: [
          {
            label: `Estimated 1 rep maxes for ${this.exerciseName}`,
            data: this.sets.map(s => s.estimated1Rm)
          }
        ]
      })
    }
  }
</script>
