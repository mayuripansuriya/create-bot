<template>
  <div class="container m-10">
    <div v-if="isIndustrySelection">
      <h1 class="text-secondary text-center">Basic Details</h1>
      <div class="text-secondary text-center">
        Based on the type of industry you select. We will provide you, We will
        provide you some pre-trained intents to select for your bot
      </div>
      <select
        class="custom-select mt-sm-2"
        @change="onChange"
        data-testId="industry.select"
      >
        <option value="" disabled="disabled" selected>Select industry...</option>
        <option value="airLines">Air Lines</option>
        <option value="eCommerce">E-Commerce</option>
        <option value="medical">Medical</option>
        <option value="education">Education</option>
      </select>
      <div class="m-10 m-lg-10">
        <button
          type="button"
          data-testId="industry.next-btn"
          class="btn btn-primary float-right mt-sm-2"
          @click="setIsIndustrySelection()"
          :disabled="!name"
        >
          Next
        </button>
      </div>
    </div>
    <div v-else>
      <PreTrainedIntents :name="name" />
    </div>
  </div>
</template>

<script>
import PreTrainedIntents from '../components/PreTrainedIntents'
export default {
  name: 'IndustrySelection',
  components: {
    PreTrainedIntents,
  },
  data() {
    return {
      isIndustrySelection: true,
      name: null,
    }
  },
  methods: {
    setIsIndustrySelection() {
      this.isIndustrySelection = false
    },
    onChange(event) {
      this.name = event.target.value
    },
  },
}
</script>
