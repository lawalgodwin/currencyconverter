<template>
  <v-container> <SelectComponent /></v-container>
</template>

<script>
import axios from "axios";
import SelectComponent from "./SelectCountry";
export default {
  name: "HelloWorld",
  components: {
    SelectComponent,
  },
  data() {
    return {
      countries: [],
    };
  },
  computed: {},
  methods: {
    async fetchCoutriesDetails(url) {
      let result = await axios.get(url);
      console.log(result);
    },
  },
  created() {
    // this.fetchCoutriesDetails(
    //   "http://countryapi.gear.host/v1/Country/getCountries"
    // );
    // console.log(cc.numbers());
  },
};
</script>
