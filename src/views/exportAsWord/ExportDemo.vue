<template>
  <div>
    <el-button @click="exportPdf">导出PDF</el-button>
    <div id="export1">
      <h1 :style="{ fontSize: '18pt' }">一、文字</h1>
      <p>
        为解决在线文档导出文件格式有误，标题丢失等问题，本次主要提出目前文档导出功能问题及规范文档导出规则。本次迭代功能清单如下：
      </p>
      <h1 :style="{ fontSize: '18pt' }">二、表格</h1>
      <table style="width: 100%">
        <colgroup>
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 60%" />
        </colgroup>
        <tbody>
          <tr>
            <th colSpan="1" rowSpan="1">
              <p className="">序号</p>
            </th>
            <th colSpan="1" rowSpan="1" :style="{ height: 38 }">
              <p className="">需求类型</p>
            </th>
            <th colSpan="1" rowSpan="1" :style="{ height: 38, backgroundColor: '#fde7cd' }">
              <p className="">具体需求</p>
            </th>
          </tr>
          <tr>
            <td colSpan="1" rowSpan="1" :style="{ width: '20%', height: 38 }">
              <p className="">1</p>
            </td>
            <td colSpan="1" rowSpan="1" :style="{ width: '20%', height: 38 }">
              <p className="">优化</p>
            </td>
            <td
              colSpan="1"
              rowSpan="1"
              :style="{ width: '60%', height: 38, backgroundColor: '#fde7cd' }"
            >
              <p className="">
                规范文档中有工具（图片/脑图/表格/白板）插入时，各种格式（pdf/图片/word)文件导出要求
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan="1" rowSpan="1" :style="{ height: 38 }">
              <p className="">2</p>
            </td>
            <td colSpan="1" rowSpan="1" :style="{ height: 38 }">
              <p className="">bug</p>
            </td>
            <td colSpan="1" rowSpan="1" :style="{ height: 38, backgroundColor: '#fde7cd' }">
              <p className="">解决文档中，文字设置填充颜色后，导出的pdf/图片导出展示有误问题</p>
            </td>
          </tr>
          <tr>
            <td colSpan="1" rowSpan="1" :style="{ height: 38, backgroundColor: '#fffec7' }">
              <p className="">3</p>
            </td>
            <td colSpan="1" rowSpan="1" :style="{ height: 38, backgroundColor: '#fffec7' }">
              <p className="">bug</p>
            </td>
            <td colSpan="1" rowSpan="1" :style="{ height: 38, backgroundColor: '#fffec7' }">
              <p className="">
                解决文档中，文本内容设置编号及项目符号的情况下，word导出展示有误问题
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan="1" rowSpan="1" :style="{ height: 38 }">
              <p className="">4</p>
            </td>
            <td colSpan="1" rowSpan="1" :style="{ height: 38 }">
              <p className="">bug</p>
            </td>
            <td colSpan="1" rowSpan="1" :style="{ height: 38, backgroundColor: '#fde7cd' }">
              <p className="">解决导出pdf文件时，文件页数有误问题（目前页数自动加一页白纸）</p>
            </td>
          </tr>
          <tr>
            <td colSpan="1" rowSpan="1" :style="{ height: 38 }">
              <p className="">5</p>
            </td>
            <td colSpan="1" rowSpan="1" :style="{ height: 38 }">
              <p className="">bug</p>
            </td>
            <td colSpan="1" rowSpan="1" :style="{ height: 38, backgroundColor: '#fde7cd' }">
              <p className="">解决导出word时，导出文件无标题的问题</p>
            </td>
          </tr>
          <tr>
            <td colSpan="1" rowSpan="1" :style="{ height: 38 }">
              <p className="">6</p>
            </td>
            <td colSpan="1" rowSpan="1" :style="{ height: 38 }">
              <p className="">新增</p>
            </td>
            <td colSpan="1" rowSpan="1" :style="{ height: 38, backgroundColor: '#fde7cd' }">
              <p className="">1.导出pdf时新增是否需要展示评论</p>
              <p className="">2导出图片时新增是否需要展示水印</p>
            </td>
          </tr>
        </tbody>
      </table>
      <h1 :style="{ fontSize: '18pt' }">三、图片</h1>
      <img
        :style="{ width: 438 }"
        src="https://qtablefile.qmpoa.com/userUpload/qtable/docs/kkUNhXHmbcWHr7p7QVzquRvetmxKMeVSWq9C0fGq@thumb200.png"
      />
      <h1 :style="{ fontSize: '18pt' }">四、列表</h1>
      <div
        className="prosemirror-flat-list"
        data-list-kind="ordered"
        data-list-index="1"
        data-list-level="1"
        data-list-sequence="1."
      >
        <div className="list-marker list-marker-click-target">
          <span className="list-sequence">1.</span>
        </div>
        <div className="list-content">
          <p className="">daf</p>
        </div>
      </div>
      <div
        className="prosemirror-flat-list false"
        data-list-kind="ordered"
        data-list-index="2"
        data-list-level="1"
        data-list-sequence="2."
      >
        <div className="list-marker list-marker-click-target">
          <span className="list-sequence">2.</span>
        </div>
        <div className="list-content">
          <p className="">sdf sdf</p>
        </div>
      </div>
      <div
        className="prosemirror-flat-list false"
        data-list-kind="ordered"
        data-list-index="3"
        data-list-level="1"
        data-list-sequence="3."
      >
        <div className="list-marker list-marker-click-target">
          <span className="list-sequence">3.</span>
          <span className="list-spine"></span>
        </div>
        <div className="list-content">
          <p className="">sdfsdf safd sadf</p>
          <div
            className="prosemirror-flat-list false"
            data-list-kind="ordered"
            data-list-index="1"
            data-list-level="2"
            data-list-sequence="a."
          >
            <div className="list-marker list-marker-click-target">
              <span className="list-sequence">a.</span>
            </div>
            <div className="list-content">
              <p className="">sdf s</p>
            </div>
          </div>
          <div
            className="prosemirror-flat-list false"
            data-list-kind="ordered"
            data-list-index="2"
            data-list-level="2"
            data-list-sequence="b."
          >
            <div className="list-marker list-marker-click-target">
              <span className="list-sequence">b.</span>
            </div>
            <div className="list-content">
              <p className="">sda fsdaf</p>
            </div>
          </div>
          <div
            className="prosemirror-flat-list false"
            data-list-kind="ordered"
            data-list-index="3"
            data-list-level="2"
            data-list-sequence="c."
          >
            <div className="list-marker list-marker-click-target">
              <span className="list-sequence">c.</span>
            </div>
            <div className="list-content">
              <p className="">sadf s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { exportAsDocx } from "./utils/exportAsWord";
const exportPdf = () => {
  exportAsDocx(`#export1`, "模板.docx");
};
</script>

<style scoped lang="scss"></style>
