import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { fetchData, updateSelectedCountry, addPlotWithIndex, removePlotWithIndex } from "./actions";
import { changeData, setSelectedCountry, addPlot, removePlot } from "./mutations";
import { AppState } from "./types";

Vue.use(Vuex);

const store: StoreOptions<AppState> = {
  state: {
    coronaData: undefined,
    plots: [{ index: 0, selectedCountry: "Germany" }]
  },
  mutations: {
    changeData,
    setSelectedCountry,
    addPlot,
    removePlot
  },
  actions: {
    fetchData,
    updateSelectedCountry,
    addPlotWithIndex,
    removePlotWithIndex
  },
  modules: {}
};

export default new Vuex.Store<AppState>(store);
