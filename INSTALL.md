# 栖时 QISHI v0.10.0 · Web 运行说明

在线使用：https://allen7wang.github.io/qishi-meditation-web/

版本运行包：https://github.com/allen7wang/qishi-meditation-web/archive/refs/tags/v0.10.0.zip

该归档包含可静态托管的生产网页、133 段 MP3 和声音授权说明。版本为 Web / PWA 预发布，声音库共 17 类、73 个场景。原生移动应用继续使用 v0.9.0-mobile。

## 本地运行

1. 下载并解压运行包。
2. 将包含 index.html、assets/、audio/ 的文件夹重命名为 qishi-meditation-web。
3. 在该文件夹的上一级目录运行：

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

4. 打开 http://127.0.0.1:8080/qishi-meditation-web/ ，点击后开始播放。

网页为 /qishi-meditation-web/ 子路径构建，托管时保留该路径。需要根路径版本时，在源码仓库运行 npm ci 和 npm run build。直接双击 index.html 不支持浏览器音频加载与离线缓存。

## 校验与离线

将发布附件 SHA256SUMS 放入 index.html 所在目录，在该目录运行 `shasum -a 256 -c SHA256SUMS`（Linux 可使用 `sha256sum -c SHA256SUMS`）。清单核对全部运行文件，不包含 README、更新说明、安装说明和校验清单本身。

安装与离线缓存需要 HTTPS，localhost / 127.0.0.1 为开发例外。先播放声音或使用“离线保存当前组合”，等待完成后再断网。收藏仅存当前浏览器，声音缓存由浏览器管理。

## 声音与使用边界

本版对 110 段声音的播放缓冲进行首尾交叠，另 23 段保持原始循环；原 MP3、作者和许可未变。完整署名见 audio-credits.md，三批新增素材来源见 audio-sources*.json。应遵守每段素材各自的许可，不能将整套素材统一视为原创。

本轮已完成自动测试、浏览器音频渲染和本地离线检查；主观听感和真机长时间后台播放需另行验证。双耳节拍等声音设计不代表确定的生理效果。
