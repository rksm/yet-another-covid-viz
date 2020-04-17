import { Store, ActionContext } from "vuex";

export interface Covid19DayData {
  date: string;
  confirmed: number;
  deaths: number;
  recovered: number;
}

export interface Covid19ByCountry {
  [country: string]: Covid19DayData[];
}

export interface CoronaPlot {
  index: number;
  selectedCountry?: keyof Covid19ByCountry & string;
}

export interface AppState {
  coronaData?: Covid19ByCountry;
  plots: CoronaPlot[];
  error?: Error;
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export type ActionHandler<T = any> = (
  this: Store<AppState>,
  injectee: ActionContext<AppState, AppState>,
  payload: T
) => any;

export type DataMethod<T extends ActionHandler, Arg = Parameters<T>[1]> = (arg: Arg) => void;
export type DataMethodNoArg = () => any;
