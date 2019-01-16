<template>
  <div class="index">
    <div class="editor-box">
      <div class="editor" ref="editor"></div>
      <button @click="getContent">查看内容</button>
    </div>
  </div>
</template>

<script>
import Editor from 'wangeditor';
export default {
  name: 'Index',
  data () {
    return {
      editorContent: ''
    };
  },
  mounted () {
    const editor = new Editor(this.$refs.editor);
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.create();
  },
  computed: {
  },
  methods: {
    getContent () {
      alert(this.editorContent);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.index{
  .editor-box{
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    .editor{
      text-align-last: left;
    }
  }
}
</style>
