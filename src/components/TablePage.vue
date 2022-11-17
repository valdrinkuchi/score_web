<script setup lang="ts">
import { useTableDataStore } from "@/store/tableDataStore";

const store = useTableDataStore();
</script>

<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <div class="inline-block min-w-full align-middle">
        <div class="overflow-hidden">
          <pre>{{ JSON.stringify(store.getData(), null, 2) }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
