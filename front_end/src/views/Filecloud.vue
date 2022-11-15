<template>
  <div class="body">
    <div id="header">
      <a-row>
        <a-col>
          <template>
            <a-upload>
              <a-dropdown>
                <a-button>上传</a-button>
                <a-menu>
                  <a-menu-item>
                    <a-icon type="upload"/>上传文件
                  </a-menu-item>
                  <a-menu-item>
                    <a-icon type="folder"/>上传文件夹
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </a-upload>
          </template>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filecloud"
}
</script>

<style scoped>

</style>