import { Mutation } from "vuex";
import { AppState, Covid19ByCountry, CoronaPlot } from "./types";

export const changeData: Mutation<AppState> = function(state, payload: { data: Covid19ByCountry }) {
  state.coronaData = payload.data;
};

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export interface SetSelectedCountryPayload {
  country: keyof Covid19ByCountry & string;
  index: number;
}
export const setSelectedCountry: Mutation<AppState> = function(
  state,
  payload: SetSelectedCountryPayload
) {
  const plot = state.plots[payload.index];
  if (plot) {
    plot.selectedCountry = payload.country;
  }
};

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export const addPlot: Mutation<AppState> = (state, plot: CoronaPlot) => {
  state.plots = state.plots.concat(plot);
};

export const removePlot: Mutation<AppState> = (state, index: number) => {
  state.plots = state.plots.slice(0, index).concat(state.plots.slice(index + 1));
};
