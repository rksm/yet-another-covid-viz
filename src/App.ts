import { Component, Vue } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import CoronaPlot from "./components/CoronaPlot.vue";
import CountrySelector from "./components/CountrySelector.vue";
import { ActionMethod } from "vuex";
import { FetchDataMethod, AddPlotDataMethod } from "./store/actions";
import { AppState } from "./store/types";

@Component({
  components: {
    CoronaPlot,
    CountrySelector
  }
})
export default class App extends Vue {
  @State("plots") plots!: AppState["plots"];
  @Action("fetchData") fetchData!: FetchDataMethod;
  @Action("addPlotWithIndex") addPlot!: AddPlotDataMethod;

  onAddPlot() {
    this.addPlot(this.plots.length);
  }

  mounted() {
    this.fetchData();
  }
}
