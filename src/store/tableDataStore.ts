import { ref } from "vue";
import { defineStore } from "pinia";
import { TableDataType } from "@/types/TableDataType";
import { ScoresProtocol } from "../services/ScoresProtocol";

const data = ref<TableDataType>();

export const useTableDataStore = defineStore("tableData", {
  state: () => ({
    queryType: undefined as string | undefined,
  }),

  actions: {
    async loadData(startDate: string, endDate: string, queryFor: string) {
      const unixStartDate = Math.floor(new Date(startDate).getTime() / 1000);
      const unixEndDate = Math.floor(new Date(endDate).getTime() / 1000);
      const protocol = new ScoresProtocol(unixStartDate, unixEndDate);
      if (queryFor == "Category Score") {
        this.queryType = "Category Score";
        const res = await protocol.getAggregatedCategoryScoresForPeriod();
        const a = [];
        for (let i = 0; i < 4; i++) {
          const result = res.toObject().dataList[i];
          a.push({
            categoryName: result.categoryName,
            ratingCount: result.ratingCount,
            dates: result.datesList,
            score: result.score,
          });
        }
        data.value = a;
      } else if (queryFor == "Ticket Score") {
        this.queryType = "Ticket Score";
        const res = await protocol.getTicketScoresForPeriod();
        data.value = res.toObject().ticketScoresList;
      } else {
        this.queryType = "Overall Score";
        const res = await protocol.getOverallScoreForPeriod();
        data.value = res.getScore();
      }
    },
    getData() {
      if (data.value) {
        return data.value;
      }
    },
  },

  getters: {},
});
