import { Component, Vue, Prop } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import { AppState, CoronaPlot } from "@/store/types";
import { UpdateSelectedCountryMethod } from "@/store/actions";

@Component
export default class CountrySelector extends Vue {
  @Prop({ required: true }) index!: number;
  @State("coronaData") coronaData!: AppState["coronaData"];
  @State("plots") plots!: AppState["plots"];

  get selectedCountry(): CoronaPlot["selectedCountry"] {
    return this.plots[this.index].selectedCountry;
  }

  @Action("updateSelectedCountry") updateSelectedCountry!: UpdateSelectedCountryMethod;

  get countries(): string[] {
    return this.coronaData ? Object.keys(this.coronaData) : [];
  }

  onCountryChanged(evt: Event) {
    const select = evt.target as HTMLSelectElement;
    this.updateSelectedCountry({ country: select.value, index: this.index });
  }
}
