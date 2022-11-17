<script setup lang="ts">
import { ref } from "vue";
import { useTableDataStore } from "@/store/tableDataStore";

const store = useTableDataStore();
const startDate = ref<string>("2019-03-01");
const endDate = ref<string>("2019-03-09");
const picked = ref<string>("Category Score");

async function categoryScores() {
  return await store.loadData(startDate.value, endDate.value, picked.value);
}
</script>
<template>
  <div class="flex items-center justify-center p-24">
    <div class="mx-auto w-full max-w-[550px]">
      <form action="">
        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label
                for="start_date"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Start Date
              </label>
              <input
                type="date"
                name="start_date"
                id="start_date"
                v-model="startDate"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label
                for="end_date"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                End Date
              </label>
              <input
                type="date"
                name="end_date"
                id="end_date"
                v-model="endDate"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>

        <div>
          <div
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium"
          >
            <input
              type="radio"
              id="category_score"
              value="Category Score"
              v-model="picked"
            />
            <label class="py-2 px-2" for="category_score">Category Score</label>

            <input
              type="radio"
              id="ticket_score"
              value="Ticket Score"
              v-model="picked"
            />
            <label class="py-2 px-2" for="ticket_score">Ticket Score</label>
            <input
              type="radio"
              id="overall_score"
              value="Overall Ticket Score"
              v-model="picked"
            />
            <label class="py-2 px-2" for="ticket_score"
              >Overall Ticket Score</label
            >
          </div>
          <div class="py-4">
            <inpit
              type="button"
              class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              value="Submit"
              @click="categoryScores()"
              >Submit</inpit
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
