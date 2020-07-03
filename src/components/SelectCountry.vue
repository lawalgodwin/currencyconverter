<template>
  <v-container fluid>
    <h1>Exchange made easy</h1>
    <v-spacer />
    <h5>from</h5>
    <v-text-field type="number" placeholder="unit(s)" v-model="amount" />
    <vSelect
      :options="countryCurrency"
      v-model="froField"
      class="custom"
      :selected="countryCurrency[106]"
    />
    <h5>to</h5>
    <vSelect :options="countryCurrency" class="custom" v-model="toField" />
    <v-btn class="ma-2" dark @click="convert">
      <v-icon dark left>mdi-minus_circle</v-icon>convert
    </v-btn>
    <div class="conversion">{{conversionValue}} {{unit}}</div>
  </v-container>
</template>

<script>
import axios from "axios";
// import cc from "currency-codes";
import vSelect from "vue-select";
export default {
  name: "inputselection",
  components: {
    vSelect
  },
  data() {
    return {
      countries: [],
      froInitialvalue: "",
      froField: "",
      unit: "",
      toInitialvalue: "",
      toField: "" || this.toInitialvalue,
      currencyoAgainstUSD: "",
      conversionValue: "",
      amount: "" || 1
    };
  },
  computed: {
    countryCurrency() {
      let keys = Object.keys(this.countries);
      let value = keys.map(key => `${key}  ${this.countries[key]}`);
      return value;
    }
  },
  watch: {},
  methods: {
    async fetchCoutriesDetails(url) {
      let result = await axios.get(url);
      this.countries = result.data.currencies;
      // console.log(this.countries);
    },
    async convert() {
      let froCode = this.froField.toString().substring(0, 3);
      let toCode = this.toField.toString().substring(0, 3);
      let result = await axios.get(
        `${process.env.VUE_APP_BASEURL}/live?access_key=${process.env.VUE_APP_APIKEY}&currencies=${froCode}, ${toCode}&source=USD`
      );
      this.currencyAgainstUSD = result.data.quotes;
      let fro = Object.values(this.currencyAgainstUSD)[0];
      let to = Object.values(this.currencyAgainstUSD)[1];
      this.conversionValue = this.amount * (to / fro).toFixed(4);
      this.unit = this.toField.toString().substring(3);
      // console.log(`updated with ${this.unit}`);
    }
  },
  created() {
    this.fetchCoutriesDetails(
      `${process.env.VUE_APP_BASEURL}/list?access_key=${process.env.VUE_APP_APIKEY}`
    );
  },
  updated() {
    // this.unit = this.toField
    //   .toString()
    //   .substring(0, 3)
    //   .substring(3, 7);
    // console.log(`updated with ${this.unit}`);
  }
};
</script>

<style lang="css">
h1 {
  margin-bottom: 20px;
}
.custom {
  margin-top: 40px;
  margin-bottom: 30px;
  z-index: 50;
}
.conversion {
  margin: 40px auto;
  width: fit-content;
  background-color: tomato;
  padding: 10px;
  border-radius: 2em;
  color: white;
}
</style>
