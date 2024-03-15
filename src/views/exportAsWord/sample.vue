<template>
  <el-button type="primary" @click="exportWord">导出</el-button>
  <div id="export1" ref="templateRef">
    <div class="table_wrap">
      <h1>一、本月工作情况</h1>
      <div>1.1 配套管网日程巡查</div>
      <el-table
        id="table_wrap"
        :data="tableData"
        border
        :span-method="arraySpanMethod"
        :row-style="tableRowStyle"
        :cell-style="tableCellStyle"
        :header-cell-style="tableHeaderCellStyle"
      >
        <!-- :row-class-name="tableRowClassName" -->
        <el-table-column type="index" label="序号" />
        <el-table-column prop="name" label="运维项目" />
        <el-table-column prop="amount1" label="单位" />
        <el-table-column label="个片区巡查情况">
          <el-table-column prop="amount2" label="高薪区区域" />
          <el-table-column prop="amount3" label="符离镇区域" />
        </el-table-column>
        <el-table-column prop="amount1" label="合计" />
        <template #append> 表-YYYY年度M月配套管网巡查情况统计表 </template>
      </el-table>
      <el-table empty-text=" ">
        <el-table-column label="高薪区区域">
          <el-table-column>
            <template #header>
              <p class="ProseMirror">
                <img style="width: 100pt; height: 100pt; object-fit: cover" :src="tableImg" />
              </p>
            </template>
          </el-table-column>
          <el-table-column>
            <template #header>
              <p class="ProseMirror">
                <img style="width: 100pt; height: 100pt; object-fit: cover" :src="tableImg" />
              </p>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="符离镇区域">
          <el-table-column>
            <template #header>
              <p class="ProseMirror">
                <img style="width: 100pt; height: 100pt; object-fit: cover" :src="tableImg" />
              </p>
            </template>
          </el-table-column>
          <el-table-column>
            <template #header>
              <p class="ProseMirror">
                <img style="width: 100pt; height: 100pt; object-fit: cover" :src="tableImg" />
              </p>
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>
      <div style="page-break-after: always"></div>
      <p>Page 1</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CellStyle, ColumnStyle, TableColumnCtx } from "element-plus";
import { exportAsDocx } from "./utils/exportAsWord";

interface SpanMethodProps {
  row: any;
  column: TableColumnCtx<any>;
  rowIndex: number;
  columnIndex: number;
}
const templateRef = ref();
const tableData = [
  {
    id: "12987122",
    name: "Tom",
    amount1: "234",
    amount2: "3.2",
    amount3: 10
  },
  {
    id: "12987123",
    name: "Tom",
    amount1: "165",
    amount2: "4.43",
    amount3: 12
  },
  {
    id: "12987124",
    name: "φ700球墨铸铁五防井盖（快速高强度速干水泥修复）",
    amount1: "324",
    amount2: "1.9",
    amount3: 9
  },
  {
    id: "12987125",
    name: "Tom",
    amount1: "621",
    amount2: "2.2",
    amount3: 17
  },
  {
    id: "12987126",
    type: "trajectory",
    name: "Tom",
    amount1: "539",
    amount2: "4.1",
    amount3: 15
  }
];
const tableImg = "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg";
const exportWord = () => {
  exportAsDocx(`#export1`, "月报.docx");
};
// 单元格
const tableRowStyle: ColumnStyle<any> = ({ row }) => {
  if (row.type === "trajectory") return { background: "#fbe4d5" };
  else return {};
};
// 表头
const tableCellStyle: CellStyle<any> = ({ columnIndex }) => {
  if ([0, 2].includes(columnIndex)) return { width: "1cm" };
  else if ([3, 4, 5].includes(columnIndex)) return { width: "2cm" };
  else return {};
};
const tableHeaderCellStyle: CellStyle<any> = ({ rowIndex, columnIndex }) => {
  if (rowIndex === 0) {
    if ([0, 2].includes(columnIndex)) return { width: "1cm" };
    else if ([3, 4].includes(columnIndex)) return { width: "2cm" };
    else return {};
  } else if (rowIndex === 1) return { width: "2cm" };
  else return {};
};
const arraySpanMethod = ({ row, columnIndex }: SpanMethodProps) => {
  if (row.type === "trajectory") {
    if (columnIndex === 5) {
      return [3, 3];
    } else if (columnIndex >= 3) {
      return [0, 0];
    }
  }
};
</script>

<style lang="scss">
.table_wrap {
  width: 16.89cm;
  table,
  .el-table__append-wrapper {
    text-align: center;
  }
  tr td,
  tr th {
    // width: 2cm;
    text-align: center;
    border: 1px solid #090909;
  }
}
</style>
./utils/exportAsWord
