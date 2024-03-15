<template>
  <div>
    <el-button type="primary" @click="exportWord">导出word</el-button>
  </div>
</template>
<script lang="ts" setup>
import docxtemplater from "docxtemplater"; // 模板插值替换
import PizZip from "pizzip";
import JSZipUtils from "jszip-utils"; // 解析文件
import { saveAs } from "file-saver"; // 保存文件
import ImageModule from "docxtemplater-image-module-free"; // 拓展插入图片
import expressionParser from "docxtemplater/expressions"; // 拓展模板支持表达式
import dayjs from "dayjs";

const DATE = dayjs().endOf("month");
const demoData = {
  inspectionRecords: [
    {
      fx: "分项",
      unit: "位",
      project: "井盖丢失",
      gxqqy: 1,
      flzqy: 0,
      inspectionLength: 0.0
    },
    {
      fx: "分项",
      unit: "位",
      project: "井盖丢失",
      gxqqy: 0,
      flzqy: 5,
      inspectionLength: 0.0
    }
  ],
  manholeOrderDatas: [
    {
      fx: "φ700球墨铸铁五防井盖（沥青修复）",
      project: "检查井更换",
      unit: "套",
      gxqqy: 1,
      flzqy: 0
    },
    {
      fx: "φ700混凝土重型井盖",
      project: "检查井更换",
      unit: "套",
      gxqqy: 1,
      flzqy: 0
    },
    {
      fx: "φ700复合井盖",
      project: "检查井更换",
      unit: "套",
      gxqqy: 1,
      flzqy: 0
    },
    {
      fx: "井筒φ700检查井拆修40cm",
      project: "检查井维修",
      unit: "座",
      gxqqy: 1,
      flzqy: 0
    },
    {
      fx: "检查井注浆止水",
      project: "检查井维修",
      unit: "立方米",
      gxqqy: 1,
      flzqy: 0
    },
    {
      fx: "井室日常清理",
      project: "检查井清理",
      unit: "座",
      gxqqy: 1,
      flzqy: 0
    }
  ],
  pipeOrderDatas: [
    {
      fx: "清理管道障碍物",
      project: "管道异物清理",
      unit: "立方米",
      gxqqy: 5,
      flzqy: 1
    },
    {
      fx: "4寸泵倒排降水",
      project: "排倒降水",
      unit: "合班",
      gxqqy: 0,
      flzqy: 2
    }
  ],
  images: ["https://docxtemplater.com/puffin.png", "https://docxtemplater.com/puffin.png"],
  image: "https://docxtemplater.com/puffin.png",
  /**巡检记录-工作图片 */
  inspectionRecordImg: {
    gxqqy: ["https://docxtemplater.com/puffin.png", "https://docxtemplater.com/puffin.png"],
    flzqy: ["https://docxtemplater.com/puffin.png", "https://docxtemplater.com/puffin.png"]
  },
  /**井盖工单-工作图片 */
  manholeOrderImg: {
    gxqqy: ["https://docxtemplater.com/puffin.png", "https://docxtemplater.com/puffin.png"],
    flzqy: []
  },
  /**管网工单-工作图片 */
  pipeOrderImg: {
    gxqqy: [],
    flzqy: ["https://docxtemplater.com/puffin.png", "https://docxtemplater.com/puffin.png"]
  },
  date: {
    year: DATE.year(),
    month: DATE.month() + 1,
    day: DATE.date()
  }
};
/**插图解析器 */
const imageModule = new ImageModule({
  centered: false,
  getImage(tagValue: any, tagName: string) {
    return JSZipUtils.getBinaryContent(tagValue);
  },
  getSize(img: any, tagValue: any, tagName: string) {
    return [132, 188]; // 设置图片大小
  }
});
/**依据word模版插入数据并导出word */
async function exportWord() {
  // 读取并获得模板文件的二进制内容
  const content = await JSZipUtils.getBinaryContent("/monthly-report.docx");
  // 创建一个PizZip实例，内容为模板的内容
  const zip = new PizZip(content);
  // 创建并加载docxtemplater实例对象
  const doc = new docxtemplater(zip, { modules: [imageModule], parser: expressionParser });
  // 挂载数据
  await doc.renderAsync(demoData);
  const out = doc.getZip().generate({
    type: "blob",
    mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  });
  saveAs(out, "月报.docx");
}
function getBase64FromImageUrl(url: string) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      let reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  });
}
</script>
