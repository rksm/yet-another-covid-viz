import { Component, Vue, Prop } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import { Plotly } from "vue-plotly";
import { AppState, CoronaPlot } from "@/store/types";
import { Data, Datum, Layout } from "plotly.js";
import { RemovePlotDataMethod } from "@/store/actions";

interface Plot extends Data {
  x: Datum[];
  y: Datum[];
}

@Component({
  components: {
    Plotly
  }
})
export default class CoronaPlotComponent extends Vue {
  @Prop({ required: true }) index!: number;
  @State("coronaData") coronaData!: AppState["coronaData"];
  @State("plots") plots!: AppState["plots"];
  @Action("removePlotWithIndex") removePlotWithIndex!: RemovePlotDataMethod;

  get selectedCountry(): CoronaPlot["selectedCountry"] {
    return this.plots[this.index].selectedCountry;
  }

  get layout(): Partial<Layout> {
    return {
      title: this.selectedCountry!
    };
  }

  get countryData(): Data[] {
    const { coronaData, selectedCountry } = this;
    if (!coronaData || !selectedCountry || !(selectedCountry in coronaData)) return [];

    const data = coronaData[selectedCountry];
    const confirmed: Plot = {
      x: [],
      y: [],
      type: "scatter",
      name: "confirmed"
    };
    const active: Plot = { x: [], y: [], type: "scatter", name: "active" };
    const dead: Plot = { x: [], y: [], type: "scatter", name: "dead" };
    for (const ea of data) {
      confirmed.x.push(ea.date);
      dead.x.push(ea.date);
      active.x.push(ea.date);
      confirmed.y.push(ea.confirmed);
      dead.y.push(ea.deaths);
      active.y.push(ea.confirmed - ea.recovered - ea.deaths);
    }
    return [confirmed, dead, active];
  }

  onRemovePlot() {
    this.removePlotWithIndex(this.index);
  }
}
