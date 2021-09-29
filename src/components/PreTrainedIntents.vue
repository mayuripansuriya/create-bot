<template>
  <div data-testId="intents.container">
    <h2 class="text-secondary text-center">Choose pre-trained intents</h2>
    <div class="text-secondary text-center">
      To help you design your bot with ease, we provide you some pre-defined
      option to be selected by your bot. You can also create your own option in
      near future
    </div>
    <div class="container d-flex flex-wrap">
      <h3 data-testId="intents.industry-name">
        Industry: {{ industry[name] }}
      </h3>
      <b-card-group name="card-group">
        <div class="d-flex align-items-center">
          <input
            class="mr-sm-2"
            type="checkbox"
            @click="toggleSelect"
            :checked="selectAll"
            data-testId="intents.select-all"
          />
          <label class="mb-0 ml-10">Select all intents </label>
        </div>
        <b-row name="card-row" class="mt-15 my-4">
          <b-col
            lg="4"
            sm="6"
            v-for="(intent, index) in data"
            :key="intent.id"
            class="mb-5 mb-lg-10"
          >
            <b-card
              name="card"
              :title="intent.name"
              :sub-title="intent.description"
              class="card-box"
              :data-testId="'intents.data' + index"
            >
              <input
                class="card-checkbox"
                type="checkbox"
                v-model="intent.checked"
                :data-testId="'intents.select' + index"
              />
              <span class="fs-12 text-secondary fw-500">
                Bot will respond &nbsp;
                <i class="text-primary fw-700">
                  <u>{{ intent.reply.text }}</u>
                </i>
                &nbsp;if it finds any of the follwing keys in the message from
                user
              </span>
              <hr />
              <b-list-group v-if="intent.trainingData.expressions.length > 0">
                <span class="text-secondary"
                  >Total Expressions:
                  {{ intent.trainingData.expressionCount }}</span
                >
                <li v-if="!intent.read">
                  {{ intent.trainingData.expressions[0].text }}
                </li>
                <div
                  @click="toggleShowMore(index)"
                  v-if="!intent.read"
                  class="text-primary"
                  :data-testId="'intents.show-more' + index"
                >
                  show more...
                </div>
                <div v-if="intent.read">
                  <li
                    v-for="expression in intent.trainingData.expressions"
                    :key="expression.id"
                  >
                    {{ expression.text }}
                  </li>
                  <div
                    @click="intent.read = false"
                    v-if="intent.read"
                    class="text-primary"
                    :data-testId="'intents.show-less' + index"
                  >
                    show less...
                  </div>
                </div>
              </b-list-group>
              <div v-else>No expressions found</div>
            </b-card>
          </b-col>
        </b-row>
      </b-card-group>
    </div>
  </div>
</template>
<style scoped>
.card-box {
  height: 100%;
  position: relative;
}
.card-checkbox {
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>
<script>
import { data } from '../assets/intents'
export default {
  name: 'IndustrySelection',
  data() {
    return {
      isIndustrySelection: true,
      data,
      showMore: {},
      industry: {
        airLines: 'Air Lines',
        eCommerce: 'E-Commerce',
        medical: 'Medical',
        education: 'Education',
      },
    }
  },
  props: {
    name: {
      default: () => null,
      type: String,
    },
  },
  created() {
    this.data = data.map((v) => ({ ...v, checked: false, read: false }))
  },
  computed: {
    selectAll: function () {
      return this.data.every(function (user) {
        return user.checked
      })
    },
  },
  methods: {
    toggleSelect() {
      var select = this.selectAll
      this.data.forEach(function (intent) {
        intent.checked = !select
      })
      this.selectAll = !select
    },
    toggleShowMore(id) {
      this.data[id].read = !this.data[id].read
    },
  },
}
</script>
