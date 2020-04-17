import { Action, Store, ActionContext } from "vuex";
import { AppState, ActionHandler, DataMethod, DataMethodNoArg, Covid19ByCountry } from "./types";
import { SetSelectedCountryPayload } from "./mutations";

// export type FetchDataActionHandler = ActionHandler<number>;
// export type FetchDataMethod = DataMethod<FetchDataActionHandler>;

export type FetchDataActionHandler = ActionHandler;
export type FetchDataMethod = DataMethodNoArg;

export const fetchData: FetchDataActionHandler = async function(_context) {
  const res = await fetch("https://pomber.github.io/covid19/timeseries.json");
  if (!res.ok) {
    this.commit("error", new Error(`data request error: ${res.status} ${res.statusText}`));
    return;
  }
  try {
    const data = await res.json();
    this.commit("changeData", { data });
  } catch (err) {
    this.commit("error", new Error(`error parsing data`));
  }
};

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export type UpdateSelectedCountryHandler = ActionHandler<SetSelectedCountryPayload>;
export type UpdateSelectedCountryMethod = DataMethod<UpdateSelectedCountryHandler>;
export const updateSelectedCountry: UpdateSelectedCountryHandler = (
  ctx,
  payload: SetSelectedCountryPayload
) => {
  ctx.commit("setSelectedCountry", payload);
};

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export type AddPlotHandler = ActionHandler<number>;
export type AddPlotDataMethod = DataMethod<AddPlotHandler>;
export const addPlotWithIndex: AddPlotHandler = (ctx, index: number) => {
  const plots = ctx.state.plots;
  const selectedCountry = plots.length ? plots[plots.length - 1].selectedCountry : "Germany";
  ctx.commit("addPlot", { index, selectedCountry });
};

export type RemovePlotHandler = ActionHandler<number>;
export type RemovePlotDataMethod = DataMethod<RemovePlotHandler>;
export const removePlotWithIndex: RemovePlotHandler = (ctx, index: number) => {
  ctx.commit("removePlot", index);
};
