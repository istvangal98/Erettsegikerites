<template>
  <b-form-group :label="label" label-for="myTxtFileLoader" label-cols-sm="3" class="m-2">
    <b-form-file
      id="myTxtFileLoader"
      v-model="file"
      accept=".txt"
      :state="Boolean(file)"
      :placeholder="placeholder"
      browse-text="Keresés..."
      drop-placeholder="Dobja ide!"
    ></b-form-file>
  </b-form-group>

  <!-- <label class="text-reader">
    {{ title }}
    <input type="file" accept=".txt" @change="loadTextFromFile" />
  </label> -->
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component
// A komponensek azonosítójában nem lehet ékezetes karakter pl.: TxtOlvasó !
export default class TxtReader extends Vue {
  private file: any = null;
  // prettier-ignore
  @Prop() private label!: string;
  @Prop() private placeholder!: string;

  @Watch("file", { immediate: true, deep: true })
  private haFileValtozik() {
    if (this.file) {
      const reader: FileReader = new FileReader();
      reader.onload = e => {
        if (e.target) {
          this.$emit("load", reader.result);
        }
      };
      if (this.file) {
        reader.readAsText(this.file);
      }
    }
  }

  // private loadTextFromFile(ev: any): void {
  //   const afile = ev.target.files[0];
  //   const reader: FileReader = new FileReader();

  //   reader.onload = e => {
  //     if (e.target) {
  //       this.$emit("load", reader.result);
  //     }
  //   };
  //   if (afile) {
  //     reader.readAsText(afile);
  //   }
  // }
}
</script>

<style>
.text-reader {
  position: relative;
  overflow: hidden;
  display: inline-block;

  border: 2px solid black;
  background-color: lightgrey;
  border-radius: 10px;
  padding: 8px 12px;
  cursor: pointer;
}
.text-reader input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
</style>
